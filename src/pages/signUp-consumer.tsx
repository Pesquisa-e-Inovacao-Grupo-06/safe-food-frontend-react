import { useModalHome } from "@/app/contexts/ModalProvider";
import { SignupConsumerProvider } from "@/app/contexts/SignupConsumerProvider";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodConsumerGateway } from "@/app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodUserGateway } from "@/app/infra/gateway/safefood/SafeFoodUserGateway";
import { SafeFoodRestrictionMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodRestrictionMapper";
import { SafeFoodCreateConsumerRequest } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import { SafeFoodRestrictionModel } from "@/app/infra/gateway/safefood/models/SafeFoodRestriction";
import { ViaCepGateway } from "@/app/infra/gateway/viacep/ViaCepGateway";
import { SignUpConsumerTemplate } from "@/components/organisms/signup-consumer";
import { useCallback } from "react";

function SignUpConsumer({
	gateway,
	cache,
	viaCepGateway,
	userGateway,
}: {
	cache: Cache;
	gateway: SafeFoodConsumerGateway;
	viaCepGateway: ViaCepGateway;
	userGateway: SafeFoodUserGateway;
}) {
	const { modal, setModal } = useModalHome();
	const restrictions =
		cache.getItem("restricoes") !== null
			? (JSON.parse(cache.getItem("restricoes")!) as SafeFoodRestrictionModel[])
			: [];
	const clickToCreate = useCallback((data: SafeFoodCreateConsumerRequest) => {
		const res = gateway.create(data).then(val => val.data);
		res;
	}, []);
	if (restrictions.length > 0) {
		const restrictionsEntities = restrictions.map(item =>
			SafeFoodRestrictionMapper.of(item, false)
		);
		return (
			<SignupConsumerProvider gateway={userGateway}>
				<SignUpConsumerTemplate
					isModalVisible={modal === "consumer"}
					toggleModal={() => setModal(null)}
					restrictions={restrictionsEntities}
					findAddress={viaCepGateway}
					onClickCreate={clickToCreate}
				/>
			</SignupConsumerProvider>
		);
	}

	return <h1>Carregando...</h1>;
}

export default SignUpConsumer;
