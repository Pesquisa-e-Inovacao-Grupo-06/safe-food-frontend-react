import { useSignupEstablishment } from "@/app/contexts/SignupEstablishmentProvider";
import { InputValidator } from "@/app/util/validations/input-validator";
import { TextField } from "@/components/molecules/textfield";
import React, { useState } from "react";

export const InputEmailSignUp: React.FC<{
	validator: InputValidator;
}> = ({ validator }) => {
	const { establishment, setEstablishment } = useSignupEstablishment();
	const [error, setError] = useState("");
	return (
		<>
			<TextField
				label="Email: "
				required
				id="email"
				value={establishment.email}
				placeholder="nome@exemplo.com"
				title="Digite seu e-mail completo"
				type="email"
				name="general-email"
				inputMode="email"
				max={100}
				min={10}
				onChange={ev => {
					let str = ev.currentTarget.value;
					let value = validator.format(str);
					setEstablishment({
						...establishment,
						email: value,
					});
					const errors = validator.validate(value);
					if (errors.length > 0) {
						setError(errors.join(";"));
					} else {
						setError("");
					}
				}}
				error={error}
			/>
		</>
	);
};
