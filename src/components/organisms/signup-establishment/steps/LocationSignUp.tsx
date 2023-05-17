import React, { FC } from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { InputsAddressSignupEstablishment } from "../inputs/InputsAddressSignUp";
import { Box } from "@/components/atoms/box";
import { FindAddress } from "@/app/domain/usecases/FindAddress";
import { useInputsValidator } from "@/app/contexts/InputValidatorsProvider";

export const LocationSignUpEstablishment: FC<{
	useCase: FindAddress;
}> = ({ useCase }) => {
	const { getCepValidator } = useInputsValidator();
	const validator = getCepValidator();
	return (
		<>
			<HeadingSignUpConsumer
				text="Para os consumidores acharem seu estabelecimento, precisamos de alguns dados sobre a localização."
				title="Localização de empresa"
			/>
			<Box
				gap="12px"
				display="flex"
				flexDirection="column"
			>
				<InputsAddressSignupEstablishment
					usecase={useCase}
					validator={validator}
				/>
			</Box>
		</>
	);
};
