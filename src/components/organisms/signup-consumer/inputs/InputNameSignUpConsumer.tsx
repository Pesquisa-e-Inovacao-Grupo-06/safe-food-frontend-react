import { useSignupConsumer } from "@/app/contexts/SignupConsumerProvider";
import { InputValidator } from "@/app/util/validations/input-validator";
import { TextField } from "@/components/molecules/textfield";
import React, { useState } from "react";

export const InputNameSignUp: React.FC<{
	validator: InputValidator;
}> = ({ validator }) => {
	const { consumer, setConsumer } = useSignupConsumer();
	const [error, setError] = useState("");
	return (
		<>
			<TextField
				label="Nome: "
				required
				id="name"
				name="general-name"
				max={100}
				min={10}
				value={consumer.nome}
				onChange={ev => {
					let str = ev.currentTarget.value;
					let value = validator.format(str);
					setConsumer({
						...consumer,
						nome: value,
					});
					const errors = validator.validate(value);
					if (errors.length > 0) {
						setError(errors.join(";"));
					} else {
						setError("");
					}
				}}
				title="Digite seu nome completo"
				type="string"
				inputMode="text"
				error={error}
			/>
		</>
	);
};
