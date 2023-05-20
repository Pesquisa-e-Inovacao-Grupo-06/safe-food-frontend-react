import { useSignupEstablishment } from "@/app/contexts/SignupEstablishmentProvider";
import { InputValidator } from "@/app/util/validations/input-validator";
import { TextField } from "@/components/molecules/textfield";
import React, { useState } from "react";

export const InputPhoneSignupWpp: React.FC<{
	validator: InputValidator;
}> = ({ validator }) => {
	const { establishment, setEstablishment } = useSignupEstablishment();
	const [error, setError] = useState("");
	return (
		<>
			<TextField
				label="Celular: (WhatsApp)"
				required={true}
				id="additional-phone"
				value={establishment.contatoCliente}
				placeholder="(00) 00000-0000"
				title="Digite o número de celular WhatsApp do estabelecimento"
				type="tel"
				name="additional-phone-wpp"
				inputMode="tel"
				max={15}
				min={11}
				onChange={ev => {
					let str = ev.currentTarget.value;
					let value = validator.format(str);
					setEstablishment({
						...establishment,
						contatoCliente: value,
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
