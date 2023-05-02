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
	return (
		<div>
			<HomeTemplate></HomeTemplate>
		</div>
	);
}

export default Home;
