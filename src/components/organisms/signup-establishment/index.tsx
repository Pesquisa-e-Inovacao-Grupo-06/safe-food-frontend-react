import { Modal } from "@/components/molecules/modal";
import React, { useEffect, useState } from "react";
import { Box } from "@/components/atoms/box";
import { UnderlineLink } from "@/components/atoms/underline-link";
import { FooterSignUpConsumer } from "./complements/FooterSignUpEstablishment";
import { LocationSignUpEstablishment } from "./steps/LocationSignUp";
import { SecuritySignUp } from "./steps/SecuritySignUp";
import { ImportationSignUp } from "./steps/ImportationSignup";
import { FinishedSignUpConsumer } from "../signup-consumer/steps";
import { CompanySignUp } from "./steps/CompanySignUp";
import { FindAddress } from "@/app/domain/usecases/FindAddress";
import { SafeFoodCreateEstablishmentRequest } from "@/app/infra/gateway/safefood/models/SafeFoodEstablishment";
import { useModalHome } from "@/app/contexts/ModalProvider";

export type StepsEstablishmentTemplate =
	| "company"
	| "security"
	| "location"
	| "importation"
	| "finished";
export const SignUpEstablishmentTemplate: React.FC<{
	findAddress: FindAddress;
	onClickCreate(data: SafeFoodCreateEstablishmentRequest): void;
	toggleModal(): void;
	isModalVisible: boolean;
}> = ({ findAddress, onClickCreate, isModalVisible, toggleModal }) => {
	const [visible, setVisible] = useState(false);
	const [step, setStep] = useState<StepsEstablishmentTemplate>("security");
	const { setModal, modal } = useModalHome();
	const StepScreen = () => {
		if (step === "company") return <CompanySignUp />;
		if (step === "finished") return <FinishedSignUpConsumer />;
		if (step === "location")
			return <LocationSignUpEstablishment useCase={findAddress} />;
		if (step === "security") return <SecuritySignUp />;
		return <ImportationSignUp />;
	};
	useEffect(() => {
		setVisible(isModalVisible);
	}, []);
	return (
		<>
			<Modal
				size="sm"
				height="md"
				padding="20px 20px 40px 20px"
				responsive
				isOpen={visible}
				onClickForeground={() => {
					setVisible(false);
					setTimeout(() => {
						toggleModal();
					}, 300);
				}}
			>
				<Box
					display="flex"
					justify="center"
					flexDirection="column"
					padding="20px"
					height="90%"
					margin="auto"
					gap={"12px"}
					maxWidth={"600px"}
					alignSelf="center"
				>
					<form
						encType="multipart/form-data"
						id="signup-establishment-form"
					>
						<StepScreen />
					</form>
					<FooterSignUpConsumer
						step={step}
						onClickCreate={onClickCreate}
						changeStep={setStep}
					/>
					<Box width="100%">
						<UnderlineLink onClick={() => setModal("consumer")}>
							Sou um consumidor
						</UnderlineLink>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
