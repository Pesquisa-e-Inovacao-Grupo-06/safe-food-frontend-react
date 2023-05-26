import React, { Dispatch, FormEvent } from "react";
import { StyledInput } from "./styles";

export type InputPropsComponent = {
	type?: "string" | "password" | "date" | "tel" | "email";
	min?: number;
	required?: boolean;
	max?: number;
	name?: string;
	value: string;
	error?: string;
	setUseState?: (state: any) => void;
	disabled?: boolean;
	onFocus?(e: any): void;
};
export type InputProps = React.HTMLAttributes<HTMLInputElement> &
	InputPropsComponent;

function onChange(e: FormEvent<HTMLInputElement>, fn: (state: any) => void) {
	fn(e.currentTarget.value);
	//closure javascript
}
export const Input: React.FC<InputProps> = ({
	error = "",
	value,
	max = 100,
	min = 0,
	type = "string",
	onFocus,
	setUseState,
	...props
}) => {
	return (
		<>
			<StyledInput
				error={error.length > 0}
				type={type}
				value={value}
				maxLength={max}
				minLength={min}
				onChange={e => {
					if (setUseState) {
						onChange(e, setUseState);
					}
				}}
				onFocus={e => {
					e.target.value = "";
				}}
				{...props}
			/>
		</>
	);
};
