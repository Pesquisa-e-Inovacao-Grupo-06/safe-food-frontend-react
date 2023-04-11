import { Box } from "@/components/atoms/box";
import React from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { JustStringAndSpaceValidator } from "@/app/util/validations/just-string-and-space";
import { InputNameSignUp } from "../inputs/InputNameSignUpConsumer";
import { InputEmailSignUp } from "../inputs/InputEmailSignUpConsumer";
import { EmailValidator } from "@/app/util/validations/email-validator";
import { InputsPasswordsSignUpConsumer } from "../inputs/InputsPasswordSignUpConsumer";
import { PasswordValidator } from "@/app/util/validations/password-validator";

export const GeneralInfoSignUpConsumer: React.FC = () => {
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
				<InputsPasswordsSignUpConsumer validator={new PasswordValidator(8, 20)} />
			</Box>
		</>
	);
};
