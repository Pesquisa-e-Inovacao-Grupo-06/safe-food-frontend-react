import { EmailValidator } from "@/app/util/validations/email-validator";
import { Dots } from "@/components/atoms/dots";
import { Input } from "@/components/atoms/input";
import { Text } from "@/components/atoms/text";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { InputEmailSignUp } from "@/components/organisms/signup-consumer/inputs/InputEmailSignUpConsumer";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { ContainerBannerStep2ForgetPassword } from "./styles";
import { SafeFoodResponse } from "@/app/infra/gateway/safefood/models/SafeFoodResponse";
import { ForgetPage } from "@/pages/forget-password";
import { useState } from "react";
import { useInputsValidator } from "@/app/contexts/InputValidatorsProvider";
import { TextField } from "@/components/molecules/textfield";
import { Alert } from "@/components/atoms/alert";

type Step2ForgetPasswordProps = {
	atualizarSenha(senha: string): Promise<SafeFoodResponse>;
	changePage(page: ForgetPage): void;
};
export const Step2ForgetPassword: React.FC<Step2ForgetPasswordProps> = ({
	changePage,
	atualizarSenha
}) => {
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const [errorPassword, setErrorPassword] = useState("");
	const [errorConfPassword, setErrorConfPassword] = useState("");

	const [success, setSuccess] = useState(false);

	const { getPasswordValidator } = useInputsValidator();
	const validator = getPasswordValidator(8, 20);
	return (
		<>
			<ContainerBannerStep2ForgetPassword>
				<div className="container-banner-step2-forget-password">
					<div className="container-step2-forget-password">
						<div className="header-step2-forget-password">
							<Dots
								countItems={3}
								currentItem={1}
								direction="row"
								colorActive="orange"
								colorDisabled="gray"
								size={12}
							/>
						</div>
						<div className="main-step2-forget-password">
							<div className="container-img-step2-forget-passwor">
								<img src={"https://safefood-nfs.hopto.org/assets/step-2-forget.png"} />
							</div>
							<div className="text-step2-forget-password">
								<Text>Atualize sua senha</Text>
								<Subtitle>
									Agora vamos alterar sua senha, para que consiga recuperar sua conta,
									coloque uma senha valida.
								</Subtitle>
							</div>
							{
								success &&
								<Alert type="success">
									<p>
										Senha alterada com sucesso...!
									</p>
								</Alert>
							}
							<TextField
								label="Senha: "
								required
								id="password"
								value={password}
								name="general-password"
								placeholder={"*".repeat(8)}
								onChange={ev => {
									const str = ev.currentTarget.value;
									const value = validator.format(str);
									setPassword(value);
									const errors = validator.validate(value);
									if (errors.length > 0) {
										setErrorPassword(errors.join(";"));
									} else {
										setErrorPassword("");
									}
								}}
								max={20}
								min={8}
								title="Digite sua senha"
								type="password"
								inputMode="text"
								error={errorPassword}
							/>
							<TextField
								label="Confirmação de senha: "
								required
								max={20}
								min={8}
								id="conf-password"
								name="general-conf-password"
								value={confPassword}
								onChange={ev => {
									const str = ev.currentTarget.value;
									const value = validator.format(str);
									setConfPassword(value);
									const errors = validator.validate(value);
									if (password != value) {
										errors.push("As senhas não coincidem");
									} else {
										errors.pop();
									}
									if (errors.length > 0) {
										setErrorConfPassword(errors.join(";"));
									} else {
										setErrorConfPassword("");
									}
								}}
								placeholder={"*".repeat(8)}
								title="Confirme sua senha"
								type="password"
								inputMode="text"
								error={errorConfPassword}
							/>
						</div>
						<div className="footer-step2-forget-password">
							<ButtonIcon icon={<MdOutlineArrowForwardIos />} disabled={success} onClick={() => {
								const isPasswordValid = password == confPassword;
								const hasNoError = errorPassword.length == 0 || confPassword.length == 0;

								// console.log({
								// 	isPasswordValid,
								// 	hasNoError
								// });

								if (isPasswordValid && hasNoError) {
									atualizarSenha(password)
										.then(res => {
											if (res.status == 200) {
												setSuccess(true);

												setTimeout(() => {
													changePage("finished");
												}, 1000);
											}
										});
								}
							}}>Atualizar</ButtonIcon>
						</div>
					</div>
				</div>
			</ContainerBannerStep2ForgetPassword>
		</>
	);
};
