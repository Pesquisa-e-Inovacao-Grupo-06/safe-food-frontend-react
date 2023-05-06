import { SafeFoodConsumerGateway } from "@/app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Cache } from "@/app/domain/protocols/Cache";
import { ProfileTemplate } from "@/components/templates/profile-consumer-template";
import {
	SafeFoodConsumerModel,
	SafeFoodConsumerResponse,
} from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import { SafeFoodUsuarioModel } from "@/app/infra/gateway/safefood/models/SafeFoodUser";

type ProfileConsumer = {
	consumerGateway: SafeFoodConsumerGateway;
	cache: Cache;
};

function ProfileConsumer({ consumerGateway, cache }: ProfileConsumer) {
	const navigate = useNavigate();
	// const [address, setAddress] = useState<Address[]>([]);

	const [urlImageProfile, setUrlImageProfile] = useState<string | null>();
	const [getIdUser] = useState<number>(1);
	const [consumer, setConsumer] = useState<SafeFoodConsumerModel>();
	const restrictions =
		cache.getItem("restricoes") !== null
			? JSON.parse(cache.getItem("restricoes")!)
			: [];

	const user: SafeFoodUsuarioModel =
		cache.getItem("user") !== null ? JSON.parse(cache.getItem("user")!) : [];

	useEffect(() => {
		consumerGateway.findById(getIdUser).then(data => {
			const consumer = data.data;
			setConsumer(data.data);
		});
	}, []);

	const getRestrictions = useCallback(async () => {
		const responseConsumer = await consumerGateway.findById(getIdUser);

		setUrlImageProfile(responseConsumer.data.imagem);

		console.log(restrictions);
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
			listOfAddress={[]}
			// TODO: /consumidor/{id} - get
			restrictions={restrictions}
		/>
	);
}

export default ProfileConsumer;
