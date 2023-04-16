import {
	FC,
	PropsWithChildren,
	createContext,
	useContext,
	useState,
} from "react";

export type SignupEstablishmentContextParams = {
	saveFormData: (form: FormData) => void;
	getFormData: FormData;
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
	const [data, setData] = useState<FormData>(new FormData());
	const [errors, setErrors] = useState<string[]>([]);

	return (
		<signupEstablishmentContext.Provider
			value={{
				saveFormData: setData,
				getFormData: data,
				errors,
				saveErrors: setErrors,
			}}
		>
			{props.children}
		</signupEstablishmentContext.Provider>
	);
};
