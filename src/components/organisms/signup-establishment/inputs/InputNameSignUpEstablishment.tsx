import { useSignupEstablishment } from "@/app/contexts/SignupEstablishmentProvider";
import { InputValidator } from "@/app/util/validations/input-validator";
import { TextField } from "@/components/molecules/textfield";
import React, { useState } from "react";

export const InputNameSignUpEstablishment: React.FC<{
	validator: InputValidator;
}> = ({ validator }) => {
	const { establishment, setEstablishment } = useSignupEstablishment();
	const [error, setError] = useState("");
	return (
		<>
			<TextField
				label="Nome do estabelecimento: "
				required
				id="name"
				name="general-name"
				max={100}
				min={10}
				value={establishment.nome}
				onChange={ev => {
					let str = ev.currentTarget.value;
					let value = validator.format(str);
					setEstablishment({
						...establishment,
						nome: value,
						nomeEmpresa: value,
					});
					const errors = validator.validate(value);
					if (errors.length > 0) {
						setError(errors.join(";"));
					} else {
						setError("");
					}
				}}
				title="Digite seu nome completo do estabelecimento"
				type="string"
				inputMode="text"
				error={error}
			/>
		</>
	);
};
