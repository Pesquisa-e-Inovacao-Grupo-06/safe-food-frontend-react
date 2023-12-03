import React from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { Box } from "@/components/atoms/box";
export const FinishedSignUpConsumer: React.FC = () => {
	return (
		<>
			<HeadingSignUpConsumer
				title="Cadastro finalizado!"
				text="Agora com seu cadastro finalizado, você oficialmente faz parte da Safe Food! Entre na sua conta e tenha acesso completo aos recursos do site"
			/>

			<Box
				padding="2% 10%"
				width="100%"
			>
				<img
					src={"https://safefood-nfs.hopto.org/assets/form/finished.svg"}
					alt="Imagem de um cadastro preenchido"
				/>
			</Box>
		</>
	);
};
