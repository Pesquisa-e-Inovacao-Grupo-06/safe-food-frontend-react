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
				{ name: "Nome: ", value: establishment.data.nome },
				{ name: "Email: ", value: establishment.data.email },
				{ name: "Número telefone: ", value: establishment.data.celular },
				{ name: "Senha: ", value: "*********" },
			]}
			listOfComponentEstablishment={[
				{ name: "Nome da empresa: ", value: establishment.data.nomeEmpresa },
				{ name: "Cnpj: ", value: establishment.data.cnpj },
				{
					name: "Celular (responsável): ",
					value: establishment.data.celular || "",
				},
				{
					name: "Contato (Whatsaap para clientes): ",
					value: establishment.data.contatoCliente,
				},
				{ name: "Descrição: ", value: establishment.data.descricao },
			]}
			urlDefault={""}
		/>
	) : (
		<h1>Carregando...</h1>
	);
}

export default ProfileEstablishment;
