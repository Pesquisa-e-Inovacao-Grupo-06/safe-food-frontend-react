import React, { Dispatch, FormEvent } from "react";
import { StyledInput } from "./styles";

export type InputPropsComponent = {
	type?: "string" | "password" | "date" | "tel" | "email";
	min?: number;
	required?: boolean;
	max?: number;
	name?: string;
	value?: string | boolean;
	// checked?: boolean;
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
	// checked,
	...props
}) => {
	// console.log({ checked });

	return (
		<>
			{typeof value == 'string' &&
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
				/>}

			{typeof value == 'boolean' &&
				<input
					{...props}
					type="radio"
					checked={value}
					onClick={e => {
						onChange(e, setUseState!!);
					}}
					onChange={() => { }}
				/>
			}

		</>
	);
};
