import { ProfileEstablishmentTemplate } from "@/components/templates/profile-establishment/profile-establishment-template";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodCreateEstablishmentRequest, SafeFoodEstablishmentModel } from "@/app/infra/gateway/safefood/models/SafeFoodEstablishment";
import { ChangeEvent, useCallback, useState } from "react";
import { SafeFoodEstablishmentGateway } from "../app/infra/gateway/safefood/SafeFoodEstablishmentGateway";
import { AlertType } from "@/components/atoms/alert";
import { SafeFoodAddressModel, SafeFoodCreateAddressRequest } from "@/app/infra/gateway/safefood/models/SafeFoodAddress";
import { CepValidator } from "@/app/util/validations/cep-validator";
import { FindAddress } from "@/app/domain/usecases/FindAddress";
import { Address } from "@/app/domain/entities/Address";

type ProfileEstablishment = {
	cache: Cache;
	establishmentGateway: SafeFoodEstablishmentGateway;
	cepValidator: CepValidator;
	findAddressUsecase: FindAddress;
};

function ProfileEstablishment({
	cache,
	establishmentGateway,
	cepValidator,
	findAddressUsecase
	
}: ProfileEstablishment) {
	const establishment: SafeFoodEstablishmentModel =
		cache.getItem("establishment") !== null
			? JSON.parse(cache.getItem("establishment")!)
			: {};

	//CAMPOS
	const [imageProfile, setImageProfile] = useState<File>();

	//Actions
	const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isAlertVisible, setIsVisibleAlert] = useState<boolean>(false);
	const [typeAlert, setTypeAlert] = useState<AlertType>();
	const [textAlert, setTextAlert] = useState<string>();
	const [isEditable, setIsEditable] = useState<boolean>(false);
	const [establishmentState, setEstablishmentState] = useState<SafeFoodEstablishmentModel>({
		...establishment,
	});
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [addressState, setAddressState] = useState<SafeFoodAddressModel>(establishmentState.endereco!);
	const [modalCep, setModalCep] = useState<string>("");
	const [modalNumero, setModalNumero] = useState<string>("");
	const [modalApelido, setModalApelido] = useState<string>("");
	const [modalComplemento, setModalComplemento] = useState<string>("");

	const updateEstablishment = useCallback((establishment: SafeFoodEstablishmentModel) => {
		setEstablishmentState(establishment);
		cache.setItem("establishment", JSON.stringify(establishment));
	}, []);

	const onClickUpdateInfo = async (modal: SafeFoodCreateEstablishmentRequest) => {
		debugger
		setIsLoading(true);

		if (typeof imageProfile == "object") {
			modal.file = imageProfile;
		}
		if (!establishmentState) {
			return;
		}
		try {
			const res = await establishmentGateway.update(establishment.id, modal);
			const validStatus = [200, 201];
			if (!validStatus.includes(res.status)) {
				setTypeAlert("warning");
				setTextAlert("Alguns dados podem estar com formato incorreto!");
				return;
			}
			updateEstablishment(res.data);
			setTypeAlert("success");
			setTextAlert("Cadastro alterado com sucesso!");
		} catch (e) {
			setTypeAlert("warning");
			setTextAlert(
				"Servidor não está respondendo no momento, tente daqui a pouco ou entre em contato"
			);
		} finally {
			setIsVisibleAlert(true);
			setIsLoading(false);
		}
	};

	const onClickEditAddress = () => {
		setIsModalVisible(true);

	};

	const onClickUpdateAddress = async (idEstablishment: number, modal: SafeFoodAddressModel) => {
		setIsLoading(true);
		try {
			const res = await establishmentGateway.changeAddress(idEstablishment, modal);

			const validStatus = [200, 201];
			if (!validStatus.includes(res.status)) {
				setTypeAlert("warning");
				setTextAlert("Alguns dados podem estar com formato incorreto!");
				return;
			}
			updateEstablishment({ ...establishment, endereco: modal });
			setTypeAlert("success");
			setTextAlert("Cadastro alterado com sucesso!");
		} catch (e) {
			setTypeAlert("warning");
			setTextAlert(
				"Servidor não está respondendo no momento, tente daqui a pouco ou entre em contato"
			);
		} finally {
			setIsVisibleAlert(true);
			setIsLoading(false);
			setIsModalVisible(false)
		}
	};

	const changeApelido = useCallback(
		(ev: ChangeEvent<HTMLInputElement>) => {
			const str = ev.currentTarget.value;
			const addressUpgrade = addressState;
			addressUpgrade.apelido = str;
			setAddressState(addressUpgrade)
			setModalApelido(str);
		console.log(addressState)
		console.log(modalApelido)
	},
		[setModalApelido]
	);
	const changeCep = useCallback(
		(ev: ChangeEvent<HTMLInputElement>) => {
			const str = ev.currentTarget.value;
			const addressUpgrade = addressState;
			addressUpgrade.cep = str;
			setAddressState(addressUpgrade);
			setModalCep(str);
	},
		[setModalCep]
	);
	const changeNumero = useCallback(
		(ev: ChangeEvent<HTMLInputElement>) => {
			const str = ev.currentTarget.value;
			const addressUpgrade = addressState;
			addressUpgrade.numero = str;
			setAddressState(addressUpgrade);
			setModalNumero(str);
		console.log(modalApelido)
	},
		[setModalNumero]
	);
	const changeComplemento = useCallback(
		(ev: ChangeEvent<HTMLInputElement>) => {
			const str = ev.currentTarget.value;
			const addressUpgrade = addressState;
			addressUpgrade.complemento = str;
			setAddressState(addressUpgrade);
			setModalComplemento(str);
			console.log(modalApelido)
		},
		[setModalComplemento]
	);

	const findAddress = async (cep: string) => {
		try {
		  const { params } = await findAddressUsecase.execute(cep);
		  const {
			cep: modalCep = "",
			numero: modalNumero = "",
			apelido: modalApelido = "",
			complemento = "",
			logradouro = "",
			estado = "",
			bairro = "",
			cidade = "",
			formatado = "",
			id = 0
		  } = params;
		  setEstablishmentState({
			...establishment,
			endereco: {
			  cep: modalCep,
			  complemento,
			  logradouro,
			  estado,
			  bairro,
			  cidade,
			  numero: modalNumero,
			  apelido: modalApelido,
			  formatado: formatado || "",
			  id
			}
		  });
		} catch (err) {
			console.log(err);
		}
	  };
	  
	// useEffect(() => {
	// 	if (establishmentState.endereco && establishmentState.endereco != undefined) {
	// 		setEstablishmentState({ ...establishment, endereco: establishmentState.endereco });
	// 	}
	// }, [establishmentState]);
	return establishment ? (
		<ProfileEstablishmentTemplate
			listOfComponentAdministration={[
				{
					name: "Nome: ",
					value: establishmentState.nome,
					setUseState: nome => {
						setEstablishmentState({
							...establishmentState,
							nome,
						});
					},
					disabled: !isEditable
				},
				{
					name: "Email: ", value: establishmentState.email,
					setUseState: email => {
						setEstablishmentState({
							...establishmentState,
							email,
						});
					},
					disabled: !isEditable
				},
				{
					name: "Número telefone: ",
					value: establishmentState.celular ?? "não informado",
					setUseState: celular => {
						setEstablishmentState({
							...establishmentState,
							celular,
						});
					},
					disabled: !isEditable
				},
			]}
			listOfComponentEstablishment={[
				{
					name: "Nome da empresa: ",
					value: establishmentState.nomeEmpresa,
					setUseState: nomeEmpresa => {
						setEstablishmentState({
							...establishmentState,
							nomeEmpresa,
						});
					},
					disabled: !isEditable
				},
				{
					name: "Cnpj: ", value: establishmentState.cnpj,
					setUseState: cnpj => {
						setEstablishmentState({
							...establishmentState,
							cnpj,
						});
					},
					disabled: !isEditable
				},
				{
					name: "Celular (responsável): ",
					value: establishmentState.celular,
					setUseState: celular => {
						setEstablishmentState({
							...establishmentState,
							celular,
						});
					},
					disabled: !isEditable
				},
				{
					name: "Contato (Whatsaap para clientes): ",
					value: establishmentState.contatoCliente,
					setUseState: contatoCliente => {
						setEstablishmentState({
							...establishmentState,
							contatoCliente,
						});
					},
					disabled: !isEditable
				},
				{
					name: "Descrição: ",
					value: establishmentState.descricao,
					setUseState: descricao => {
						setEstablishmentState({
							...establishmentState,
							descricao,
						});
					},
					disabled: !isEditable
				},
			]}
			address={addressState}
			urlDefault={establishment.imagem}
			isSaveButtonActive={isActiveButton}
			isLoading={isLoading}
			isAlertVisible={isAlertVisible}
			textAlert={textAlert}
			typeAlert={typeAlert}
			cache={cache}
			establishment={establishmentState}
			isEditable={isEditable}
			isModalVisible={isModalVisible}
			toggleModal={function (): void {
				throw new Error("Function not implemented.");
			} }
			onChangeInputApelido={changeApelido}
			onChangeInputCep={changeCep}
			onChangeInputComplemento={changeComplemento}
			onChangeInputNumero={changeNumero}
			onClickUpdateAddress={onClickUpdateAddress}
			onClickSave={onClickUpdateInfo}
			onClickEditable={() => setIsEditable(true)}
			onClickSaveButton={() => {
				setIsEditable(false);
				// onClickUpdate()
			} }
			onClickChangePassword={function (): void {
				throw new Error("Function not implemented.");
			} } onClickEditAddress={onClickEditAddress} />
	) : (
		<h1>Carregando...</h1>
	);
}
export default ProfileEstablishment;
