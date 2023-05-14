import React from "react";
import * as S from "./styles";
import { ButtonLoading } from "../../molecules/button/button-loading";

export type ButtonStyle = "outline" | "filled";

export type ButtonProps = {
	buttonStyle?: ButtonStyle;
	disabled?: boolean;
	loading?: boolean;
	sizeLoading?: number;
	width?: string | number;
	height?: string | number;
	color?: string;
} & React.HTMLAttributes<HTMLButtonElement> &
	React.PropsWithChildren;

export const Button: React.FC<ButtonProps> = ({
	buttonStyle = "filled",
	disabled = false,
	children,
	loading = false,
	sizeLoading,
	width = "100%",
	height = 40,
	color,
	...props
}) => {
	return loading ? (
		<ButtonLoading sizeLoading={sizeLoading}></ButtonLoading>
	) : (
		<S.StyledButton
			{...props}
			disabled={disabled || false}
			buttonStyle={buttonStyle}
			height={height}
			width={width}
			color={color}
		>
			{children}
		</S.StyledButton>
	);
};
