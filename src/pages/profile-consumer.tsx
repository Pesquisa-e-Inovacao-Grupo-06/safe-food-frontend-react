import { Restriction } from "@/app/domain/entities/Restriction";
import { ProfileTemplate } from "../components/templates/profile-consumer-template";

export const ProfileConsumer = () => {
	return (
		<ProfileTemplate
			// TODO: /consumidor/{id} - get
			restrictions={[new Restriction(1, "rest", "")]}
			// TODO: VERIFICAR SOBRE O /consumidor/{id} converter endereço completo para string
			listOfAddress={[{ text: "asdas", subtitle: "bbbb" }]}
			// TODO:  /consumidor/{id} & /estabelecimento/{id} - post : nome, email, senha n deve aparecer, telefone,
			form={[
				{ name: "Nome:", value: "" },
				{ name: "Email:", value: "" },
				// TODO: NUMERO NÃO FAZ SENTIDO
				{ name: "Número:", value: "" },
				{ name: "Número telefone:", value: "" },
				{ name: "Senha:", value: "" },
			]}
			// TODO: precisa receber imagem de banner PRECISA CONVERSAR
			// TODO: /consumidor/{id}
			urlDefault={""}
		></ProfileTemplate>
	);
};

export default ProfileConsumer;
