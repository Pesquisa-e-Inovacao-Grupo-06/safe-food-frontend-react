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
	...props
}) => {
	const [classNameStyled, setClassname] = useState("");
	return (
		<>
			<StyledDivInput
				className={classNameStyled}
				error={!!error}
			>
				<StyledInputSingle
					onFocus={() => {
						setClassname(" focus");
					}}
					onBlur={() => setClassname("")}
					error={!!error}
					type={type}
					value={value}
					maxLength={max}
					minLength={min}
					{...props}
				/>
				{renderEndIcon && renderEndIcon()}
			</StyledDivInput>
		</>
	);
};
