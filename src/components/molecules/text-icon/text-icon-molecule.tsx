import { StyledTextIcon } from "./text-icon-style";
import { TextProps, Text } from "../../atoms/text";
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
	iconColor = "black",
	color = "black",
	...props
}) => {
	return (
		<StyledTextIcon
			iconAlign={iconAlign}
			iconColor={iconColor}
		>
			{icon}
			<Text
				color={color}
				typeText={typeText}
				{...props}
			>
				{children}
			</Text>
		</StyledTextIcon>
	);
};
