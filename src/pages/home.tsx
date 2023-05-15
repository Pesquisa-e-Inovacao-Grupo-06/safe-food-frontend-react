import { HomeTemplate } from "@/components/templates/home-template";
import { ReactNode, useEffect, useState } from "react";
import SignIn from "./signIn";
import { SafeFoodUserGateway } from "@/app/infra/gateway/safefood/SafeFoodUserGateway";
import { SafeFoodConsumerGateway } from "@/app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodEstablishmentGateway } from "@/app/infra/gateway/safefood/SafeFoodEstablishmentGateway";
import { Cache } from "@/app/domain/protocols/Cache";
import SignUpConsumer from "./signUp-consumer";
import { ViaCepGateway } from "@/app/infra/gateway/viacep/ViaCepGateway";
import SignUpEstablishment from "./signUp-establishment";
import { useModalHome } from "@/app/contexts/ModalProvider";

type HomeProps = {
	gateway: SafeFoodUserGateway;
	consumerGateway: SafeFoodConsumerGateway;
	establishmentGateway: SafeFoodEstablishmentGateway;
	cache: Cache;
	viaCepGateway: ViaCepGateway;
};
function Home({
	cache,
	consumerGateway,
	establishmentGateway,
	gateway,
	viaCepGateway,
}: HomeProps) {
	const { modal } = useModalHome();
	return (
		<div>
			{modal === "login" && (
				<SignIn
					cache={cache}
					consumerGateway={consumerGateway}
					establishmentGateway={establishmentGateway}
					gateway={gateway}
				/>
			)}
			{modal === "consumer" && (
				<SignUpConsumer
					cache={cache}
					viaCepGateway={viaCepGateway}
					gateway={consumerGateway}
				/>
			)}
			{modal === "establishment" && (
				<SignUpEstablishment
					cache={cache}
					gateway={establishmentGateway}
					viaCepGateway={viaCepGateway}
				/>
			)}
			<HomeTemplate />
		</div>
	);
}

export default Home;
