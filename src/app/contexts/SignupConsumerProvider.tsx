import {
	FC,
	PropsWithChildren,
	createContext,
	useContext,
	useState,
} from "react";

export type SignupConsumerContextParams = {
	saveFormData: (form: FormData) => void;
	getFormData: FormData;
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
	const [data, setData] = useState<FormData>(new FormData());
	const [errors, setErrors] = useState<string[]>([]);

	return (
		<signupConsumerContext.Provider
			value={{
				saveFormData: setData,
				getFormData: data,
				errors,
				saveErrors: setErrors,
			}}
		>
			{props.children}
		</signupConsumerContext.Provider>
	);
};
