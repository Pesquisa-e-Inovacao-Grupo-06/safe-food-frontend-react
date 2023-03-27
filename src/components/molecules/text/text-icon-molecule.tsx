import { StyledTextIcon } from "./text-icon-style";
import { TextProps, TextAtom, TypeText } from "../../atoms/text/text-atom";
import { ReactNode } from "react";

export type IconAlign = "right" | "left";

export type TextIconProps = {
	icon: ReactNode;
	iconAlign: IconAlign;
} & React.HtmlHTMLAttributes<HTMLButtonElement> &
	React.PropsWithChildren;

type Props = TextIconProps & TextProps;
export const TextIcon: React.FC<Props> = ({
	icon,
	typeText,
	children,
	text,
	iconAlign = "left",
	...props
}) => {
	return (
		<StyledTextIcon iconAlign={iconAlign}>
			<>
				{icon}
				<TextAtom
					typeText={typeText}
					text={text}
				/>
			</>
		</StyledTextIcon>
	);
};
