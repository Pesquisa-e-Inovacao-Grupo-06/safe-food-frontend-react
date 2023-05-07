import { Box } from "@/components/atoms/box";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useSignupConsumer } from "@/app/contexts/SignupConsumerProvider";
import { StepsEstablishment } from "..";
import { useSignupEstablishment } from "@/app/contexts/SignupEstablishmentProvider";
import { SafeFoodCreateEstablishmentRequest } from "@/app/infra/gateway/safefood/models/SafeFoodEstablishment";

export const FooterSignUpConsumer: React.FC<{
	step: StepsEstablishment;
	changeStep: (step: StepsEstablishment) => void;
	onClickCreate(data: SafeFoodCreateEstablishmentRequest): void;
}> = ({ step, changeStep, onClickCreate }) => {
	const { establishment } = useSignupEstablishment();
	let { errors, saveErrors } = useSignupEstablishment();

	const getOnBackClick = () => {
		if (step === "finished") {
			return () => changeStep("importation");
		}
		if (step === "importation") {
			return () => changeStep("security");
		}
		if (step === "security") {
			return () => changeStep("location");
		}
		if (step === "location") {
			return () => changeStep("company");
		}
	};
	const getOnClickAhead = () => {
		if (step === "company") {
			return changeStep("location");
		}
		if (step === "location") {
			return changeStep("security");
		}
		if (step === "security") {
			return changeStep("importation");
		}
		if (step === "importation") {
			onClickCreate(establishment);
			return changeStep("finished");
		}
		if (step === "finished") {
			return () => (window.location.href = "http://localhost:5173/");
		}
	};
	const getTextAhead = () => {
		if (step === "company") {
			return "Localização";
		}
		if (step === "location") {
			return "Segurança";
		}
		if (step === "security") {
			return "Importação";
		}
		if (step === "importation") {
			return "Finalizar";
		}
		if (step === "finished") {
			return "Entrar";
		}
	};
	const renderGoBackButton = () => {
		if (step !== "company") {
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
				justify={step === "company" ? "right" : "space-between"}
			>
				{renderGoBackButton()}
				<ButtonIcon
					icon={<BiRightArrowAlt />}
					onClick={() => {
						const formEl = document.querySelector("form");

						if (formEl) {
							let amountErrors = formEl.querySelectorAll("[aria-errormessage]").length;
							document.querySelectorAll("input[required]").forEach(el => {
								console.log(el);
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
