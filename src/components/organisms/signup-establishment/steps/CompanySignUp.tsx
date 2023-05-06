import { Box } from "@/components/atoms/box";
import React, { FC } from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { PhoneValidator } from "@/app/util/validations/phone-validator";
import { InputPhoneSignupWpp } from "../inputs/InputPhoneSignUpWpp";
import { InputPhoneSignupFixo } from "../inputs/InputPhoneSignUpFixo";
import { InputCnpjSignUp } from "../inputs/InputCnpjSignUp";
import { CnpjValidator } from "@/app/util/validations/cnpj-validator";
import { InputNameSignUpEstablishment } from "../inputs/InputNameSignUpEstablishment";
import { JustStringAndSpaceValidator } from "@/app/util/validations/just-string-and-space";

export const CompanySignUp: FC = () => {
	return (
		<>
			<HeadingSignUpConsumer
				title="Infomações de empresa"
				text="Por favor, preencha os dados essenciais para a gente conhecer a sua empresa e logo cadastrar seus produtos."
			/>
			<Box
				gap="12px"
				display="flex"
				flexDiretion="column"
			>
				<InputNameSignUpEstablishment
					validator={new JustStringAndSpaceValidator(5, 100)}
				/>
				<InputCnpjSignUp validator={new CnpjValidator()} />
				<InputPhoneSignupWpp validator={new PhoneValidator()} />
				<InputPhoneSignupFixo validator={new PhoneValidator()} />
			</Box>
		</>
	);
};
