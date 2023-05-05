import {
	FC,
	PropsWithChildren,
	createContext,
	useContext,
	useState,
} from "react";
import { SafeFoodLoginResponse } from "../infra/gateway/safefood/models/SafeFoodUser";
import { Cache } from "../domain/protocols/Cache";
import { getExpirationTimeFromToken } from "../util/jwt";
import moment, { Moment } from "moment";

export type AuthContextParams = {
	token: string;
	setToken(token: string): void;
	user: SafeFoodLoginResponse;
	setUser(user: SafeFoodLoginResponse): void;
	expiration: Moment | Date;
	logout(): void;
};
export const authConsumerContext = createContext<AuthContextParams>(
	{} as AuthContextParams
);

export const useAuth = () => useContext(authConsumerContext);

type AuthProviderProps = {
	cache: Cache;
} & PropsWithChildren;
export const AuthProvider: FC<AuthProviderProps> = props => {
	const userCacheString = props.cache.getItem("user");
	const userCacheParsed = userCacheString
		? (JSON.parse(userCacheString) as SafeFoodLoginResponse)
		: ({} as SafeFoodLoginResponse);

	const [user, setUser] = useState<SafeFoodLoginResponse>(userCacheParsed);

	const tokenCacheString = props.cache.getItem("token");
	const tokenCacheParsed = tokenCacheString || "";
	const [token, setToken] = useState<string>(tokenCacheParsed);

	return (
		<authConsumerContext.Provider
			value={{
				token,
				setToken,
				setUser,
				user,
				expiration: token ? getExpirationTimeFromToken(token) : moment(),
				logout() {
					props.cache.removeItem("token");
				},
			}}
		>
			{props.children}
		</authConsumerContext.Provider>
	);
};
