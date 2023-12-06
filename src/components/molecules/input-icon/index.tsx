import { InputProps } from "@/components/atoms/input";
import React, { ReactElement, useState } from "react";
import { StyledDivInput, StyledInputSingle } from "./styles";

export type InputIconProps = {
	renderEndIcon?: () => ReactElement;
} & InputProps;
export const InputIcon: React.FC<InputIconProps> = ({
	renderEndIcon = () => <></>,
	value,
	max = 100,
	min = 0,
	type = "string",
	error,
	disabled,
	...props
}) => {
	const [classNameStyled, setClassname] = useState("");
	return (
		<>
			<StyledDivInput
				disabled={disabled}
				className={classNameStyled + " transition"}
				error={!!error}
			>
				{typeof value == 'string' && <StyledInputSingle
					onFocus={() => {
						setClassname(" focus");
					}}
					onBlur={() => setClassname("")}
					error={!!error}
					type={type}
					value={value}
					maxLength={max}
					minLength={min}
					disabled={disabled}
					{...props}
				/>}

				{renderEndIcon && renderEndIcon()}
			</StyledDivInput>
		</>
	);
};
