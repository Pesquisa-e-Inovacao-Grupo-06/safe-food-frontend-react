import { Cache } from "@/app/domain/protocols/Cache";
import { ProfileTemplate } from "@/components/templates/profile-consumer-template";
import { SafeFoodAddressMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodAddressMapper";
import { SafeFoodConsumerModel } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";

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
			restrictions={restrictions}
		/>
	) : (
		<h1>Carregando...</h1>
	);
}

export default ProfileConsumer;
