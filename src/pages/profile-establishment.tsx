import { ProfileEstablishmentTemplate } from "@/components/templates/profile-establishment-template";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodEstablishmentModel } from "@/app/infra/gateway/safefood/models/SafeFoodEstablishment";
import { useState } from "react";
import { SafeFoodEstablishmentGateway } from "../app/infra/gateway/safefood/SafeFoodEstablishmentGateway";
import { AlertType } from "@/components/atoms/alert";

type ProfileEstablishment = {
	cache: Cache;
	establishmentGateway: SafeFoodEstablishmentGateway;
};

function ProfileEstablishment({
	cache,
	establishmentGateway,
}: ProfileEstablishment) {
	const establishment: SafeFoodEstablishmentModel =
		cache.getItem("establishment") !== null
			? JSON.parse(cache.getItem("establishment")!)
			: {};

	//CAMPOS
	const [imageProfile, setImageProfile] = useState(establishment.imagem);
	const [name, setName] = useState(establishment.nome);
	const [email, setEmail] = useState(establishment.email);
	const [numberphone, setNumberPhone] = useState(establishment.celular);
	const [nameEstablishment, setNameEstablishment] = useState(
		establishment.nomeEmpresa
	);
	const [cnpj, setCNPJ] = useState(establishment.cnpj);
	const [cellphone, setCellphone] = useState(establishment.celular);
	const [contact, setContact] = useState(establishment.contatoCliente);
	const [description, setDescription] = useState(establishment.descricao);

	//Actions
	const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isAlertVisible, setIsVisibleAlert] = useState<boolean>(false);
	const [typeAlert, setTypeAlert] = useState<AlertType>();
	const [textAlert, setTextAlert] = useState<string>();
	const [isEditable, setIsEditable] = useState<boolean>(false);

	const onClickUpdateInfo = async () => {
		setIsLoading(true);
		try {
			const res = await establishmentGateway.update(establishment.id, {
				nome: name,
				email: email,
				nomeEmpresa: nameEstablishment,
				descricao: description,
				celular: cellphone!,
				contatoCliente: contact,
				cnpj: cnpj,
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
		} finally {
			setIsLoading(false);
		}
	};

	const onClickDeleteAddress = async (idAddress: number) => {

	};

	const handleAddressCardClick = (apelidoEnderecoSelecionado: string) => {

	};
	return establishment ? (
		<ProfileEstablishmentTemplate
			listOfComponentAdministration={[
				{
					name: "Nome: ",
					value: name,
					setUseState: setName,
					onFocus: e => {
						e.target.value = "a";
						setName("a");
					},
					disabled: !isEditable
				},
				{ name: "Email: ", value: email, setUseState: setEmail, disabled: !isEditable },
				{
					name: "Número telefone: ",
					value: numberphone ?? '',
					setUseState: setNumberPhone, disabled: !isEditable
				},
			]}
			listOfComponentEstablishment={[
				{
					name: "Nome da empresa: ",
					value: nameEstablishment,
					setUseState: setNameEstablishment, disabled: !isEditable
				},
				{ name: "Cnpj: ", value: cnpj, setUseState: setCNPJ, disabled: !isEditable },
				{
					name: "Celular (responsável): ",
					value: cellphone || "",
					setUseState: setCellphone, disabled: !isEditable
				},
				{
					name: "Contato (Whatsaap para clientes): ",
					value: contact,
					setUseState: setContact, disabled: !isEditable
				},
				{
					name: "Descrição: ",
					value: description,
					setUseState: setDescription, disabled: !isEditable
				},
			]}
			address={establishment.endereco!}
			urlDefault={imageProfile}
			onClickSave={onClickUpdateInfo}
			isSaveButtonActive={isActiveButton}
			isLoading={isLoading}
			isAlertVisible={isAlertVisible}
			textAlert={textAlert}
			typeAlert={typeAlert}
			onClickChangePassword={function (): void {
				throw new Error("Function not implemented.");
			}}
			cache={cache}
			onClickCard={handleAddressCardClick}
			onClickDeleteAddress={onClickDeleteAddress} />
	) : (
		<h1>Carregando...</h1>
	);
}
export default ProfileEstablishment;
