import React from "react";
import { HeadingSignUpConsumer } from "./HeadingSignUpConsumer";
import FinishedSvg from "../../../assets/form/finished.svg";
import { Box } from "@/components/atoms/box";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
export const FinishedSignUpConsumer: React.FC<{
	onClickGoBack: () => void;
	onClickAhead: () => void;
}> = ({ onClickAhead, onClickGoBack }) => {
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

			<Box
				width="100%"
				display="flex"
				margin="20px 0 0 0"
				justify="space-between"
			>
				<ButtonIcon
					icon={<BiLeftArrowAlt />}
					onClick={onClickGoBack}
					alignIcon="left"
					buttonStyle="outline"
					style={{
						height: 45,
					}}
				>
					Voltar
				</ButtonIcon>
				<ButtonIcon
					icon={<BiRightArrowAlt />}
					onClick={onClickAhead}
					style={{
						height: 45,
					}}
				>
					Login
				</ButtonIcon>
			</Box>
		</>
	);
};
