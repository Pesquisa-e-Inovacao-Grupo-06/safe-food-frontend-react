import styled, { css } from "styled-components";

export const Subtitle = styled.h2<{
	margin?: string;
	center?: boolean;
	large?: boolean;
}>`
	font-family: ${p => p.theme.font.family.title};
	font-weight: 700;
	text-align: ${p => (p.center ? "center" : "start")};
	margin: ${p => (p.margin ? p.margin : 0)};
	${p => {
		if (p.large) {
			let lineHeight = p.center ? p.theme.font.height.lg : p.theme.font.height.xlg;
			return css`
				font-size: ${p => p.theme.font.size.xlg};
				line-height: ${lineHeight};
			`;
		}
		let lineHeight = p.center ? p.theme.font.height.md : p.theme.font.height.lg;
		return css`
			font-size: ${p => p.theme.font.size.lg};
			line-height: ${lineHeight};
		`;
	}}

	color: ${p =>
		p.theme.isLight
			? p.theme.colors.dark_gray[400]
			: p.theme.colors.light_gray[400]}
`;
