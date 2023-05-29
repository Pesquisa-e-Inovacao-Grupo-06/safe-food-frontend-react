import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { EmailValidator } from '../util/validations/email-validator';
import { PasswordValidator } from '../util/validations/password-validator';
import { PhoneValidator } from '../util/validations/phone-validator';
import { CepValidator } from '../util/validations/cep-validator';
import { CnpjValidator } from '../util/validations/cnpj-validator';
import { JustStringAndSpaceValidator } from '../util/validations/just-string-and-space';
import { DateValidator } from '../util/validations/date-validator';

export type InputsValidatorParams = {
	getEmailValidator: (min: number, max: number) => EmailValidator;
	getPasswordValidator: (min: number, max: number) => PasswordValidator;
	getPhoneValidator: () => PhoneValidator;
	getCepValidator: () => CepValidator;
	getCnpjValidator: () => CnpjValidator;
	getJustStringValidator: (
		min: number,
		max: number
	) => JustStringAndSpaceValidator;
	getDateValidator(): DateValidator;
};
export const inputsValidatorsContext = createContext<InputsValidatorParams>(
	{} as InputsValidatorParams
);

export const useInputsValidator = () => useContext(inputsValidatorsContext);

export type InputsValidatorProviderProps = {} & PropsWithChildren;
export const InputsValidatorProvider: FC<
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
				getCepValidator() {
					return new CepValidator();
				},
				getCnpjValidator() {
					return new CnpjValidator();
				},
				getPhoneValidator() {
					return new PhoneValidator();
				},
				getJustStringValidator(min: number, max: number) {
					return new JustStringAndSpaceValidator(min, max);
				},
				getDateValidator() {
					return new DateValidator();
				},
			}}
		>
			{props.children}
		</inputsValidatorsContext.Provider>
	);
};
