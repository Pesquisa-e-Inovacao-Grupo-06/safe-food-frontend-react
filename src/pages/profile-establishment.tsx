import { ProfileEstablishmentTemplate } from "@/components/templates/profile-establishment-template";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodEstablishmentModel } from "@/app/infra/gateway/safefood/models/SafeFoodEstablishment";

type ProfileEstablishment = {
	cache: Cache;
};

function ProfileEstablishment({ cache }: ProfileEstablishment) {
	const establishment: SafeFoodEstablishmentModel =
		cache.getItem("establishment") !== null
			? JSON.parse(cache.getItem("establishment")!)
			: {};

	console.log({ establishment });
	return establishment ? (
		<ProfileEstablishmentTemplate
			listOfComponentAdministration={[
				{ name: "Nome: ", value: establishment.nome },
				{ name: "Email: ", value: establishment.email },
				{ name: "Número telefone: ", value: establishment.celular },
				{ name: "Senha: ", value: "*********" },
			]}
			listOfComponentEstablishment={[
				{ name: "Nome da empresa: ", value: establishment.nomeEmpresa },
				{ name: "Cnpj: ", value: establishment.cnpj },
				{
					name: "Celular (responsável): ",
					value: establishment.celular || "",
				},
				{
					name: "Contato (Whatsaap para clientes): ",
					value: establishment.contatoCliente,
				},
				{ name: "Descrição: ", value: establishment.descricao },
			]}
			urlDefault={""}
		/>
	) : (
		<h1>Carregando...</h1>
	);
}

export default ProfileEstablishment;
