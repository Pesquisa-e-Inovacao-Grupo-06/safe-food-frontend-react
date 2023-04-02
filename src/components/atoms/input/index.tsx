import React from "react";
import { StyledInput } from "./styles";

export type InputPropsComponent = {
	type?: "string" | "password" | "date" | "tel" | "email";
	min?: number;
	required?: boolean;
	max?: number;
	value: string;
	error?: string;
};
export type InputProps = React.HTMLAttributes<HTMLInputElement> &
	InputPropsComponent;
export const Input: React.FC<InputProps> = ({
	error = "",
	value,
	max = 100,
	min = 0,
	type = "string",
	...props
}) => {
	return (
		<>
			<StyledInput
				error={error.length > 0}
				type={type}
				value={value}
				pattern={"abc"}
				maxLength={max}
				minLength={min}
				{...props}
			/>
		</>
	);
};
