import { Modal } from "@/components/molecules/modal";
import React, { useState } from "react";
import { Box } from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import { UnderlineLink } from "@/components/atoms/underline-link";
import {
	AdditionalSignUpConsumer,
	FinishedSignUpConsumer,
	GeneralInfoSignUpConsumer,
	RestrictionSignUpConsumer,
} from "./steps";
import { FooterSignUpConsumer } from "./complements/FooterSignUpConsumer";

export type Steps = "general-info" | "restrictions" | "additional" | "finished";
export const SignUpConsumer: React.FC = () => {
	const [step, setStep] = useState<Steps>("general-info");
	const [isModalVisible, setModalVisible] = useState(true);

	const StepScreen = () => {
		if (step === "additional") return <AdditionalSignUpConsumer />;
		if (step === "finished") return <FinishedSignUpConsumer />;
		if (step === "restrictions")
			return (
				<RestrictionSignUpConsumer restrictions={["Gluten", "Gluten", "Gluten"]} />
			);
		return <GeneralInfoSignUpConsumer />;
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
					<StepScreen />

					<FooterSignUpConsumer
						step={step}
						changeStep={setStep}
					/>
					<Box width="100%">
						<UnderlineLink href="http://localhost:5173/signup-establishment">
							Sou um estabelecimento
						</UnderlineLink>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
