import { makeHttpClient } from "@/app/factories/makeAxiosHttpClient";
import { HomeTemplate } from "@/components/templates/home-template";
import { ReactNode, useEffect } from "react";

type ResponseLoginExample = {
	name: string;
	token: string;
};
type RequestLoginExample = {
	email: string;
	senha: string;
};
function Home() {
	useEffect(() => {
		(async () => {
			const baseURL = "http://localhost:8081/usuarios";
			const http = makeHttpClient(baseURL);
			let res1 = await http.execute<ResponseLoginExample, RequestLoginExample>({
				url: "usuarios",
				method: "POST",
				contentType: "application/json",
				body: {
					email: "example@domain.com",
					senha: "#Gfformiga123",
				},
				paramsURL: {
					content: 2,
				},
			});
			console.log(res1);
			// Veja o console e tbm o network do devtools do navegador (filtre por requisições)
		})();
	}, []);

	return (
		<div>
			<HomeTemplate></HomeTemplate>
		</div>
	);
}

export default Home;
