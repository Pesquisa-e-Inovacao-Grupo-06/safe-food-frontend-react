import { Box } from "@/components/atoms/box";
import React, { useState } from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { JustStringAndSpaceValidator } from "@/app/util/validations/just-string-and-space";
import { InputNameSignUp } from "../inputs/InputNameSignUpConsumer";
import { TextField } from "@/components/molecules/textfield";
import { InputEmailSignUp } from "../inputs/InputEmailSignUpConsumer";
import { EmailValidator } from "@/app/util/validations/email-validator";

export const GeneralInfoSignUpConsumer: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
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
				<InputNameSignUp validator={new JustStringAndSpaceValidator(5, 100)} />
				<InputEmailSignUp validator={new EmailValidator(5, 100)} />
				<TextField
					label="Senha: "
					required
					id="password"
					value={password}
					placeholder={"*".repeat(8)}
					onChange={ev => {
						setPassword(ev.currentTarget.value);
					}}
					title="Digite sua senha"
					type="password"
					inputMode="text"
					error={""}
				/>
				<TextField
					label="Confirmação de senha: "
					required
					id="conf-password"
					value={confPassword}
					onChange={ev => {
						setConfPassword(ev.currentTarget.value);
					}}
					placeholder={"*".repeat(8)}
					title="Confirme sua senha"
					type="password"
					inputMode="text"
					error={""}
				/>
			</Box>
		</>
	);
};
