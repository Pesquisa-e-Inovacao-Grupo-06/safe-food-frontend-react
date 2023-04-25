import { Box } from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import { Modal } from "@/components/molecules/modal";
import React, { useState } from "react";
import { Title } from "@/styles/components/text/Title";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { TextAtom } from "@/components/atoms/text/text-atom";
import { TextField } from "@/components/molecules/textfield";
import { InputPropsComponent } from "@/components/atoms/input";
import { SizeLogo } from "@/components/atoms/logo";
import { LogoAtom } from "@/components/atoms/logo";
import { InputEmailSignUp } from "@/components/organisms/signup-consumer/inputs/InputEmailSignUpConsumer";
import { InputValidator } from "@/app/util/validations/input-validator";
import { UnderlineLink } from "@/components/atoms/underline-link";
import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";

function SignIn() {
	const [isModalVisible, setModalVisible] = useState(true);
	const { colors } = useSafeFoodTheme().getTheme();
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
					justify="left"
					alignItems="baseline"
					flexDiretion="column"
					padding="20px"
					height="90%"
					margin="auto"
					gap={"12px"}
					maxWidth={"400px"}
					alignSelf="center"
				>
					<img
						style={{
							marginLeft: -12,
						}}
						src="/src/assets/svg-logo.svg"
						alt="Logo-Safe-Food"
					/>

					<Subtitle large>Entrar</Subtitle>

					<TextAtom
						typeText="text-md"
						style={{
							color: colors.dark_gray[200],
						}}
					>
						Bem vindo de volta! Digite seu e-mail e senha abaixo para entrar.
					</TextAtom>

					<Box
						margin="20px 0"
						display="flex"
						flexDiretion="column"
						gap="20px"
						style={{
							alignItems: "flex-end",
						}}
					>
						<TextField
							label="Email:"
							required
							id="email"
							value=""
							placeholder="email@exemple.com"
							type="email"
							name="general-email"
							inputMode="email"
							max={100}
							min={10}
							onChange={ev => {}}
						/>

						<TextField
							label="Senha:"
							required
							id="password"
							value=""
							placeholder="*******"
							type="password"
							name="general-password"
							inputMode="text"
							max={100}
							min={10}
							onChange={ev => {}}
						/>

						<UnderlineLink href="forget-password">Esqueceu a senha?</UnderlineLink>

						<Button
							style={{
								width: "100%",
							}}
						>
							Entrar
						</Button>
					</Box>

					<TextAtom>
						Não possui uma conta?
						<UnderlineLink
							href="/signup"
							style={{
								marginLeft: 8,
							}}
						>
							Cadastre-se
						</UnderlineLink>
					</TextAtom>

					<TextAtom
						typeText="text-sm"
						style={{
							color: colors.dark_gray[200],
						}}
					>
						© 2023 Safe Food direitos reservados
					</TextAtom>
				</Box>
			</Modal>
		</>
	);
}

export default SignIn;
