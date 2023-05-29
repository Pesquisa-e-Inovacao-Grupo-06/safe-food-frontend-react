import styled from "styled-components";
import { ImageProps } from ".";

export const StyledImage = styled.img<ImageProps>`
	width: ${p => (typeof p.width === "number" ? p.width + "px" : p.width)};
	height: ${p => (typeof p.height === "number" ? p.height + "px" : p.height)};
	max-width: ${p =>
		typeof p.maxWidth === "number" ? p.maxWidth + "px" : p.maxWidth};
	max-height: ${p =>
		typeof p.maxHeight === "number" ? p.maxHeight + "px" : p.maxHeight};
	min-width: ${p =>
		typeof p.minWidth === "number" ? p.minWidth + "px" : p.minWidth};
	min-height: ${p =>
		typeof p.minHeight === "number" ? p.minHeight + "px" : p.minHeight};
	object-fit: ${p => p.objectFit || "cover"};
	border-radius: ${p => {
		if (p.borderRadius === "sm") return p.theme.border.radius.sm;
		if (p.borderRadius === "md") return p.theme.border.radius.md;
		if (p.borderRadius === "lg") return p.theme.border.radius.lg;
		return "none";
	}};
	 cursor: ${(p) => (p.cursor ? "pointer" : "inherit")}; // Use a ternary operator to conditionally set the cursor style

`;
