import { InputValidator } from "@/app/util/validations/input-validator";
import { TextField } from "@/components/molecules/textfield";
import React, { useState } from "react";

export const InputPhoneSignup: React.FC<{
	validator: InputValidator;
}> = ({ validator }) => {
	const [phone, setPhone] = useState("");
	const [error, setError] = useState("");
	return (
		<>
			<TextField
				label="Celular: "
				required={false}
				id="additional-phone"
				value={phone}
				placeholder="(00) 00000-0000"
				title="Digite seu número de celular"
				type="tel"
				name="additional-phone"
				inputMode="tel"
				max={15}
				min={11}
				onChange={ev => {
					let str = ev.currentTarget.value;
					let value = validator.format(str);
					setPhone(value);

					if (value.length > 0) {
						console.log(value);

						const errors = validator.validate(value);
						if (errors.length > 0) {
							setError(errors.join(";"));
						} else {
							setError("");
						}
					} else {
						setError("");
					}
				}}
				error={error}
			/>
		</>
	);
};
