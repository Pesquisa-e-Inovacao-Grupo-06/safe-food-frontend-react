import { Box } from "@/components/atoms/box";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Steps } from "..";

export const FooterSignUpConsumer: React.FC<{
	step: Steps;
	changeStep: (step: Steps) => void;
}> = ({ step, changeStep }) => {
	const getOnBackClick = () => {
		if (step === "additional") {
			return () => changeStep("restrictions");
		}
		if (step === "restrictions") {
			return () => changeStep("general-info");
		}
		if (step === "finished") {
			return () => changeStep("additional");
		}
	};
	const getOnClickAhead = () => {
		if (step === "additional") {
			return changeStep("finished");
		}
		if (step === "restrictions") {
			return changeStep("additional");
		}
		if (step === "general-info") {
			return changeStep("restrictions");
		}
		if (step === "finished") {
			return () => (window.location.href = "http://localhost:5173/");
		}
	};
	const getTextAhead = () => {
		if (step === "additional") {
			return "Finalizar";
		}
		if (step === "general-info") {
			return "Restrições";
		}
		if (step === "finished") {
			return "Login";
		}
		if (step === "restrictions") {
			return "Adicionais";
		}
	};
	const renderGoBackButton = () => {
		if (step !== "general-info") {
			const backClick = getOnBackClick();
			return (
				<ButtonIcon
					icon={<BiLeftArrowAlt />}
					onClick={backClick}
					alignIcon="left"
					buttonStyle="outline"
					style={{
						height: 45,
					}}
				>
					Voltar
				</ButtonIcon>
			);
		}
		return <></>;
	};
	return (
		<>
			<Box
				width="100%"
				display="flex"
				margin="20px 0 0 0"
				justify={step === "general-info" ? "right" : "space-between"}
			>
				{renderGoBackButton()}
				<ButtonIcon
					icon={<BiRightArrowAlt />}
					onClick={getOnClickAhead}
					style={{
						height: 45,
					}}
				>
					{getTextAhead()}
				</ButtonIcon>
			</Box>
		</>
	);
};
