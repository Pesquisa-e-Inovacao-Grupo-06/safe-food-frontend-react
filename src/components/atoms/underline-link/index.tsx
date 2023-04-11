import styled, { css } from "styled-components";
export type FontSize = "xsm" | "sm" | "md" | "lg" | "xlg" | "xxlg";
export const UnderlineLink = styled.a<{
	size?: FontSize;
	color?: string;
}>`
	color: ${p => (p.color ? p.color : p.theme.colors.text)};
	position: relative;
	font-weight: 600;
	${p => {
		if (p.size) {
			const size = p.size;
			return css`
				font-size: ${p => p.theme.font.size[size]};
				line-height: ${p => p.theme.font.height[size]};
			`;
		}
		return css`
			font-size: ${p => p.theme.font.size.md};
			line-height: ${p => p.theme.font.height.md};
		`;
	}}
	opacity: .8;
	&,
	&:hover,
	&::after {
		transition: all
			${({ theme }) =>
				theme.transition.duration.fast + " " + theme.transition.type.elastic};
	}
	&::after {
		content: "";
		width: 90%;
		height: 2px;
		transition: all
			${({ theme }) =>
				theme.transition.duration.fast + " " + theme.transition.type.elastic};
		position: absolute;
		bottom: 0;
		left: 0;
		border-radius: 4px;
		background-color: ${p => p.theme.colors.primary[600]};
	}
	&:hover {
		opacity: 1;

		&::after {
			width: 100%;
		}
	}
`;
