import { useAuth } from "@/app/contexts/AuthProvider";
import { isTokenValid, parseJwt } from "@/app/util/jwt";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Route, RouteProps, useNavigate } from "react-router-dom";

export type AuthRouteProps = {
	redirect?: string;
	userAuth: UserAuthType;
} & PropsWithChildren;

export type UserAuthType = "CONSUMIDOR" | "ESTABELECIMENTO";
export const AuthRoute: React.FC<AuthRouteProps> = ({
	userAuth,
	redirect = "/",
	children,
}) => {
	const { user, token } = useAuth();
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (
			!user ||
			!token ||
			!user.usuario.tipoUsuario ||
			user.usuario.tipoUsuario != userAuth ||
			//TODO: tem que mandar uma verificação para quando a sessão expira
			!isTokenValid(token)
		) {
			navigate(redirect);
		} else {
			setLoading(false);
		}
		// console.log({ user, token, isTokenValid: isTokenValid(token) });
	}, [user, token]);

	return loading ? (
		<>
			<h1>Carregando...</h1>
		</>
	) : (
		<>{children}</>
	);
};
