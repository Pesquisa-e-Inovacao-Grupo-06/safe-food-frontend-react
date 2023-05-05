import React, { ChangeEvent, useCallback, useState } from "react";
import { SafeFoodUserGateway } from "@/app/infra/gateway/safefood/SafeFoodUserGateway";
import { SignInTemplate } from "@/components/templates/sign-in-template";
import { useInputsValidator } from "@/app/contexts/InputValidatorsProvider";
import { Cache } from "@/app/domain/protocols/Cache";
import { AlertType } from "@/components/atoms/alert";

type SignInProps = {
	gateway: SafeFoodUserGateway;
	cache: Cache;
};
function SignIn({ gateway, cache }: SignInProps) {
	const { getEmailValidator, getPasswordValidator } = useInputsValidator();
	const emailValidator = getEmailValidator(8, 100);
	const passwordValidator = getPasswordValidator(0, 200);

	const [email, setEmail] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorPassword, setErrorPassword] = useState("");
	const [isModalVisible, setModalVisible] = useState(true);
	//TODO: MELHORAR LÓGICA DE ALERT (LINCOLN)
	const [isVisibleAlert, setIsVisibleAlert] = useState<boolean>(false);
	const [typeAlert, setTypeAlert] = useState<AlertType>();
	const [textAlert, setTextAlert] = useState<string>();

	const changeEmail = useCallback(
		(ev: ChangeEvent<HTMLInputElement>) => {
			let str = ev.currentTarget.value;
			let value = emailValidator.format(str);
			setEmail(value);
			const errors = emailValidator.validate(value);
			if (errors.length > 0) {
				setErrorEmail(errors.join(";"));
			} else {
				setErrorEmail("");
			}
		},
		[email, errorEmail, setEmail, setErrorEmail]
	);

	const changePassword = useCallback(
		(ev: ChangeEvent<HTMLInputElement>) => {
			const str = ev.currentTarget.value;
			const value = passwordValidator.format(str);
			setPassword(value);
			const errors = passwordValidator.validate(value);
			if (errors.length > 0) {
				setErrorPassword(errors.join(";"));
			} else {
				setErrorPassword("");
			}
		},
		[password, setPassword, errorPassword, setErrorPassword]
	);

	const onClickLogin = useCallback(() => {
		if (
			errorEmail ||
			errorPassword ||
			email.length == 0 ||
			password.length == 0
		) {
			console.log(errorEmail);
			console.log(errorPassword);
			console.log(email);
			console.log(password);
			console.log("preencha todos os campos corretamente!");
			setIsVisibleAlert(true);
			setTypeAlert("warning");
			setTextAlert("Preencha todos os campos corretamente!");
			return;
		}
		gateway
			.login({
				email: email,
				senha: password,
			})
			.then(res => {
				if (res?.status == 400) {
					setIsVisibleAlert(true);
					setTypeAlert("warning");
					setTextAlert("Verifique suas credenciais!");
					console.log("Verifique suas credenciais!");
					return;
				}
				if (res?.status == 404) {
					setIsVisibleAlert(true);
					setTypeAlert("danger");
					setTextAlert("email nao encontrado!");
					console.log("email nao encontrado!");
					return;
				}
				cache.setItem("token", res.token);
				setIsVisibleAlert(true);
				setTypeAlert("success");
				setTextAlert("Logado com sucesso!");
				window.location.href = "/profile-consumer";
			})
			.catch(err => {
				console.error(err);
			});
	}, [email, password]);

	return (
		<SignInTemplate
			email={email}
			errorEmail={errorEmail}
			errorPassword={errorPassword}
			isModalVisible={isModalVisible}
			toggleModal={() => setModalVisible(!isModalVisible)}
			password={password}
			onChangeInputEmail={changeEmail}
			onClickLogin={onClickLogin}
			onChangeInputPassword={changePassword}
			isAlertVisible={isVisibleAlert}
			typeAlert={typeAlert}
			textAlert={textAlert}
		/>
	);
}

export default SignIn;
