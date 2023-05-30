import styled from "styled-components";

export const StyledLabelForImage = styled.label<{
	preview?: boolean;
	width: string;
}>`
	min-width: ${p => p.width};
	width: ${p => p.width};
	overflow: hidden;
	background-color: ${p => p.theme.colors.light_gray[400]};
	border: 2px solid ${p => p.theme.colors.light_gray[600]};
	height: ${p => p.width};
	padding: ${p => (p.preview ? "none" : "25px")};
	border-radius: 50%;
	opacity: 0.9;
	& > img,
	& > svg {
		image-rendering: pixelated;
		max-width: 100%;
	}

	cursor: pointer;
	&:is(:focus, :hover) {
		opacity: 1;
	}
`;

export const StyledLabelForImage2 = styled.label<{
	preview?: boolean;
	width: string;
}>`
max-height: 100%;
object-fit: cover;
/*width: 100%;*/
border-radius: 8px;

	cursor: pointer;
	&:is(:focus, :hover) {
		opacity: 1;
	}
`;

