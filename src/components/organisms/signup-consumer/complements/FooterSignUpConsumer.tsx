import { Box } from "@/components/atoms/box";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Steps } from "..";
import { useSignupConsumer } from "@/app/contexts/SignupConsumerProvider";

export const FooterSignUpConsumer: React.FC<{
	step: Steps;
	changeStep: (step: Steps) => void;
}> = ({ step, changeStep }) => {
	let { saveFormData, getFormData, errors, saveErrors } = useSignupConsumer();

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

	const salvarFormDataNoContexto = (formEl: HTMLFormElement) => {
		const data = new FormData(formEl);
		data.forEach((v, k) => {
			if (getFormData.get(k)) {
				getFormData.set(k, v);
			} else {
				getFormData.append(k, v);
			}
		});
		saveFormData(getFormData);
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
					onClick={() => {
						const formEl = document.querySelector("form");

						if (formEl) {
							let amountErrors = formEl.querySelectorAll("[aria-errormessage]").length;
							document.querySelectorAll("input[required]").forEach(el => {
								if (!(el as HTMLInputElement).value) {
									el.parentElement?.classList.toggle("shake");
									setTimeout(() => {
										el.parentElement?.classList.toggle("shake");
									}, 500);
									amountErrors++;
								}
							});
							if (amountErrors == 0) {
								errors = [];
							}
							saveErrors(errors);
							if (amountErrors > 0) {
								console.log({ errors, amountErrors });
								// todo message error global context
							} else {
								getOnClickAhead();
								salvarFormDataNoContexto(formEl);
								console.log(getFormData);
							}
						}
					}}
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
