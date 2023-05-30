import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodAddressMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodAddressMapper";
import { SafeFoodConsumerModel } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import { AlertType } from "@/components/atoms/alert";
import { useCallback, useEffect, useState } from "react";
import { SafeFoodConsumerGateway } from "@/app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { Restriction } from "@/app/domain/entities/Restriction";
import { SafeFoodRestrictionMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodRestrictionMapper";
import { SafeFoodRestrictionModel } from "@/app/infra/gateway/safefood/models/SafeFoodRestriction";
import { FindAddress } from "@/app/domain/usecases/FindAddress";
import { CepValidator } from "@/app/util/validations/cep-validator";
import {
	SafeFoodAddressModel,
	SafeFoodCreateAddressRequest,
} from "@/app/infra/gateway/safefood/models/SafeFoodAddress";
import { SafeFoodLoginResponse } from "@/app/infra/gateway/safefood/models/SafeFoodUser";
import { Address } from "@/app/domain/entities/Address";
import { SafeFoodUpdateConsumerRequest } from "../app/infra/gateway/safefood/models/SafeFoodConsumer";
import { ProfileTemplate } from "@/components/templates/profile-consumer/profile-consumer-template";
import { useNavigate } from "react-router";

type ProfileConsumerProps = {
	cache: Cache;
	consumerGateway: SafeFoodConsumerGateway;
	cepValidator: CepValidator;
	findAddressUsecase: FindAddress;
};

function ProfileConsumer({
	cache,
	consumerGateway,
	cepValidator,
	findAddressUsecase,
}: ProfileConsumerProps) {

	const navigate = useNavigate();
	//Cache
	const restrictions: SafeFoodRestrictionModel[] =
		cache.getItem("restrictions") !== null
			? JSON.parse(cache.getItem("restrictions")!)
			: {};

	const consumer: SafeFoodConsumerModel =
		cache.getItem("consumer") !== null
			? JSON.parse(cache.getItem("consumer")!)
			: {};


	const user: SafeFoodLoginResponse =
		cache.getItem("user") !== null ? JSON.parse(cache.getItem("user")!) : {};

	//CAMPOS
	const consumerRestrictions = consumer.restricoes
		? consumer.restricoes.map(item => SafeFoodRestrictionMapper.of(item, true))
		: [];

	const IDSAtivos = consumer.restricoes
		? consumer.restricoes.map(i => i.id)
		: [];
	const total = restrictions
		.filter(item => !IDSAtivos.includes(item.id))
		.map(item => SafeFoodRestrictionMapper.of(item));

	const [consumerState, setConsumerState] = useState<SafeFoodConsumerModel>({
		...consumer,
		enderecos: consumer.enderecos || [],
	});

	const updateConsumer = useCallback((consumer: SafeFoodConsumerModel) => {
		setConsumerState(consumer);
		cache.setItem("consumer", JSON.stringify(consumer));
	}, []);

	const [imageProfile, setImageProfile] = useState<File>();
	const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isEditable, setIsEditable] = useState<boolean>(false);
	const [isAlertVisible, setIsVisibleAlert] = useState<boolean>(false);
	const [typeAlert, setTypeAlert] = useState<AlertType>();
	const [textAlert, setTextAlert] = useState<string>();
	const [totalRestrictions, setTotalRestrictions] =
		useState<Restriction[]>(total);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [modalCep, setModalCep] = useState<string>("");
	const [modalNumero, setModalNumero] = useState<string>("");
	const [modalApelido, setModalApelido] = useState<string>("");
	const [listOfAddress, setListOfAddress] = useState<Address[]>(
		consumer.enderecos && consumer.enderecos.length > 0
			? consumer.enderecos.map(SafeFoodAddressMapper.of)
			: []
	);
	const [editableAddress, setEditableAddress] = useState<SafeFoodAddressModel>(
		{} as SafeFoodAddressModel
	);

	const handleAddressCardClick = (address: SafeFoodAddressModel) => {
		setIsModalVisible(true);
		setModalCep(address?.cep ?? "");
		setModalApelido(address?.apelido ?? "");
		setModalNumero(address?.numero ?? "");
		setEditableAddress({
			...address,
			cep: address.cep || modalCep,
			complemento: address?.complemento || "",
			logradouro: address?.logradouro || "",
			estado: address?.estado || "",
			bairro: address?.bairro || "",
			cidade: address?.cidade || "",
			numero: address.cep || modalNumero,
			apelido: address.apelido || "",
		});
	};

	const findAddress = (cep: string) => {
		findAddressUsecase
			.execute(cep)
			.then(({ params }) => {
				const {
					cep,
					complemento,
					logradouro,
					estado,
					bairro,
					cidade,
					numero,
					apelido,
				} = params;
				setEditableAddress({
					...editableAddress,
					cep: modalCep || "",
					complemento: complemento || "",
					logradouro: logradouro || "",
					estado: estado || "",
					bairro: bairro || "",
					cidade: cidade || "",
					numero: modalNumero || "",
					apelido: modalApelido || "",
				});
			})
			.catch(err => {
				// clearAddress(cep);
				// setError("CEP invalido");
			});
	};
	useEffect(() => {
		setTotalRestrictions([...consumerRestrictions, ...total] ?? []);
	}, []);

	//Actions

	useEffect(() => {
		if (modalCep.length > 8) {
			findAddress(modalCep);
		}
	}, [modalCep, modalApelido, modalNumero]);

	const onClickChangePassword = () => {
		navigate("/change-password");
	}


	const onClickSaveNewAddress = async (
		address: SafeFoodCreateAddressRequest
	) => {
		if (!address) {
			return;
		}
		try {
			const addNewAddress = await consumerGateway.addAddress(
				user.usuario.id,
				address
			);
			const validStatus = [200, 201];
			if (!validStatus.includes(addNewAddress.status)) {
				setTypeAlert("warning");
				setTextAlert("Erro ao cadastrar o endereço");
			} else {
				const enderecosOld = consumerState.enderecos.filter(
					item => item.id !== addNewAddress.data.id
				);
				enderecosOld.push(addNewAddress.data);
				const newConsumer: SafeFoodConsumerModel = {
					...consumerState,
					enderecos: enderecosOld,
				};
				updateConsumer(newConsumer);
				setTypeAlert("success");
				setTextAlert("Endereço cadastrado com sucesso");
			}
		} catch (e) {
			setTypeAlert("warning");
			setTextAlert("Erro ao cadastrar o endereço");
		} finally {
			setIsVisibleAlert(true);
			setIsModalVisible(false);
		}
	};
	const onClickUpdateAddress = async (address: SafeFoodAddressModel) => {
		if (!address) {
			return;
		}
		try {
			const response = await consumerGateway.updateAddress(
				user.usuario.id,
				address.id,
				address
			);
			const validStatus = [200, 201];
			if (!validStatus.includes(response.status)) {
				setTypeAlert("warning");
				setTextAlert("Erro ao cadastrar o endereço");
			} else {
				const indexAddress = consumerState.enderecos.findIndex(
					item => item.id === response.data.id
				);
				consumerState.enderecos[indexAddress] = response.data;
				updateConsumer(consumerState);
				setListOfAddress(consumerState.enderecos.map(SafeFoodAddressMapper.of));
				setTypeAlert("success");
				setTextAlert("Endereço cadastrado com sucesso");
			}
		} catch (e) {
			setTypeAlert("warning");
			setTextAlert("Erro ao cadastrar o endereço");
		} finally {
			setIsVisibleAlert(true);
			setIsModalVisible(false);
		}
	};

	const onClickDeleteAddress = async (idAddress: number) => {
		try {
			const res = await consumerGateway.removeAddress(consumer.id, idAddress);
			const validStatus = [200, 201, 204];
			if (!validStatus.includes(res)) {
				setTypeAlert("warning");
				setTextAlert("Alguns dados podem estar com formato incorreto!");

				return;
			}
			const consumerNewDataAddress: SafeFoodAddressModel[] =
				consumerState.enderecos.filter(item => item.id !== idAddress);
			const newConsumer = { ...consumerState, enderecos: consumerNewDataAddress };
			updateConsumer(newConsumer);
			const newListOfAddress =
				consumerNewDataAddress.length > 0
					? consumerNewDataAddress.map(SafeFoodAddressMapper.of)
					: [];
			setListOfAddress(newListOfAddress);
			setTypeAlert("success");
			setTextAlert("Endereço excluído com sucesso!");
		} catch (e) {
			setTypeAlert("danger");
			setTextAlert("Endereço não excluído!");
		} finally {
			setIsVisibleAlert(true);
		}
	};

	const onClickUpdate = async (model: SafeFoodUpdateConsumerRequest) => {
		setIsLoading(true);

		if (typeof imageProfile == "object") {
			model.file = imageProfile;
		}

		try {
			const res = await consumerGateway.update(user.usuario.id, model);
			const validStatus = [200, 201];
			if (!validStatus.includes(res.status)) {
				setTypeAlert("warning");
				setTextAlert("Alguns dados podem estar com formato incorreto!");
				return;
			}

			updateConsumer(res.data);
			setIsLoading(false);
			setTypeAlert("success");
			setTextAlert("Cadastro alterado com sucesso!");
		} catch (e) {
			setTypeAlert("warning");
			setTextAlert(
				"Servidor não está respondendo no momento, tente daqui a pouco ou entre em contato"
			);
		} finally {
			setIsLoading(false);
		}
	};

	const onClickRestriction = (restriction: Restriction) => {
		const index = totalRestrictions.findIndex(
			item => item.params.id === restriction.params.id
		);
		if (index > -1) {
			totalRestrictions[index].params.isActive =
				!totalRestrictions[index].params.isActive;
			setTotalRestrictions(totalRestrictions);
			const newTotalRestrictionsIds = totalRestrictions
				.filter(item => item.params.isActive)
				.map(SafeFoodRestrictionMapper.ofEntity);
			setConsumerState({
				...consumerState,
				restricoes: newTotalRestrictionsIds,
			});
		}
	};

	const deleteUser = async (id: number) => {
		console.log("teste")
		if (!id) {
			return;
		}
		try {
			const res = await consumerGateway.remove(id);
			const validStatus = [200, 204];
			if (!validStatus.includes(res.status)) {
				window.location.href = "/";
			}
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		if (consumerState.enderecos && consumerState.enderecos.length > 0) {
			setListOfAddress(consumerState.enderecos.map(SafeFoodAddressMapper.of));
		}
	}, [consumerState]);

	return (
		<ProfileTemplate
			consumer={consumerState}
			urlDefault={consumer.imagem}
			onClickUpdateAddress={onClickUpdateAddress}
			form={[
				{
					name: "Nome: ",
					value: consumerState.nome,
					setUseState: nome => {
						setConsumerState({
							...consumerState,
							nome,
						});
					},
					disabled: !isEditable,
				},
				{
					name: "Email: ",
					value: consumerState.email,
					setUseState: email => {
						setConsumerState({
							...consumerState,
							email,
						});
					},
					disabled: !isEditable,
				},
				{
					name: "Número telefone: ",
					value: consumerState.telefone,
					setUseState: telefone => {
						setConsumerState({
							...consumerState,
							telefone,
						});
					},
					disabled: !isEditable,
				},
			]}
			listOfAddress={listOfAddress}
			onClickRestriction={onClickRestriction}
			restrictionsUser={totalRestrictions}
			onClickSave={onClickUpdate}
			isSaveButtonActive={isActiveButton}
			isLoading={isLoading}
			isAlertVisible={isAlertVisible}
			textAlert={textAlert}
			typeAlert={typeAlert}
			onClickChangePassword={onClickChangePassword}
			onClickSaveButton={() => {
				setIsEditable(false);
				// onClickUpdate()
			}}
			onClickEditable={() => setIsEditable(true)}
			isEditable={isEditable}
			onClickSaveNewAddress={onClickSaveNewAddress}
			address={editableAddress}
			onChange={async (ev) => {
				const str = ev.currentTarget.value;
				const value = cepValidator.format(str);
				setModalCep(value);

				if (value.length > 8) {
					findAddress(modalCep);
				}
			}}
			cep={modalCep}
			numero={modalNumero}
			onChangeNumero={e => {
				setModalNumero(e.currentTarget.value);
			}}
			apelido={modalApelido}
			onChangeApelido={e => {
				setModalApelido(e.currentTarget.value);
			}}
			toggleModal={() => {
				setIsModalVisible(!isModalVisible);
			}}
			isModalVisible={isModalVisible}
			onClickOpenModalAddress={() => setIsModalVisible(true)}
			fileChange={file => {
				setImageProfile(file);
			}}
			onClickCard={handleAddressCardClick}
			cache={cache}
			onClickDeleteAddress={onClickDeleteAddress}
			deleteUser={deleteUser} />
	);
}

export default ProfileConsumer;
