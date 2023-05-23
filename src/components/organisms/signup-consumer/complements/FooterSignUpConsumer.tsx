import { Box } from "@/components/atoms/box";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import React, { Dispatch } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Steps } from "..";
import { useSignupConsumer } from "@/app/contexts/SignupConsumerProvider";
import { SafeFoodCreateConsumerRequest } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import { SafeFoodCreateAddressRequest } from "@/app/infra/gateway/safefood/models/SafeFoodAddress";
import { create } from "@mui/material/styles/createTransitions";
import { useModalHome } from "@/app/contexts/ModalProvider";

export const FooterSignUpConsumer: React.FC<{
	step: Steps;
	create(data: SafeFoodCreateConsumerRequest): void;
	changeStep: (step: Steps) => void;
}> = ({ step, changeStep, create }) => {
	let { errors, saveErrors, consumer, setConsumer, emailExists } =
		useSignupConsumer();
	const { setModal } = useModalHome();

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
			create({ ...consumer });
			setConsumer({} as SafeFoodCreateConsumerRequest);
			return changeStep("finished");
		}
		if (step === "restrictions") {
			return changeStep("additional");
		}
		if (step === "general-info") {
			emailExists(consumer.email).then(data => {
				const errorEmail = "Email já cadastrado";
				if (data) {
					if (!errors.includes(errorEmail)) {
						saveErrors([...errors, errorEmail]);
					}
				} else {
					const index = errorEmail.indexOf(errorEmail);
					if (index > -1) {
						const newErrors = errors.filter(item => item !== errorEmail);
						saveErrors(newErrors);
					}
					changeStep("restrictions");
				}
			});
		}
		if (step === "finished") {
			// (() => setModal(null))();
			(() => setModal("login"))();
			// (() => (window.location.href = "http://localhost:5173/"))();
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
		if (step !== "general-info" && step !== "finished") {
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
					onClick={() => {
						const formEl = document.querySelector("form");

						if (formEl) {
							let amountErrors = formEl.querySelectorAll("[aria-errormessage]").length;
							let messageError = "Alguns campos ainda nao foram preenchidos";
							document.querySelectorAll("input[required]").forEach(el => {
								if (!(el as HTMLInputElement).value) {
									if (!errors.includes(messageError)) {
										errors.push(messageError);
									}
									el.parentElement?.classList.toggle("shake");
									setTimeout(() => {
										el.parentElement?.classList.toggle("shake");
									}, 500);
									amountErrors++;
								}
							});
							if (amountErrors > 0) {
								saveErrors(errors.filter(item => item != messageError));
							} else {
								saveErrors([]);
								getOnClickAhead();
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
