import React, { useState } from "react";
import { CLabelAttention, CheckboxContainer } from "./styles";

export type typeInput = "checkbox" | "radio";

type Props = {
	value: string;
	type?: typeInput;
	callback: (checked: boolean) => void;
};

const Checkbox: React.FC<Props> = ({ type = "checkbox", ...props }) => {
	const [alert, setAlert] = useState(false);

	const handleChange = (e: any) => {
		const value = e.target.value;
		const checked = e.target.checked;
		setAlert(!alert);
		console.log(value, checked);
	};
	return (
		<CheckboxContainer>
			<label className="checkboxLabel">
				<span className="checkboxValue">{props.value}</span>
				<input
					type={type}
					value={props.value}
					onChange={e => {
						handleChange(e);
						props.callback(e.currentTarget.checked);
					}}
				/>
				<span className="checkmark"></span>
			</label>
			<CLabelAttention
				htmlFor=""
				alert={alert}
				required={true}
			>
				Terms must be checked
			</CLabelAttention>
		</CheckboxContainer>
	);
};

export default Checkbox;
