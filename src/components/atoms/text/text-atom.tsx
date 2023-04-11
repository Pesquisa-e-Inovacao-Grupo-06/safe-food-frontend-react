import { PropsWithChildren } from "react";
import { StyledText } from "./styles";

export type TypeText = "text-md" | "text-mdb" | "text-sm" | "text-xsm-i";
export type AlignText = "center" | "start" | "end";
export type TextProps = {
	typeText?: TypeText;
	text?: string;
	align?: AlignText;
} & React.HTMLAttributes<HTMLButtonElement> &
	React.HTMLAttributes<PropsWithChildren>;

export const TextAtom: React.FC<TextProps> = ({
	typeText = "text-md",
	children,
	...props
}) => {
	return (
<<<<<<< HEAD
		<StyledText
			typeText={typeText}
			{...props}
		>
			{children}
		</StyledText>
=======
		<div>
			<StyledText
				typeText={typeText}
				color={color}
				{...props}
			>
				{children}
			</StyledText>
		</div>
>>>>>>> feature/term-of-service
	);
};
