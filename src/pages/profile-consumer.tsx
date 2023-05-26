import { Cache } from "@/app/domain/protocols/Cache";
import { ProfileTemplate } from "@/components/templates/profile-consumer-template";
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

	console.log(consumerRestrictions);

	const IDSAtivos = consumer.restricoes
		? consumer.restricoes.map(i => i.id)
		: [];
	const total = restrictions
		.filter(item => !IDSAtivos.includes(item.id))
		.map(item => SafeFoodRestrictionMapper.of(item));

	const [consumerState, setConsumer] = useState(consumer);
	console.table(consumer);

	const updateConsumer = useCallback((consumer: SafeFoodConsumerModel) => {
		setConsumer(consumer);
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
	const [listOfAddress, setListOfAddres] = useState<Address[]>(
		consumer.enderecos && consumer.enderecos.length > 0
			? consumer.enderecos.map(SafeFoodAddressMapper.of)
			: []
	);
	const [editableAddress, setEditableAddress] = useState<
		SafeFoodCreateAddressRequest | SafeFoodAddressModel
	>({
		apelido: modalApelido,
		bairro: "",
		cep: modalCep,
		cidade: "",
		complemento: "",
		estado: "",
		logradouro: "",
		numero: modalNumero,
	});

	const [enderecoId, setEnderecoId] = useState<string>("");

	const handleAddressCardClick = (apelidoEnderecoSelecionado: string) => {
		setEnderecoId(apelidoEnderecoSelecionado);
		setIsModalVisible(true);
		const enderecoInfo = consumer.enderecos.find(
			item => item.apelido === apelidoEnderecoSelecionado
		);
		setModalCep(enderecoInfo?.cep ?? "");
		setModalApelido(enderecoInfo?.apelido ?? "");
		setModalNumero(enderecoInfo?.numero ?? "");
		setEditableAddress({
			...editableAddress,
			cep: modalCep || "",
			complemento: enderecoInfo?.complemento || "",
			logradouro: enderecoInfo?.logradouro || "",
			estado: enderecoInfo?.estado || "",
			bairro: enderecoInfo?.bairro || "",
			cidade: enderecoInfo?.cidade || "",
			numero: modalNumero || "",
			apelido: apelidoEnderecoSelecionado || "",
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
				console.log("cep:", cep);
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
				console.log(editableAddress);
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

	const onClickSaveNewAddress = async () => {
		console.log(editableAddress);
		if (!editableAddress) {
			return;
		}
		console.log("id", user.usuario.id);
		try {
			const addNewAddress = await consumerGateway.addAddress(
				user.usuario.id,
				editableAddress
			);
			const validStatus = [200, 201];
			if (!validStatus.includes(addNewAddress.status)) {
				setTypeAlert("warning");
				setTextAlert("Erro ao cadastrar o endereço");
				consumerState.enderecos.push(editableAddress as SafeFoodAddressModel);
				updateConsumer(consumerState);
			} else {
				setListOfAddres(prev => [
					...prev,
					SafeFoodAddressMapper.of(addNewAddress.data),
				]);
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
		console.log("dados delete address:", consumer.id, idAddress);
		try {
			const res = await consumerGateway.removeAddress(consumer.id, idAddress);
			const validStatus = [200, 201];
			if (!validStatus.includes(res.status)) {
				setTypeAlert("success");
				setTextAlert("Endereço excluído com sucesso!");
				setIsVisibleAlert(true);
			}
		} catch (e) {
			setTypeAlert("danger");
			setTextAlert("Endereço não excluído!");
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
				updateConsumer(res.data);
				console.table(res.data);
				return;
			}

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

	useEffect(() => {
		console.table(consumerState);
	}, [consumerState]);

	return (
		<ProfileTemplate
			consumer={consumerState}
			urlDefault={consumer.imagem}
			form={[
				{
					name: "Nome: ",
					value: consumerState.nome,
					setUseState: nome => {
						setConsumer({
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
						setConsumer({
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
						setConsumer({
							...consumerState,
							telefone,
						});
					},
					disabled: !isEditable,
				},
			]}
			listOfAddress={listOfAddress}
			// TODO: saved restrictions
			restrictionsUser={totalRestrictions}
			onClickSave={onClickUpdate}
			isSaveButtonActive={isActiveButton}
			isLoading={isLoading}
			isAlertVisible={isAlertVisible}
			textAlert={textAlert}
			typeAlert={typeAlert}
			onClickChangePassword={function (): void {
				throw new Error("Function not implemented.");
			}}
			onClickSaveButton={() => {
				setIsEditable(false);
				// onClickUpdate()
			}}
			onClickEditable={() => setIsEditable(true)}
			isEditable={isEditable}
			onClickSaveNewAddress={onClickSaveNewAddress}
			address={editableAddress}
			onChange={async ev => {
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
			onChangeFile={file => {
				setImageProfile(file);
			}}
			onClickCard={handleAddressCardClick}
			cache={cache}
			onClickDeleteAddress={onClickDeleteAddress}
		/>
	);
}

export default ProfileConsumer;
