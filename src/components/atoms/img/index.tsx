import { HtmlHTMLAttributes, ImgHTMLAttributes } from "react";
import { StyledImage } from "./styles";

export type ImageProps = {
	src: string | undefined;
	width?: string | number;
	height?: string | number;
	maxWidth?: string | number;
	maxHeight?: string | number;
	minWidth?: string | number;
	minHeight?: string | number;
	cursor?: boolean;
	borderRadius?: "sm" | "md" | "lg" | "none";
	objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
} & ImgHTMLAttributes<HTMLImageElement>;

export const ImageAtom: React.FC<ImageProps> = props => {
	return (
		<StyledImage
			alt=""
			{...props}
		/>
	);
};
