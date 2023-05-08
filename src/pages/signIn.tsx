import React, { ChangeEvent, useCallback, useState } from "react";
import { SafeFoodUserGateway } from "@/app/infra/gateway/safefood/SafeFoodUserGateway";
import { SignInTemplate } from "@/components/templates/sign-in-template";
import { AlertType } from "@/components/atoms/alert";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/app/contexts/AuthProvider";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodConsumerGateway } from "@/app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodEstablishmentGateway } from "@/app/infra/gateway/safefood/SafeFoodEstablishmentGateway";

type SignInProps = {
	gateway: SafeFoodUserGateway;
	consumerGateway: SafeFoodConsumerGateway;
	establishmentGateway: SafeFoodEstablishmentGateway;
	cache: Cache;
};
function SignIn({
	gateway,
	consumerGateway,
	establishmentGateway,
	cache,
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

	const onClickLogin = () => {
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
					consumerGateway
						.findById(res.usuario.id)
						.then(data => {
							console.log("CONSUMER", { data });
							cache.setItem("consumer", JSON.stringify(data.data));
						})
						.finally(() => {
							navigate("/profile");
						});
				} else if (res.usuario.tipoUsuario === "ESTABELECIMENTO") {
					// TODO: setar cache do estabelecimento
					establishmentGateway
						.findById(res.usuario.id)
						.then(data => {
							console.log("FIND");
							cache.setItem("establishment", JSON.stringify(data.data));
						})
						.finally(() => {
							navigate("/profile-establishment");
						});
				}
			})
			.catch(err => {
				console.error(err);
			})
			.finally(() => setLoading(false));
	};

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
