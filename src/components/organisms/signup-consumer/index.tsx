import { Modal } from "@/components/molecules/modal";
import React, { Dispatch, useEffect, useState } from "react";
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
import { SignupConsumerProvider } from "@/app/contexts/SignupConsumerProvider";
import { Restriction } from "@/app/domain/entities/Restriction";
import { SafeFoodCreateConsumerRequest } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import { FindAddress } from "@/app/domain/usecases/FindAddress";
import { useModalHome } from "@/app/contexts/ModalProvider";
import { SafeFoodRestrictionModel } from "@/app/infra/gateway/safefood/models/SafeFoodRestriction";

export type Steps = "general-info" | "restrictions" | "additional" | "finished";

export type SignUpConsumerProps = {
	restrictions: SafeFoodRestrictionModel[];
	findAddress: FindAddress;
	toggleModal(): void;
	isModalVisible: boolean;
	onClickCreate(data: SafeFoodCreateConsumerRequest): void;
};
export const SignUpConsumerTemplate: React.FC<SignUpConsumerProps> = ({
	restrictions,
	onClickCreate,
	findAddress,
	isModalVisible,
	toggleModal,
}) => {
	const [step, setStep] = useState<Steps>("general-info");
	const { setModal, modal } = useModalHome();
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		setVisible(isModalVisible);
	}, []);
	const StepScreen = () => {
		if (step === "additional")
			return <AdditionalSignUpConsumer useCase={findAddress} />;
		if (step === "finished") return <FinishedSignUpConsumer />;
		if (step === "restrictions")
			return <RestrictionSignUpConsumer restrictions={restrictions} />;
		return <GeneralInfoSignUpConsumer />;
	};
	return (
		<>
			<Modal
				size="sm"
				height="md"
				padding="20px 20px 40px 20px"
				responsive
				onClickForeground={() => {
					setVisible(false);
					setTimeout(() => {
						toggleModal();
					}, 300);
				}}
				isOpen={visible}
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
						id="signup-consumer-form"
					>
						<StepScreen />
					</form>
					<FooterSignUpConsumer
						create={onClickCreate}
						step={step}
						changeStep={setStep}
					/>
					<Box width="100%">
						<UnderlineLink onClick={() => setModal("establishment")}>
							Sou um estabelecimento
						</UnderlineLink>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
