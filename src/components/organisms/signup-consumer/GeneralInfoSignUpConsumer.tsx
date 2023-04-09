import { Box } from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import { TextAtom } from "@/components/atoms/text/text-atom";
import { TextField } from "@/components/atoms/textfield";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { Subtitle } from "@/styles/components/text/Subtitle";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { HeadingSignUpConsumer } from "./HeadingSignUpConsumer";

export const GeneralInfoSignUpConsumer: React.FC<{
	onClickAhead: () => void;
}> = ({ onClickAhead }) => {
	return (
		<>
			<HeadingSignUpConsumer
				title="Informações gerais"
				text="Por favor, preencha seus dados básicos abaixo com seu nome, e-mail e senha."
			/>
			<Box
				gap="12px"
				display="flex"
				flexDiretion="column"
			>
				<TextField
					label="Nome: "
					required
					id="name"
					value=""
					onChange={() => {}}
					title="Digite seu nome completo"
					type="string"
					inputMode="text"
					error={""}
				/>
				<TextField
					label="Email: "
					required
					id="email"
					value=""
					onChange={() => {}}
					placeholder="nome@example.com"
					title="Digite seu e-mail completo"
					type="email"
					inputMode="email"
					error={""}
				/>
				<TextField
					label="Senha: "
					required
					id="password"
					value=""
					placeholder={"*".repeat(8)}
					onChange={() => {}}
					title="Digite sua senha"
					type="password"
					inputMode="text"
					error={""}
				/>
				<TextField
					label="Confirmação de senha: "
					required
					id="conf-password"
					value=""
					onChange={() => {}}
					placeholder={"*".repeat(8)}
					title="Confirme sua senha"
					type="password"
					inputMode="text"
					error={""}
				/>
			</Box>
			<Box
				width="100%"
				display="flex"
				margin="20px 0 0 0"
				justify="right"
			>
				<ButtonIcon
					icon={<BiRightArrowAlt />}
					onClick={onClickAhead}
					style={{
						height: 45,
					}}
				>
					Restrições
				</ButtonIcon>
			</Box>
		</>
	);
};
