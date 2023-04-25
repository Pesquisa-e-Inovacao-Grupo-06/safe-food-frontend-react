import { InputValidator } from "@/app/util/validations/input-validator";
import { TextField } from "@/components/molecules/textfield";
import React, { useState } from "react";
import moment from "moment";

export const InputBirthdateSignUp: React.FC<{
	validator: InputValidator;
}> = ({ validator }) => {
	const [date, setDate] = useState(moment().format("L"));
	const [error, setError] = useState("");
	return (
		<>
			<TextField
				label="Data de nascimento: "
				required={false}
				id="additional-birthday"
				name="additional-birthday"
				title="Selecione a data de seu nascimento"
				type="date"
				inputMode="numeric"
				value={date}
				onChange={ev => {
					let str = ev.currentTarget.value;
					let mdate = moment(str);
					console.log(mdate.subtract(10, "years").format("L"));
					// TODO AFTER
					//console.log(consoledate > new Date());
					//let value = validator.format(str);
					setDate(str);
					//const errors = validator.validate(value);
					//if (errors.length > 0) {
					//	setError(errors.join(";"));
					//} else {
					//	setError("");
					//}
				}}
				error={error}
			/>
		</>
	);
};
