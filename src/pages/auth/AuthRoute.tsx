import { useAuth } from "@/app/contexts/AuthProvider";
import { isTokenValid, parseJwt } from "@/app/util/jwt";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Route, RouteProps, useNavigate } from "react-router-dom";

export type AuthRouteProps = {
	redirect?: string;
	userAuth: "CONSUMER" | "ESTABLISHMENT" | "BOTH";
} & PropsWithChildren;
export const AuthRoute: React.FC<AuthRouteProps> = ({
	userAuth,
	redirect = "/signin",
	children,
}) => {
	const { user, token } = useAuth();
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (
			!user ||
			!token ||
			!user.usuario ||
			user.usuario.tipoUsuario == userAuth ||
			!isTokenValid(token)
		) {
			navigate(redirect);
		} else {
			setLoading(false);
		}
	}, [user, token]);

	return loading ? (
		<>
			<h1>Carregando...</h1>
		</>
	) : (
		<>{children}</>
	);
};
