import { Button, ButtonProps } from "../../atoms/button/button-atom";
import React, { ReactNode } from "react";

export type AlignType = "left" | "right";
export type ButtonIconProps = {
	icon: ReactNode;
	alignIcon?: AlignType;
} & React.HtmlHTMLAttributes<HTMLButtonElement> &
	React.PropsWithChildren;

type Props = ButtonProps & ButtonIconProps;
export const ButtonIcon: React.FC<Props> = ({
	icon,
	alignIcon = "right",
	children,
	...props
}) => {
	if (alignIcon == "left") {
		return (
			<Button {...props}>
				<>
					{icon}
					{children}
				</>
			</Button>
		);
	}

	return (
		<Button {...props}>
			<>
				{children}
				{icon}
			</>
		</Button>
	);
};
