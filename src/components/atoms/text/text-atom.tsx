import { PropsWithChildren } from "react";
import { StyledText } from "./styles";

export type TypeText = "text-md" | "text-mdb" | "text-sm" | "text-xsm-i";
export type TextProps = {
	typeText?: TypeText;
	text?: string;
} & React.HTMLAttributes<HTMLButtonElement> &
	React.HTMLAttributes<PropsWithChildren>;

export const TextAtom: React.FC<TextProps> = ({
	typeText = "text-md",
	color = "black",
	children,
	...props
}) => {
	return (
		<StyledText
			typeText={typeText}
			color={color}
			{...props}
		>
			{children}
		</StyledText>
	);
};
