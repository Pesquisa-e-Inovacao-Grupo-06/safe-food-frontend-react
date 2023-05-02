import React, { ChangeEvent, useCallback, useState } from "react";
import { SafeFoodUserGateway } from "@/app/infra/gateway/safefood/SafeFoodUserGateway";
import { SignInTemplate } from "@/components/templates/sign-in-template";
import { useInputsValidator } from "@/app/contexts/InputValidatorsProvider";
import { Cache } from "@/app/domain/protocols/Cache";

type SignInProps = {
	gateway: SafeFoodUserGateway;
	cache: Cache;
};
function SignIn({ gateway, cache }: SignInProps) {
	const { getEmailValidator, getPasswordValidator } = useInputsValidator();
	const emailValidator = getEmailValidator(8, 100);
	const passwordValidator = getPasswordValidator(8, 20);

	const [email, setEmail] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorPassword, setErrorPassword] = useState("");

	const [isModalVisible, setModalVisible] = useState(true);

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
		[email]
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
		[email]
	);

	const onClickLogin = useCallback(() => {
		if (
			errorEmail ||
			errorPassword ||
			email.length == 0 ||
			password.length == 0
		) {
			console.log("preencha todos os campos corretamente");
			return;
		}
		gateway
			.login({
				email: email,
				senha: password,
			})
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
				cache.setItem("token", res.token);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

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
		/>
	);
}

export default SignIn;
