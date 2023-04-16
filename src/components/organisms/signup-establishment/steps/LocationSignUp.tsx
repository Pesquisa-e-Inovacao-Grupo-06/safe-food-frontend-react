import React, { FC } from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { InputsAddressSignupEstablishment } from "../inputs/InputsAddressSignUp";
import { makeFindAddress } from "@/app/factories/makeFindAddressViaCep";
import { CepValidator } from "@/app/util/validations/cep-validator";
import { Box } from "@/components/atoms/box";

export const LocationSignUpEstablishment: FC = () => {
	return (
		<>
			<HeadingSignUpConsumer
				text="Para os consumidores acharem seu estabelecimento, precisamos de alguns dados sobre a localização."
				title="Localização de empresa"
			/>
			<Box
				gap="12px"
				display="flex"
				flexDiretion="column"
			>
				<InputsAddressSignupEstablishment
					usecase={makeFindAddress()}
					validator={new CepValidator()}
				/>
			</Box>
		</>
	);
};
