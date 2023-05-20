import React, { useState } from "react";
import { CLabelAttention, CheckboxContainer } from "./styles";

export type typeInput = "checkbox" | "radio";

export type CheckBoxProps = {
	value: string;
	type?: typeInput;
	callback: (checked: boolean) => void;
	messageAlert?: boolean;
};

const Checkbox: React.FC<CheckBoxProps> = ({
	messageAlert = true,
	type = "checkbox",
	...props
}) => {
	const [alert, setAlert] = useState(false);

	const handleChange = (e: any) => {
		const value = e.target.value;
		const checked = e.target.checked;
		setAlert(!alert);
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
				messageAlert={messageAlert}
			>
				Terms must be checked
			</CLabelAttention>
		</CheckboxContainer>
	);
};

export default Checkbox;
