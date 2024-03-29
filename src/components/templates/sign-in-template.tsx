import { useSafeFoodTheme } from '@/app/contexts/SafeFoodThemeProvider';
import { Subtitle } from '@/styles/components/text/Subtitle';
import React, { FormEvent, useEffect, useState } from 'react';
import { Text } from '../atoms/text';
import { Modal } from '../molecules/modal';
import { Button } from '../atoms/button';
import { Box } from '../atoms/box';
import { Alert, AlertType } from '../atoms/alert';
import { TextField } from '../molecules/textfield';
import { UnderlineLink } from '../atoms/underline-link';
import { ButtonLoading } from '../molecules/button/button-loading';
import { useModalHome } from '@/app/contexts/ModalProvider';
export type SignInTemplateProps = {
	toggleModal(): void;
	isModalVisible: boolean;
	onChangeInputEmail(ev: FormEvent<HTMLInputElement>): void;
	onChangeInputPassword(ev: FormEvent<HTMLInputElement>): void;
	email: string;
	password: string;
	onClickLogin(): void;
	isAlertVisible?: boolean;
	typeAlert?: AlertType;
	textAlert?: string;
	loading: boolean;
};
export const SignInTemplate: React.FC<SignInTemplateProps> = ({
	isModalVisible,
	toggleModal,
	email,
	onChangeInputEmail,
	onChangeInputPassword,
	password,
	onClickLogin,
	isAlertVisible,
	typeAlert,
	textAlert,
	loading,
}) => {
	const { colors } = useSafeFoodTheme().getTheme();
	const { setModal } = useModalHome();
	const [visible, setVisible] = useState(false);
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
					justify="left"
					alignItems="baseline"
					flexDirection="column"
					padding="20px"
					height="90%"
					margin="auto"
					gap={'12px'}
					maxWidth={'400px'}
					alignSelf="center"
				>
					<img
						style={{
							marginLeft: -12,
						}}
						src="https://safefood-nfs.hopto.org/assets/svg-logo.svg"
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
					{isAlertVisible ? (
						<Alert type={typeAlert ?? 'info'}>{textAlert}</Alert>
					) : null}
					<Box
						margin="20px 0"
						display="flex"
						flexDirection="column"
						gap="20px"
						style={{
							alignItems: 'flex-end',
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
							disabled={loading}
							onChange={onChangeInputEmail}
						/>

						<TextField
							label="Senha:"
							required
							id="password"
							value={password}
							disabled={loading}
							placeholder="********"
							type="password"
							name="general-password"
							inputMode="text"
							max={20}
							min={8}
							onChange={onChangeInputPassword}
						/>

						<UnderlineLink href="change-password">
							Esqueceu a senha?
						</UnderlineLink>

						{loading ? (
							<ButtonLoading />
						) : (
							<Button
								style={{
									width: '100%',
								}}
								onClick={onClickLogin}
							>
								Entrar
							</Button>
						)}
					</Box>
					<Text>
						Não possui uma conta?
						<UnderlineLink
							// href="/signup"
							style={{
								marginLeft: 8,
							}}
							onClick={() => setModal('establishment')}
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
};
