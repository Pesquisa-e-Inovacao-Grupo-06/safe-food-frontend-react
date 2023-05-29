import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';
import { SafeFoodCreateConsumerRequest } from '../infra/gateway/safefood/models/SafeFoodConsumer';
import { SafeFoodUserGateway } from '../infra/gateway/safefood/SafeFoodUserGateway';

export type SignupConsumerContextParams = {
	consumer: SafeFoodCreateConsumerRequest;
	setConsumer: Dispatch<SetStateAction<SafeFoodCreateConsumerRequest>>;
	errors: string[];
	saveErrors: (errors: string[]) => void;
	emailExists(email: string): Promise<boolean>;
};
export const signupConsumerContext = createContext<SignupConsumerContextParams>(
	{} as SignupConsumerContextParams
);

export const useSignupConsumer = () => useContext(signupConsumerContext);

export type SignupConsumerProviderProps = {
	gateway: SafeFoodUserGateway;
} & PropsWithChildren;
export const SignupConsumerProvider: FC<
	SignupConsumerProviderProps
> = props => {
	const [errors, setErrors] = useState<string[]>([]);
	const [consumer, setConsumer] = useState<SafeFoodCreateConsumerRequest>({
		dataNascimento: '',
		email: '',
		nome: '',
		senha: '',
		telefone: '',
		restricoes: [],
		apelido: '',
		bairro: '',
		cep: '',
		cidade: '',
		complemento: '',
		numero: '',
		estado: '',
		logradouro: '',
		file: undefined,
	} as SafeFoodCreateConsumerRequest);

	return (
		<signupConsumerContext.Provider
			value={{
				errors,
				saveErrors: setErrors,
				consumer,
				setConsumer,
				emailExists(email) {
					return props.gateway.emailExists(email).then(val => val);
				},
			}}
		>
			{props.children}
		</signupConsumerContext.Provider>
	);
};
