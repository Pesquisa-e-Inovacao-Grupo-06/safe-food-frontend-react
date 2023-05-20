import { useSignupEstablishment } from "@/app/contexts/SignupEstablishmentProvider";
import { InputValidator } from "@/app/util/validations/input-validator";
import { TextField } from "@/components/molecules/textfield";
import React, { useState } from "react";

export const InputPhoneSignupFixo: React.FC<{
	validator: InputValidator;
}> = ({ validator }) => {
	const { establishment, setEstablishment } = useSignupEstablishment();
	const [error, setError] = useState("");
	return (
		<>
			<TextField
				label="Telefone fixo: "
				required={false}
				id="additional-phone-fix"
				value={establishment.celular}
				placeholder="(00) 0000-0000"
				title="Digite o número do telefone fixo do estabelecimento"
				type="tel"
				name="additional-phone"
				inputMode="tel"
				max={14}
				min={10}
				onChange={ev => {
					let str = ev.currentTarget.value;
					let value = validator.format(str);
					setEstablishment({
						...establishment,
						celular: value,
					});

					if (value.length > 0) {
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
