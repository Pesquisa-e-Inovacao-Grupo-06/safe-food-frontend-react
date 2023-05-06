import React, { ChangeEvent, useCallback, useState } from "react";
import { SafeFoodUserGateway } from "@/app/infra/gateway/safefood/SafeFoodUserGateway";
import { SignInTemplate } from "@/components/templates/sign-in-template";
import { AlertType } from "@/components/atoms/alert";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/app/contexts/AuthProvider";
import { SafeFoodConsumerGateway } from "@/app/infra/gateway/safefood/SafeFoodConsumerGateway";

type SignInProps = {
	gateway: SafeFoodUserGateway;
	consumerGateway: SafeFoodConsumerGateway;
	establishmentGateway: SafeFoodConsumerGateway;
};
function SignIn({
	gateway,
	consumerGateway,
	establishmentGateway,
}: SignInProps) {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isModalVisible, setModalVisible] = useState(true);
	//TODO: MELHORAR LÓGICA DE ALERT (LINCOLN)
	const [isVisibleAlert, setIsVisibleAlert] = useState<boolean>(false);
	const [typeAlert, setTypeAlert] = useState<AlertType>();
	const [textAlert, setTextAlert] = useState<string>();
	const { setToken, setUser } = useAuth();

	const changeEmail = useCallback(
		(ev: ChangeEvent<HTMLInputElement>) => {
			let str = ev.currentTarget.value;
			setEmail(str);
		},
		[setEmail]
	);

	const changePassword = useCallback(
		(ev: ChangeEvent<HTMLInputElement>) => {
			const str = ev.currentTarget.value;
			setPassword(str);
		},
		[setPassword]
	);

	const onClickLogin = useCallback(() => {
		setIsVisibleAlert(false);
		setLoading(true);
		if (email.length == 0 || password.length == 0) {
			setIsVisibleAlert(true);
			setTypeAlert("warning");
			setTextAlert("Email ou senha incorretos");
			setLoading(false);
			return;
		}
		gateway
			.login({
				email: email,
				senha: password,
			})
			.then(res => {
				if (res?.status != 200) {
					setIsVisibleAlert(true);
					setTypeAlert("warning");
					setTextAlert("Email ou senha incorretos");
					return;
				}
				setUser(res);
				setToken(res.token);
				setIsVisibleAlert(true);
				setTypeAlert("success");
				setTextAlert("Logado com sucesso!");

				if (res.usuario.tipoUsuario === "CONSUMIDOR") {
					consumerGateway.findConsumerById(res.usuario.id).then(data => {
						// TODO: SETAR OS DADOS DO USUARIO AQUI? OU DENTRO DA PAGINA DE FATO? VAMOS CRIAR OUTRO PROVIDER PRA ELE?
					});
					navigate("/profile");
				} else if (res.usuario.tipoUsuario === "ESTABELECIMENTO") {
					navigate("/profile-establishment");
				}
			})
			.catch(err => {
				console.error(err);
			})
			.finally(() => setLoading(false));
	}, [email, password]);

	return (
		<SignInTemplate
			email={email}
			isModalVisible={isModalVisible}
			toggleModal={() => setModalVisible(!isModalVisible)}
			password={password}
			onChangeInputEmail={changeEmail}
			loading={loading}
			onClickLogin={onClickLogin}
			onChangeInputPassword={changePassword}
			isAlertVisible={isVisibleAlert}
			typeAlert={typeAlert}
			textAlert={textAlert}
		/>
	);
}

export default SignIn;
