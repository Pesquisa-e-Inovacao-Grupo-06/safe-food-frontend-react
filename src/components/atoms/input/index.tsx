import React from "react";
import { StyledInput, StyledInputProps } from "./styles";

export type InputPropsComponent = {
	type?: "string" | "password" | "date" | "tel" | "email";
	min?: number;
	max?: number;
	value?: string;
};
export type InputProps = StyledInputProps &
	React.HTMLAttributes<HTMLInputElement> &
	InputPropsComponent;
export const Input: React.FC<InputProps> = ({ error = false, ...props }) => {
	return (
		<>
			<StyledInput
				error={error}
				minLength={props.min}
				maxLength={props.max}
				type={props.type}
				value={props.value}
				{...props}
			/>
		</>
	);
};
