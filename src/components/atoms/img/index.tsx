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
	cursor?: string;
	borderRadius?: "sm" | "md" | "lg" | "none";
	objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
} & ImgHTMLAttributes<HTMLImageElement>;

export const ImageAtom: React.FC<ImageProps> = ({
	src,
	width,
	height,
	maxWidth,
	maxHeight,
	minWidth,
	minHeight,
	cursor,
	borderRadius,
	objectFit,
  }) => {
	return (
	  <StyledImage
		alt=""
		width={width}
		height={height}
		maxWidth={maxWidth}
		maxHeight={maxHeight}
		minWidth={minWidth}
		minHeight={minHeight}
		cursor={cursor ? cursor.toString() : undefined}
		borderRadius={borderRadius}
		objectFit={objectFit}
		src={src ?? "https://via.placeholder.com/400"}
	  />
	);
  };