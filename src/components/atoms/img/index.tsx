import { StyledImage } from "./styles";

export type ImageProps = {
	src: string | undefined;
	width?: string | number;
	height?: string | number;
	maxWidth?: string | number;
	maxHeight?: string | number;
	cursor: boolean;
	borderRadius?: "sm" | "md" | "lg" | "none";
	objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
};

export const ImageAtom: React.FC<ImageProps> = props => {
	return (
		<StyledImage
			alt=""
			{...props}
		/>
	);
};
