import { Cache } from "@/app/domain/protocols/Cache";
import { ProfileTemplate } from "@/components/templates/profile-consumer-template";
import { SafeFoodAddressMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodAddressMapper";
import { SafeFoodConsumerModel } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import { AlertType } from "@/components/atoms/alert";
import { useEffect, useState } from "react";
import { SafeFoodConsumerGateway } from "@/app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { Restriction } from "@/app/domain/entities/Restriction";
import { SafeFoodRestrictionMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodRestrictionMapper";
import { SafeFoodRestrictionModel } from "@/app/infra/gateway/safefood/models/SafeFoodRestriction";
import { FindAddress } from "@/app/domain/usecases/FindAddress";
import { CepValidator } from "@/app/util/validations/cep-validator";
import { SafeFoodCreateAddressRequest } from "@/app/infra/gateway/safefood/models/SafeFoodAddress";
import {
	SafeFoodLoginResponse,
	SafeFoodLoginUserRequest,
} from "@/app/infra/gateway/safefood/models/SafeFoodUser";

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
	const consumerRestrictions = consumer.restricoes.map(item =>
		SafeFoodRestrictionMapper.of(item, true)
	);
	const IDSAtivos = consumer.restricoes.map(i => i.id);
	const total = restrictions
		.filter(item => !IDSAtivos.includes(item.id))
		.map(item => SafeFoodRestrictionMapper.of(item));

	const [name, setName] = useState(consumer.nome);
	const [email, setEmail] = useState(consumer.email);
	const [numberphone, setNumberPhone] = useState(consumer.telefone);
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
	const [editableAddress, setEditableAddress] =
		useState<SafeFoodCreateAddressRequest>({
			apelido: modalApelido,
			bairro: "",
			cep: modalCep,
			cidade: "",
			complemento: "",
			estado: "",
			logradouro: "",
			numero: modalNumero,
		});

	useEffect(() => {
		setTotalRestrictions([...consumerRestrictions, ...total] ?? []);
	}, [consumerRestrictions, total]);

	//Actions

	useEffect(() => {
		if (modalCep.length > 8) {
			findAddress(modalCep);
		}
	}, [modalCep, modalApelido, modalNumero]);

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

	const onClickSaveNewAddress = async () => {
		console.log(editableAddress);
		if (!editableAddress) {
			return;
		}
		console.log("id", consumer.id);
		try {
			const addNewAddress = await consumerGateway.addAddress(
				consumer.id,
				editableAddress
			);
			if (addNewAddress.status != 200) {
				setTypeAlert("warning");
				setTextAlert("Erro ao cadastrar o endereço");
				consumer.enderecos.push(addNewAddress.data);
			} else {
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

	const onClickLogin = async () => {
		setIsLoading(true);
		try {
			const res = await consumerGateway.update(user.usuario.id, {
				nome: name,
				email: email,
				telefone: numberphone,
				restricoes: totalRestrictions
					.map(item => item.params.id)
					.filter((id): id is number => typeof id === "number"),
				file: imageProfile,
			});

			if (res?.status !== 200) {
				setIsVisibleAlert(true);
				setTypeAlert("warning");
				setTextAlert("Alguns dados podem estar com formato incorreto!");
				return;
			}

			setIsLoading(false);
			setTypeAlert("success");
			setTextAlert("Cadastro alterado com sucesso!");
		} catch (e) {
			setIsVisibleAlert(true);
			setTypeAlert("warning");
			setTextAlert(
				"Servidor não está respondendo no momento, tente daqui a pouco ou entre em contato"
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<ProfileTemplate
			urlDefault={consumer.imagem}
			form={[
				{
					name: "Nome: ",
					value: name,
					setUseState: setName,
					disabled: !isEditable,
				},
				{
					name: "Email: ",
					value: email,
					setUseState: setEmail,
					disabled: !isEditable,
				},
				{
					name: "Número telefone: ",
					value: numberphone,
					setUseState: setNumberPhone,
					disabled: !isEditable,
				},
			]}
			listOfAddress={consumer.enderecos.map(SafeFoodAddressMapper.of)}
			// TODO: saved restrictions
			restrictionsUser={totalRestrictions}
			onClickSave={onClickLogin}
			isSaveButtonActive={isActiveButton}
			isLoading={isLoading}
			isAlertVisible={isAlertVisible}
			textAlert={textAlert}
			typeAlert={typeAlert}
			onClickChangePassword={function (): void {
				throw new Error("Function not implemented.");
			}}
			onClickSaveButton={() => setIsEditable(false)}
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
		/>
	);
}

export default ProfileConsumer;
