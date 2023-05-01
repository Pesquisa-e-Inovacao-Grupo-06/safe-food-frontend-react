import { Box } from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import { Modal } from "@/components/molecules/modal";
import React, { useState } from "react";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Text } from "@/components/atoms/text/index";
import { TextField } from "@/components/molecules/textfield";
import { UnderlineLink } from "@/components/atoms/underline-link";
import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import { PasswordValidator } from "@/app/util/validations/password-validator";
import { EmailValidator } from "@/app/util/validations/email-validator";
import { UserService } from "@/app/domain/services/UserService";
import { IoAlertSharp } from "react-icons/io5";
import { Alert } from "@/components/atoms/alert";

type SignInProps = {
	useCase: UserService;
	passwordValidator: PasswordValidator;
	emailValidator: EmailValidator;
};
function SignIn({ useCase, emailValidator, passwordValidator }: SignInProps) {
	const [isModalVisible, setModalVisible] = useState(true);
	const { colors } = useSafeFoodTheme().getTheme();

	const [email, setEmail] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorPassword, setErrorPassword] = useState("");
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

					<Text
						typeText="text-md"
						style={{
							color: colors.dark_gray[200],
						}}
					>
						Bem vindo de volta! Digite seu e-mail e senha abaixo para entrar.
					</Text>
					<Alert type="warning">Usuario nao encontrado</Alert>
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
							value={email}
							placeholder="email@exemple.com"
							type="email"
							name="general-email"
							inputMode="email"
							max={100}
							min={10}
							onChange={ev => {
								let str = ev.currentTarget.value;
								let value = emailValidator.format(str);
								setEmail(value);
								const errors = emailValidator.validate(value);
								if (errors.length > 0) {
									setErrorEmail(errors.join(";"));
								} else {
									setErrorEmail("");
								}
							}}
							error={errorEmail}
						/>

						<TextField
							label="Senha:"
							required
							id="password"
							value={password}
							placeholder="********"
							type="password"
							name="general-password"
							inputMode="text"
							max={20}
							min={8}
							onChange={ev => {
								const str = ev.currentTarget.value;
								const value = passwordValidator.format(str);
								setPassword(value);
								const errors = passwordValidator.validate(value);
								if (errors.length > 0) {
									setErrorPassword(errors.join(";"));
								} else {
									setErrorPassword("");
								}
							}}
							error={errorPassword}
						/>

						<UnderlineLink href="forget-password">Esqueceu a senha?</UnderlineLink>

						<Button
							style={{
								width: "100%",
							}}
							onClick={() => {
								if (
									errorEmail ||
									errorPassword ||
									email.length == 0 ||
									password.length == 0
								) {
									console.log("preencha todos os campos corretamente");
									return;
								}
								useCase
									.SignIn(email, password)
									.then(res => {
										if (res?.status == 400) {
											// tratamento dos campos
											console.log("Verifique suas credenciais");
											return;
										}
										if (res?.status == 404) {
											// mostrar alerta
											console.log("email nao encontrado");
											return;
										}
										console.log(res);
									})
									.catch(err => {
										console.error(err);
									});
							}}
						>
							Entrar
						</Button>
					</Box>

					<Text>
						Não possui uma conta?
						<UnderlineLink
							href="/signup"
							style={{
								marginLeft: 8,
							}}
						>
							Cadastre-se
						</UnderlineLink>
					</Text>

					<Text
						typeText="text-sm"
						style={{
							color: colors.dark_gray[200],
						}}
					>
						© 2023 Safe Food direitos reservados
					</Text>
				</Box>
			</Modal>
		</>
	);
}

export default SignIn;
