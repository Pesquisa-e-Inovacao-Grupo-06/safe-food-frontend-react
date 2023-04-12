import { StyledTextIcon } from "./text-icon-style";
import { TextProps, TextAtom } from "../../atoms/text/text-atom";
import { ReactNode } from "react";

export type IconAlign = "right" | "left";

export type TextIconProps = {
	icon: ReactNode;
	iconAlign: IconAlign;
	iconColor?: string;
	color?: string;
} & React.HtmlHTMLAttributes<HTMLButtonElement> &
	React.PropsWithChildren;

type Props = TextIconProps & TextProps;
export const TextIcon: React.FC<Props> = ({
	icon,
	typeText,
	children,
	iconAlign = "left",
	iconColor = "red",
	color = "black",
	...props
}) => {
	return (
		<StyledTextIcon
			iconAlign={iconAlign}
			// iconColor={iconColor}
		>
			{icon}
			<TextAtom
				color={color}
				typeText={typeText}
				{...props}
			>
				{children}
			</TextAtom>
		</StyledTextIcon>
	);
};