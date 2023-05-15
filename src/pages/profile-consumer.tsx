import { Cache } from "@/app/domain/protocols/Cache";
import { ProfileTemplate } from "@/components/templates/profile-consumer-template";
import { SafeFoodAddressMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodAddressMapper";
import { SafeFoodConsumerModel } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import { SafeFoodRestrictionMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodRestrictionMapper";
import { AlertType } from "@/components/atoms/alert";
import { useState } from "react";
import { SafeFoodConsumerGateway } from "@/app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { Restriction } from "@/app/domain/entities/Restriction";

type ProfileConsumer = {
	cache: Cache;
	consumerGateway: SafeFoodConsumerGateway;
};

function ProfileConsumer({ cache, consumerGateway }: ProfileConsumer) {
	const restrictions =
		cache.getItem("restricoes") !== null
			? JSON.parse(cache.getItem("restricoes")!)
			: {};

	const consumer: SafeFoodConsumerModel =
		cache.getItem("consumer") !== null
			? JSON.parse(cache.getItem("consumer")!)
			: {};

	//CAMPOS
	const [name, setName] = useState(consumer.nome);
	const [email, setEmail] = useState(consumer.email);
	const [numberphone, setNumberPhone] = useState(consumer.telefone);
	const [newRestrictions, setNewRestrictions] = useState<Restriction>();

	//Actions
	const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isAlertVisible, setIsVisibleAlert] = useState<boolean>(false);
	const [typeAlert, setTypeAlert] = useState<AlertType>();
	const [textAlert, setTextAlert] = useState<string>();
	// if (
	// 	consumer.nome != name ||
	// 	consumer.nome != email ||
	// 	consumer.nome != numberphone ||
	// 	consumer.nome != nameconsumer ||
	// 	consumer.nome != cnpj ||
	// 	consumer.nome != cellphone ||
	// 	consumer.nome != contact ||
	// 	consumer.nome != description
	// ) {
	// 	setIsActiveButton(true);
	// } else {
	// 	setIsActiveButton(false);
	// }
	const onClickLogin = async () => {
		setIsLoading(true);
		try {
			const res = await consumerGateway.update(consumer.id, {
				nome: name,
				email: email,
				telefone: numberphone,
				restricoes: [],
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
					onFocus: e => {},
				},
				{ name: "Email: ", value: email, setUseState: setEmail },
				{
					name: "Número telefone: ",
					value: numberphone,
					setUseState: setNumberPhone,
				},
			]}
			// TODO: CRIAR MAPPER DE ADDRESS MODEL TO ADDRESS ENTITY
			listOfAddress={consumer.enderecos.map(SafeFoodAddressMapper.of)}
			// TODO: saved restrictions
			restrictionsDefault={restrictions}
			restrictionsUser={consumer.restricoes.map(SafeFoodRestrictionMapper.of)}
			onClickSave={onClickLogin}
			isSaveButtonActive={isActiveButton}
			isLoading={isLoading}
			isAlertVisible={isAlertVisible}
			textAlert={textAlert}
			typeAlert={typeAlert}
			onClickChangePassowrd={function (): void {
				throw new Error("Function not implemented.");
			}}
		/>
	);
}

export default ProfileConsumer;
