import React from "react";

import * as S from "./styles";
import { ButtonLoading } from "../../molecules/button/button-loading";
export type ButtonStyle = "outline" | "filled";
export type ButtonProps = {
	buttonStyle?: ButtonStyle;
	disabled?: boolean;
	loading?: boolean;
	sizeLoading?: number;
} & React.HTMLAttributes<HTMLButtonElement> &
	React.PropsWithChildren;
export const Button: React.FC<ButtonProps> = ({
	buttonStyle = "filled",
	disabled = false,
	children,
	loading = false,
	sizeLoading,
	...props
}) => {
	return loading ? (
		<ButtonLoading sizeLoading={sizeLoading}></ButtonLoading>
	) : (
		<S.StyledButton
			{...props}
			disabled={disabled || false}
			buttonStyle={buttonStyle}
		>
			{children}
		</S.StyledButton>
	);
};
