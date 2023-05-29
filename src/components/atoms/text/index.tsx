import { PropsWithChildren } from "react";
import { StyledText } from "./styles";

export type TypeText =
  | "text-x-md"
  | "text-md"
  | "text-mdb"
  | "text-sm"
  | "text-xsm-i";
export type AlignText = "center" | "start" | "end";
export type TextProps = {
  typeText?: TypeText;
  text?: string;
  align?: AlignText;
  cursor?: boolean | string; // Modify the cursor prop type to accept boolean or string
  color?: string;
} & React.HTMLAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<PropsWithChildren>;

export const Text: React.FC<TextProps> = ({
  typeText = "text-md",
  children,
  align,
  cursor = false,
  color,
  ...props
}) => {
  return (
    <StyledText
      typeText={typeText}
      {...props}
      align={align}
      cursor={cursor ? "true" : "false"} // Convert boolean value to string
      color={color}
    >
      {children}
    </StyledText>
  );
};
