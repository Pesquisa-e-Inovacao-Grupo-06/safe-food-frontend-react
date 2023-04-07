import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import { Box } from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import { TextAtom } from "@/components/atoms/text/text-atom";
import { TextField } from "@/components/atoms/textfield";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { Modal } from "@/components/molecules/modal";
import { Subtitle } from "@/styles/components/text/Subtitle";
import React, { useState } from "react";
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowAltCircleRight } from "react-icons/fa";

export type Steps = "general-info" | "restrictions" | "additional" | "finished";
export const SignUpConsumer: React.FC = () => {
	const [step, setStep] = useState<Steps>("general-info");
	const colors = useSafeFoodTheme().getTheme().colors;
	const [isModalVisible, setModalVisible] = useState(true);
	return (
		<>
			<Modal
				size="sm"
				height="md"
				padding="20px"
				responsive
				isOpen={isModalVisible}
				onClickForeground={() => setModalVisible(!isModalVisible)}
			>
				{step === "general-info" && (
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
						<Box
							display="flex"
							justify="center"
							flexDiretion="column"
							margin="0 8px 20px"
							id="signup-heading"
						>
							<Subtitle
								large
								center
							>
								Informações gerais
							</Subtitle>
							<TextAtom
								typeText="text-md"
								align="center"
								style={{
									marginTop: 12,
									color: colors.dark_gray[200],
								}}
							>
								Por favor, preencha seus dados básicos abaixo com seu nome, e-mail e
								senha.
							</TextAtom>
						</Box>
						<Box
							gap="12px"
							display="flex"
							flexDiretion="column"
						>
							<TextField
								label="Nome: "
								required
								id="name"
								value=""
								onChange={() => {}}
								title="Digite seu nome completo"
								type="string"
								inputMode="text"
								error={""}
							/>
							<TextField
								label="Email: "
								required
								id="email"
								value=""
								onChange={() => {}}
								placeholder="nome@example.com"
								title="Digite seu e-mail completo"
								type="email"
								inputMode="email"
								error={""}
							/>
							<TextField
								label="Senha: "
								required
								id="password"
								value=""
								placeholder={"*".repeat(8)}
								onChange={() => {}}
								title="Digite sua senha"
								type="password"
								inputMode="text"
								error={""}
							/>
							<TextField
								label="Confirmação de senha: "
								required
								id="conf-password"
								value=""
								onChange={() => {}}
								placeholder={"*".repeat(8)}
								title="Confirme sua senha"
								type="password"
								inputMode="text"
								error={""}
							/>
						</Box>
						<Box
							width="100%"
							display="flex"
							margin="20px 0 0 0"
							justify="space-between"
						>
							<Button
								buttonStyle="outline"
								style={{
									height: 45,
								}}
							>
								Voltar
							</Button>
							<ButtonIcon
								icon={<BiRightArrowAlt />}
								style={{
									height: 45,
								}}
							>
								Avançar
							</ButtonIcon>
						</Box>
					</Box>
				)}
			</Modal>
		</>
	);
};
