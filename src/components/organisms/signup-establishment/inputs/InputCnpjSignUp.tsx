import { useSignupEstablishment } from "@/app/contexts/SignupEstablishmentProvider";
import { InputValidator } from "@/app/util/validations/input-validator";
import { TextField } from "@/components/molecules/textfield";
import React, { useState } from "react";

export const InputCnpjSignUp: React.FC<{
	validator: InputValidator;
}> = ({ validator }) => {
	const { establishment, setEstablishment } = useSignupEstablishment();
	const [error, setError] = useState("");
	return (
		<>
			<TextField
				label="CNPJ da empresa: "
				required={true}
				id="additional-cnpj"
				value={establishment.cnpj}
				placeholder="00.000.000/0000-00"
				title="Digite o CNPJ do estabelecimento"
				type="string"
				name="additional-cnpj"
				inputMode="numeric"
				max={18}
				min={15}
				onChange={ev => {
					let str = ev.currentTarget.value;
					let value = validator.format(str);
					setEstablishment({
						...establishment,
						cnpj: value,
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
