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



function SignIn() {
	const [isModalVisible, setModalVisible] = useState(true);

	return (
		<>
			<Button onClick={() =>
				setModalVisible(!isModalVisible)}>Abrir modal
			</Button>

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
					justify="center"
					flexDiretion="column"
					padding="20px"
					height="90%"
					margin="auto"
					gap={"12px"}
					maxWidth={"600px"}
					alignSelf="center"
				>

					<img src="/src/assets/svg-logo.svg" alt="Logo-Safe-Food" />
					
					
					<Title>Entrar</Title>

					<span>Bem vindo de volta! Digite seu e-mail e senha abaixo para entrar.</span>

					
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
						onChange={ev =>{}}
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
						onChange={ev =>{}}
					/>
	
					<label htmlFor="">Esqueceu a senha?</label>	

					<Button>Entrar</Button>

					<span>Não possui uma conta?</span>
					<label htmlFor="">Cadastre-se</label>

					<span>© 2023 Safe Food direitos reservados</span>

				</Box>
			</Modal>
		</>
	);
}

export default SignIn;
