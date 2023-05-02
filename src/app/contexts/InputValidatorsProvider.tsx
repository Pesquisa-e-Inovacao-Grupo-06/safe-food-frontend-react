import {
	FC,
	PropsWithChildren,
	createContext,
	useContext,
	useState,
} from "react";
import { EmailValidator } from "../util/validations/email-validator";
import { PasswordValidator } from "../util/validations/password-validator";

export type InputsValidatorParams = {
	getEmailValidator: (min: number, max: number) => EmailValidator;
	getPasswordValidator: (min: number, max: number) => PasswordValidator;
};
export const inputsValidatorsContext = createContext<InputsValidatorParams>(
	{} as InputsValidatorParams
);

export const useInputsValidator = () => useContext(inputsValidatorsContext);

export type InputsValidatorProviderProps = {} & PropsWithChildren;
export const SignupConsumerProvider: FC<
	InputsValidatorProviderProps
> = props => {
	return (
		<inputsValidatorsContext.Provider
			value={{
				getEmailValidator(min, max) {
					return new EmailValidator(min, max);
				},
				getPasswordValidator(min, max) {
					return new PasswordValidator(min, max);
				},
			}}
		>
			{props.children}
		</inputsValidatorsContext.Provider>
	);
};
