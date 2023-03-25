import { ColorType } from "@/styles/theme/styled";
import { StyledText } from "./styles";

export type TypeText =
	| "title"
	| "subtitle"
	| "text-xlg"
	| "text-md"
	| "text-mdb"
	| "text-sm"
	| "text-xsm-i";
export type TextProps = {
	typeText?: TypeText;
	color?: string;
	text?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export const TextAtom: React.FC<TextProps> = ({
	typeText = "text-md",
	text = "",
	color = "black",
	...props
}) => {
	return (
		<StyledText
			typeText={typeText}
			color={color}
		>
			{text}
		</StyledText>
	);
};
