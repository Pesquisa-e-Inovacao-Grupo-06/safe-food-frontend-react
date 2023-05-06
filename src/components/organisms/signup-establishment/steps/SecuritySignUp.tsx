import { Box } from "@/components/atoms/box";
import React from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { InputEmailSignUp } from "../inputs/InputEmailSignUpEstablishment";
import { EmailValidator } from "@/app/util/validations/email-validator";
import { PasswordValidator } from "@/app/util/validations/password-validator";
import { InputsPasswordsSignUpEstablishment } from "../inputs/InputsPasswordSignUpEstablishment";

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
				<InputsPasswordsSignUpEstablishment
					validator={new PasswordValidator(8, 20)}
				/>
			</Box>
		</>
	);
};
