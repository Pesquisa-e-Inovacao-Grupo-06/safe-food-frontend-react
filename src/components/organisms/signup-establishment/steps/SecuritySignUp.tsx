import { Box } from "@/components/atoms/box";
import React from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { JustStringAndSpaceValidator } from "@/app/util/validations/just-string-and-space";
import { InputNameSignUpEstablishment } from "../inputs/InputNameSignUpConsumer";
import { InputEmailSignUp } from "../inputs/InputEmailSignUpConsumer";
import { EmailValidator } from "@/app/util/validations/email-validator";
import { InputsPasswordsSignUpConsumer } from "../inputs/InputsPasswordSignUpConsumer";
import { PasswordValidator } from "@/app/util/validations/password-validator";

export const SecuritySignUp: React.FC = () => {
	return (
		<>
			<HeadingSignUpConsumer
				title="Segurança da conta"
				text="Por favor, preencha os dados essenciais para a criação da sua conta, lembre-se de suas credênciais para entrar na sua conta"
			/>
			<Box
				gap="12px"
				display="flex"
				flexDiretion="column"
			>
				<InputEmailSignUp validator={new EmailValidator(5, 100)} />
				<InputsPasswordsSignUpConsumer validator={new PasswordValidator(8, 20)} />
			</Box>
		</>
	);
};
