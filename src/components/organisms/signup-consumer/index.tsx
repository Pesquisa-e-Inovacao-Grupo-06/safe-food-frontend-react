//import { Modal } from "@/components/molecules/modal";
//import React, { useEffect, useState } from "react";
//import { Box } from "@/components/atoms/box";
//import { Button } from "@/components/atoms/button";
//import { UnderlineLink } from "@/components/atoms/underline-link";
//import {
//	AdditionalSignUpConsumer,
//	FinishedSignUpConsumer,
//	GeneralInfoSignUpConsumer,
//	RestrictionSignUpConsumer,
//} from "./steps";
//import { FooterSignUpConsumer } from "./complements/FooterSignUpConsumer";
//import { SignupConsumerProvider } from "@/app/contexts/SignupConsumerProvider";
//import { RestrictionService } from "@/app/domain/services/RestrictionService";
//import { Restriction } from "@/app/domain/entities/Restriction";

//export type Steps = "general-info" | "restrictions" | "additional" | "finished";

//export type SignUpConsumerProps = {
//	restrictionService: RestrictionService;
//};
//export const SignUpConsumer: React.FC<SignUpConsumerProps> = ({
//	restrictionService,
//}) => {
//	const [step, setStep] = useState<Steps>("additional");
//	const [isModalVisible, setModalVisible] = useState(true);
//	const [restrictions, setRestrictions] = useState<Restriction[]>([]);

//	useEffect(() => {
//		(async () => {
//			const result = await restrictionService.findAllRestriction();
//			setRestrictions(result);
//		})();
//	}, []);

//	const StepScreen = () => {
//		if (step === "additional") return <AdditionalSignUpConsumer />;
//		if (step === "finished") return <FinishedSignUpConsumer />;
//		if (step === "restrictions")
//			return <RestrictionSignUpConsumer restrictions={restrictions} />;
//		return <GeneralInfoSignUpConsumer />;
//	};
//	return (
//		<>
//			<Button onClick={() => setModalVisible(!isModalVisible)}>Abrir modal</Button>
//			<Modal
//				size="sm"
//				height="md"
//				padding="20px 20px 40px 20px"
//				responsive
//				isOpen={isModalVisible}
//				onClickForeground={() => setModalVisible(!isModalVisible)}
//			>
//				<Box
//					display="flex"
//					justify="center"
//					flexDiretion="column"
//					padding="20px"
//					height="90%"
//					margin="auto"
//					gap={"12px"}
//					maxWidth={"600px"}
//					alignSelf="center"
//				>
//					<SignupConsumerProvider>
//						<form
//							encType="multipart/form-data"
//							id="signup-consumer-form"
//						>
//							<StepScreen />
//						</form>
//						<FooterSignUpConsumer
//							step={step}
//							changeStep={setStep}
//						/>
//					</SignupConsumerProvider>
//					<Box width="100%">
//						<UnderlineLink href="http://localhost:5173/signup-establishment">
//							Sou um estabelecimento
//						</UnderlineLink>
//					</Box>
//				</Box>
//			</Modal>
//		</>
//	);
//};
