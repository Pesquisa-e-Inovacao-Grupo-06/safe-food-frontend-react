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

type ProfileConsumer = {
	cache: Cache;
	consumerGateway: SafeFoodConsumerGateway;
};

function ProfileConsumer({ cache, consumerGateway }: ProfileConsumer) {
	const restrictions: SafeFoodRestrictionModel[] =
		cache.getItem("restrictions") !== null
			? JSON.parse(cache.getItem("restrictions")!)
			: {};

	const consumer: SafeFoodConsumerModel =
		cache.getItem("consumer") !== null
			? JSON.parse(cache.getItem("consumer")!)
			: {};

	//CAMPOS
	const [name, setName] = useState(consumer.nome);
	const [email, setEmail] = useState(consumer.email);
	const [numberphone, setNumberPhone] = useState(consumer.telefone);

	//Actions
	const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isAlertVisible, setIsVisibleAlert] = useState<boolean>(false);
	const [typeAlert, setTypeAlert] = useState<AlertType>();
	const [textAlert, setTextAlert] = useState<string>();

	const consumerRestrictions = consumer.restricoes.map(item =>
		SafeFoodRestrictionMapper.of(item, true)
	);

	const IDSAtivos = consumer.restricoes.map(i => i.id);
	const total = restrictions
		.filter(item => !IDSAtivos.includes(item.id))
		.map(item => SafeFoodRestrictionMapper.of(item));

	const [totalRestrictions, setTotalRestrictions] = useState<Restriction[]>(
		[...consumerRestrictions, ...total] ?? []
	);

	console.log(totalRestrictions);
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
			restrictionsUser={totalRestrictions ?? []}
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
