import { useSignupEstablishment } from "@/app/contexts/SignupEstablishmentProvider";
import { InputValidator } from "@/app/util/validations/input-validator";
import { TextField } from "@/components/molecules/textfield";
import React, { useState } from "react";

export const InputsPasswordsSignUpEstablishment: React.FC<{
	validator: InputValidator;
}> = ({ validator }) => {
	const { establishment, setEstablishment } = useSignupEstablishment();
	const [confPassword, setConfPassword] = useState("");
	const [errorPassword, setErrorPassword] = useState("");
	const [errorConfPassword, setErrorConfPassword] = useState("");

	return (
		<>
			<TextField
				label="Senha: "
				required
				id="password"
				value={establishment.senha}
				name="general-password"
				placeholder={"*".repeat(8)}
				onChange={ev => {
					const str = ev.currentTarget.value;
					const value = validator.format(str);
					setEstablishment({
						...establishment,
						senha: value,
					});
					const errors = validator.validate(value);
					if (errors.length > 0) {
						setErrorPassword(errors.join(";"));
					} else {
						setErrorPassword("");
					}
				}}
				max={20}
				min={8}
				title="Digite sua senha"
				type="password"
				inputMode="text"
				error={errorPassword}
			/>
			<TextField
				label="Confirmação de senha: "
				required
				max={20}
				min={8}
				id="conf-password"
				name="general-conf-password"
				value={confPassword}
				onChange={ev => {
					const str = ev.currentTarget.value;
					const value = validator.format(str);
					setConfPassword(value);
					const errors = validator.validate(value);
					if (establishment.senha != value) {
						errors.push("As senhas não coincidem");
					} else {
						errors.pop();
					}
					if (errors.length > 0) {
						setErrorConfPassword(errors.join(";"));
					} else {
						setErrorConfPassword("");
					}
				}}
				placeholder={"*".repeat(8)}
				title="Confirme sua senha"
				type="password"
				inputMode="text"
				error={errorConfPassword}
			/>
		</>
	);
};
