import { PropsWithChildren } from "react";
import { StyledText } from "./styles";

export type TypeText = "text-md" | "text-mdb" | "text-sm" | "text-xsm-i";
export type AlignText = "center" | "start" | "end";
export type TextProps = {
	typeText?: TypeText;
	text?: string;
	align?: AlignText;
	cursor?: boolean;
} & React.HTMLAttributes<HTMLButtonElement> &
	React.HTMLAttributes<PropsWithChildren>;

export const Text: React.FC<TextProps> = ({
	typeText = "text-md",
	children,
	align,
	cursor,
	...props
}) => {
	return (
		<StyledText
			typeText={typeText}
			{...props}
			align={align}
			cursor={cursor}
		>
			{children}
		</StyledText>
	);
};
