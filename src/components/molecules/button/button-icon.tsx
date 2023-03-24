import { Button } from "../../atoms/button/button-atom";
import React, { ReactNode } from "react";

export type AlignType = "left" | "right";
export type ButtonIconProps = {
	icon: ReactNode;
	alignIcon?: AlignType;
} & React.HtmlHTMLAttributes<HTMLButtonElement> &
	React.PropsWithChildren;

export const ButtonIcon: React.FC<ButtonIconProps> = ({
	icon,
	alignIcon = "right",
	children,
}) => {
	if (alignIcon == "left") {
		return (
			<Button>
				<>
					{icon}
					{children}
				</>
			</Button>
		);
	}

	return (
		<Button>
			<>
				{children}
				{icon}
			</>
		</Button>
	);
};
