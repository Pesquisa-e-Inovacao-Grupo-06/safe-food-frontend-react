import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";
import { SafeFoodCreateEstablishmentRequest } from "../infra/gateway/safefood/models/SafeFoodEstablishment";
import { SafeFoodCreateAddressRequest } from "../infra/gateway/safefood/models/SafeFoodAddress";

export type SignupEstablishmentContextParams = {
	establishment: SafeFoodCreateEstablishmentRequest;
	setEstablishment: Dispatch<SetStateAction<SafeFoodCreateEstablishmentRequest>>;
	errors: string[];
	saveErrors: (errors: string[]) => void;
};
export const signupEstablishmentContext =
	createContext<SignupEstablishmentContextParams>(
		{} as SignupEstablishmentContextParams
	);

export const useSignupEstablishment = () =>
	useContext(signupEstablishmentContext);

export type SignupEstablishmentProviderProps = {} & PropsWithChildren;
export const SignupEstablishmentProvider: FC<
	SignupEstablishmentProviderProps
> = props => {
	const [errors, setErrors] = useState<string[]>([]);
	const [establishment, setEstablishment] =
		useState<SafeFoodCreateEstablishmentRequest>({
			celular: "",
			cnpj: "",
			contatoCliente: "",
			descricao: "",
			email: "",
			endereco: {
				apelido: "",
				bairro: "",
				cep: "",
				cidade: "",
				complemento: "",
				estado: "",
				logradouro: "",
				numero: "",
			} as SafeFoodCreateAddressRequest,
			nome: "",
			nomeEmpresa: "",
			senha: "",
		} as SafeFoodCreateEstablishmentRequest);

	return (
		<signupEstablishmentContext.Provider
			value={{
				errors,
				saveErrors: setErrors,
				establishment,
				setEstablishment,
			}}
		>
			{props.children}
		</signupEstablishmentContext.Provider>
	);
};
