import { Box } from "@/components/atoms/box";
import React from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { InputEmailSignUp } from "../inputs/InputEmailSignUpEstablishment";
import { InputsPasswordsSignUpEstablishment } from "../inputs/InputsPasswordSignUpEstablishment";
import { useInputsValidator } from "@/app/contexts/InputValidatorsProvider";

export const SecuritySignUp: React.FC = () => {
	const { getEmailValidator, getPasswordValidator } = useInputsValidator();
	const emailValidator = getEmailValidator(10, 100);
	const passwordValidator = getPasswordValidator(8, 20);
	return (
		<>
			<HeadingSignUpConsumer
				title="Segurança da conta"
				text="Por favor, preencha os dados essenciais para a criação da sua conta, lembre-se de suas credênciais para entrar na sua conta"
			/>
			<Box
				gap="12px"
				display="flex"
				flexDirection="column"
			>
				<InputEmailSignUp validator={emailValidator} />
				<InputsPasswordsSignUpEstablishment validator={passwordValidator} />
			</Box>
		</>
	);
};
