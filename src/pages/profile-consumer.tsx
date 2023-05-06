import { Restriction } from "@/app/domain/entities/Restriction";
import { ProfileTemplate } from "../components/templates/profile-consumer-template";
import { SafeFoodConsumerGateway } from "@/app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodUserGateway } from "@/app/infra/gateway/safefood/SafeFoodUserGateway";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { Address } from "@/app/domain/entities/Address";

type ProfileConsumer = {
	gateway: SafeFoodUserGateway;
	consumerGateway: SafeFoodConsumerGateway;
};

function ProfileConsumer({ gateway, consumerGateway }: ProfileConsumer) {
	const navigate = useNavigate();
	const [restrictions, setRestrictions] = useState<Restriction[]>([]);
	const [address, setAddress] = useState<Address[]>([]);
	const [infoCompletedForm, setInfoCompletedForm] = useState<any>([]);
	const [urlImageProfile, setUrlImageProfile] = useState<string | null>();
	const [getIdUser] = useState<number>(1);

	const getRestrictions = useCallback(async () => {
		const responseConsumer = await consumerGateway.findById(getIdUser);

		setRestrictions(responseConsumer.data.restricoes);
		setUrlImageProfile(responseConsumer.data.imagem);
		setAddress(responseConsumer.data.enderecos);
		setInfoCompletedForm([
			{ key: "email", value: responseConsumer.data.email },
			{ key: "name", value: responseConsumer.data.nome },
			{ key: "phone", value: responseConsumer.data.telefone },
		]);

		console.log(getRestrictions);
	}, []);

	return (
		<ProfileTemplate
			// TODO: precisa receber imagem de banner PRECISA CONVERSAR
			// TODO: /consumidor/{id}
			urlDefault={urlImageProfile}
			// TODO:  /consumidor/{id} & /estabelecimento/{id} - post : nome, email, senha n deve aparecer, telefone,
			form={[
				{ name: "Nome:", value: infoCompletedForm.name },
				{ name: "Email:", value: infoCompletedForm.email },
				// TODO: NUMERO NÃO FAZ SENTIDO
				{ name: "Número:", value: "" },
				{ name: "Número telefone:", value: infoCompletedForm.phone },
				{ name: "Senha:", value: "**********" },
			]}
			// TODO: VERIFICAR SOBRE O /consumidor/{id} converter endereço completo para string
			listOfAddress={address}
			// TODO: /consumidor/{id} - get
			restrictions={restrictions}
		/>
	);
}

export default ProfileConsumer;
