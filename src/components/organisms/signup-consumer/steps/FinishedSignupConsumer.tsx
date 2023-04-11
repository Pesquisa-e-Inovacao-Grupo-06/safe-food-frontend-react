import React from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import FinishedSvg from "../../../../assets/form/finished.svg";
import { Box } from "@/components/atoms/box";
export const FinishedSignUpConsumer: React.FC = () => {
	return (
		<>
			<HeadingSignUpConsumer
				title="Cadastro finalizado!"
				text="Agora com seu cadastro finalizado, você oficialmente faz parte da Safe Food! Entre na sua conta e tenha acesso completo aos recursos do site"
			/>

			<Box width="80%">
				<img
					src={FinishedSvg}
					alt="Imagem de um cadastro preenchido"
				/>
			</Box>
		</>
	);
};
