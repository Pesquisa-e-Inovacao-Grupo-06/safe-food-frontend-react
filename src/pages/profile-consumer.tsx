import { Cache } from "@/app/domain/protocols/Cache";
import { ProfileTemplate } from "@/components/templates/profile-consumer-template";
import { SafeFoodAddressMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodAddressMapper";
import { SafeFoodConsumerModel } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import { SafeFoodRestrictionMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodRestrictionMapper";

type ProfileConsumer = {
	cache: Cache;
};

function ProfileConsumer({ cache }: ProfileConsumer) {
	const restrictions =
		cache.getItem("restricoes") !== null
			? JSON.parse(cache.getItem("restricoes")!)
			: {};

	const consumer: SafeFoodConsumerModel =
		cache.getItem("consumer") !== null
			? JSON.parse(cache.getItem("consumer")!)
			: {};

	return consumer ? (
		<ProfileTemplate
			urlDefault={consumer.imagem}
			form={[
				{ name: "Nome:", value: consumer.nome },
				{ name: "Email:", value: consumer.email },
				{ name: "Número:", value: consumer.telefone || "" },
				{ name: "Senha:", value: "**********" },
			]}
			// TODO: CRIAR MAPPER DE ADDRESS MODEL TO ADDRESS ENTITY
			listOfAddress={consumer.enderecos.map(SafeFoodAddressMapper.of)}
			// TODO: saved restrictions
			restrictionsDefault={restrictions}
			restrictionsUser={consumer.restricoes.map(SafeFoodRestrictionMapper.of)}
		/>
	) : (
		<h1>Carregando...</h1>
	);
}

export default ProfileConsumer;
