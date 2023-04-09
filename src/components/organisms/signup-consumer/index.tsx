import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import { Modal } from "@/components/molecules/modal";
import React, { useState } from "react";
import { GeneralInfoSignUpConsumer } from "./GeneralInfoSignUpConsumer";
import { RestrictionSignUpConsumer } from "./RestrictionSignUpConsumer";
import { AdditionalSignUpConsumer } from "./AdditionalSignUpConsumer";
import { Box } from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import { FinishedSignUpConsumer } from "./FinishedSignupConsumer";
import { UnderlineLink } from "@/components/atoms/underline-link";

export type Steps = "general-info" | "restrictions" | "additional" | "finished";
export const SignUpConsumer: React.FC = () => {
	const [step, setStep] = useState<Steps>("general-info");
	const colors = useSafeFoodTheme().getTheme().colors;
	const [isModalVisible, setModalVisible] = useState(true);
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
					{step === "general-info" && (
						<GeneralInfoSignUpConsumer onClickAhead={() => setStep("restrictions")} />
					)}
					{step === "restrictions" && (
						<RestrictionSignUpConsumer
							restrictions={[
								"Gluten",
								"Lactose",
								"Gluten",
								"Lactose",
								"Gluten",
								"Lactose",
								"Gluten",
								"Lactose",
							]}
							onClickAhead={() => setStep("additional")}
							onClickGoBack={() => setStep("general-info")}
						/>
					)}
					{step === "additional" && (
						<AdditionalSignUpConsumer
							onClickAhead={() => setStep("finished")}
							onClickGoBack={() => setStep("restrictions")}
						/>
					)}
					{step === "finished" && (
						<FinishedSignUpConsumer
							onClickAhead={() => console.log("levar para login")}
							onClickGoBack={() => setStep("additional")}
						/>
					)}

					<Box width="100%">
						<UnderlineLink href="/signup-establishment">
							Sou um estabelecimento
						</UnderlineLink>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
