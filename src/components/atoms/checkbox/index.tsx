import React, { useState } from "react";
import {
	CLabel,
	CInput,
	CLabelText,
	CLabelAttention,
	CContainer,
} from "./styles";

export type typeInput = "checkbox" | "radio";

type Props = {
	value: string;
	type?: typeInput;
};

const Checkbox: React.FC<Props> = ({
	value = "Checked",
	type = "checkbox",
}) => {
	const [alert, setAlert] = useState(false);

	const handleChange = (e: any) => {
		const value = e.target.value;
		const checked = e.target.checked;
		setAlert(!alert);
		console.log(value, checked);
	};

	return (
		<>
			<CLabel>
				<CContainer>
					<CInput
						type={type}
						defaultChecked={false}
						value={value}
						onChange={handleChange}
					/>
					<CLabelText>&nbsp; {value}</CLabelText>
				</CContainer>
				<CLabelAttention
					alert={alert}
					htmlFor=""
					required={true}
				>
					Terms must be checked
				</CLabelAttention>
			</CLabel>
		</>
	);
};

export default Checkbox;
