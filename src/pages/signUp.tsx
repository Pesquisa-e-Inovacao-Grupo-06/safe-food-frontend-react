import { SignupConsumerProvider } from "@/app/contexts/SignupConsumerProvider";
import { Restriction } from "@/app/domain/entities/Restriction";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodConsumerGateway } from "@/app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodRestrictionGateway } from "@/app/infra/gateway/safefood/SafeFoodRestrictionGateway";
import { SafeFoodCreateConsumerRequest } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import { ViaCepGateway } from "@/app/infra/gateway/viacep/ViaCepGateway";
import { SignUpConsumerTemplate } from "@/components/organisms/signup-consumer";
import { useCallback } from "react";

function SignUp({
	gateway,
	cache,
	viaCepGateway,
}: {
	cache: Cache;
	gateway: SafeFoodConsumerGateway;
	viaCepGateway: ViaCepGateway;
}) {
	const restrictions =
		cache.getItem("restricoes") !== null
			? JSON.parse(cache.getItem("restricoes")!)
			: [];
	const clickToCreate = useCallback((data: SafeFoodCreateConsumerRequest) => {
		const res = gateway.createConsumer(data).then(val => val.data);
		res;
	}, []);

	if (restrictions.length > 0) {
		return (
			<div style={{ paddingTop: "75px" }}>
				<h1>SignUp</h1>
				<SignupConsumerProvider>
					<SignUpConsumerTemplate
						restrictions={restrictions}
						onClickCreate={clickToCreate}
						findAddress={viaCepGateway}
					/>
				</SignupConsumerProvider>
				{/* <SignUpEstablishment /> */}
			</div>
		);
	}
	return <h1>Carregando...</h1>;
}

export default SignUp;
