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
import { SafeFoodRestrictionModel } from "../infra/gateway/safefood/models/SafeFoodRestriction";

export type AuthContextParams = {
	token: string;
	user: SafeFoodLoginResponse;
	expiration: Moment | Date;
	restrictions: SafeFoodRestrictionModel;
	setRestrictions(restrictions: SafeFoodRestrictionModel): void;
	setToken(token: string): void;
	setUser(user: SafeFoodLoginResponse): void;
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

	const restrictionsCacheString = props.cache.getItem("restrictions");
	const restrictionsCacheParsed = restrictionsCacheString
		? (JSON.parse(restrictionsCacheString) as SafeFoodRestrictionModel)
		: ({} as SafeFoodRestrictionModel);

	const [restrictions, setRestrictions] = useState<SafeFoodRestrictionModel>(
		restrictionsCacheParsed
	);

	const [user, setUser] = useState<SafeFoodLoginResponse>(userCacheParsed);

	const tokenCacheString = props.cache.getItem("token");
	const tokenCacheParsed = tokenCacheString || "";
	const [token, setToken] = useState<string>(tokenCacheParsed);

	return (
		<authConsumerContext.Provider
			value={{
				restrictions,
				setRestrictions(restrictions) {
					const restrictionsString = JSON.stringify(restrictions);
					props.cache.setItem("restrictions", restrictionsString);
					setRestrictions(restrictions);
				},
				token,
				setToken(token) {
					props.cache.setItem("token", token);
					setToken(token);
				},
				setUser(user) {
					props.cache.setItem("user", JSON.stringify(user));
					setUser(user);
				},
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
