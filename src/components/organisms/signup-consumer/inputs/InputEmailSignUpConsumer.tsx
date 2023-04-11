import { InputValidator } from "@/app/util/validations/input-validator";
import { TextField } from "@/components/molecules/textfield";
import React, { useState } from "react";

export const InputEmailSignUp: React.FC<{
	validator: InputValidator;
}> = ({ validator }) => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	return (
		<>
			<TextField
				label="Email: "
				required
				id="email"
				value={email}
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
					setEmail(value);
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
