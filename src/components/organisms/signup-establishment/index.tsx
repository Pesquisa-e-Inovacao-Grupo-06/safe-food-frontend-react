import { Modal } from "@/components/molecules/modal";
import React, { useState } from "react";
import { Box } from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import { UnderlineLink } from "@/components/atoms/underline-link";
import { FooterSignUpConsumer } from "./complements/FooterSignUpEstablishment";
import { SignupConsumerProvider } from "@/app/contexts/SignupConsumerProvider";
import { LocationSignUpEstablishment } from "./steps/LocationSignUp";
import { SecuritySignUp } from "./steps/SecuritySignUp";
import { ImportationSignUp } from "./steps/ImportationSignup";
import { FinishedSignUpConsumer } from "../signup-consumer/steps";
import { CompanySignUp } from "./steps/CompanySignUp";
import { SignupEstablishmentProvider } from "@/app/contexts/SignupEstablishmentProvider";

export type StepsEstablishment =
	| "company"
	| "security"
	| "location"
	| "importation"
	| "finished";
export const SignUpEstablishment: React.FC = () => {
	const [step, setStep] = useState<StepsEstablishment>("importation");
	const [isModalVisible, setModalVisible] = useState(true);

	const StepScreen = () => {
		if (step === "company") return <CompanySignUp />;
		if (step === "finished") return <FinishedSignUpConsumer />;
		if (step === "location") return <LocationSignUpEstablishment />;
		if (step === "security") return <SecuritySignUp />;
		return <ImportationSignUp />;
	};
	return (
		<>
			<Button onClick={() => setModalVisible(!isModalVisible)}>Abrir modal</Button>
			<Modal
				size="sm"
				height="md"
				padding="20px 20px 40px 20px"
				responsive
				isOpen={isModalVisible}
				onClickForeground={() => setModalVisible(!isModalVisible)}
			>
				<Box
					display="flex"
					justify="center"
					flexDiretion="column"
					padding="20px"
					height="90%"
					margin="auto"
					gap={"12px"}
					maxWidth={"600px"}
					alignSelf="center"
				>
					<SignupEstablishmentProvider>
						<form
							encType="multipart/form-data"
							id="signup-establishment-form"
						>
							<StepScreen />
						</form>
						<FooterSignUpConsumer
							step={step}
							changeStep={setStep}
						/>
					</SignupEstablishmentProvider>
					<Box width="100%">
						<UnderlineLink href="http://localhost:5173/signup-consumer">
							Sou um consumidor
						</UnderlineLink>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
