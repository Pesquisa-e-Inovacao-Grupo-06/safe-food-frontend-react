import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";
import { SafeFoodCreateConsumerRequest } from "../infra/gateway/safefood/models/SafeFoodConsumer";
import { SafeFoodCreateAddressRequest } from "../infra/gateway/safefood/models/SafeFoodAddress";

export type SignupConsumerContextParams = {
	consumer: SafeFoodCreateConsumerRequest;
	setConsumer: Dispatch<SetStateAction<SafeFoodCreateConsumerRequest>>;
	errors: string[];
	saveErrors: (errors: string[]) => void;
};
export const signupConsumerContext = createContext<SignupConsumerContextParams>(
	{} as SignupConsumerContextParams
);

export const useSignupConsumer = () => useContext(signupConsumerContext);

export type SignupConsumerProviderProps = {} & PropsWithChildren;
export const SignupConsumerProvider: FC<
	SignupConsumerProviderProps
> = props => {
	const [errors, setErrors] = useState<string[]>([]);
	const [consumer, setConsumer] = useState<SafeFoodCreateConsumerRequest>({
		dataNascimento: "",
		email: "",
		nome: "",
		senha: "",
		telefone: "",
		restricoes: [],
		apelido: "",
		bairro: "",
		cep: "",
		cidade: "",
		complemento: "",
		numero: "",
		estado: "",
		logradouro: "",
	} as SafeFoodCreateConsumerRequest);

	return (
		<signupConsumerContext.Provider
			value={{
				errors,
				saveErrors: setErrors,
				consumer,
				setConsumer,
			}}
		>
			{props.children}
		</signupConsumerContext.Provider>
	);
};
