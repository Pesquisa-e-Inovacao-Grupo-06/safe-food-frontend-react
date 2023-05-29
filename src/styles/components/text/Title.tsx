import styled, { css } from "styled-components";

export const Title = styled.h1<{
	margin?: string;
	center?: boolean;
	large?: boolean;
	color?: string | null | undefined;
}>`
	font-family: ${p => p.theme.font.family.title};

	font-weight: 800;
	text-align: ${p => (p.center ? "center" : "start")};
	margin: ${p => (p.margin ? p.margin : 0)};
	${p => {
		if (p.large) {
			return css`
				font-size: ${p => p.theme.font.size.xxxlg};
				line-height: ${p => p.theme.font.height.xxxlg};
				@media (max-width: 600px) {
					font-size: ${p => p.theme.font.size.xlg};
					line-height: ${p => p.theme.font.height.xlg};
				}
			`;
		}
		return css`
			font-size: ${p => p.theme.font.size.xxlg};
			line-height: ${p => p.theme.font.height.xxlg};
			@media (max-width: 600px) {
				line-height: ${p => p.theme.font.height.xlg};
				font-size: ${p => p.theme.font.size.xlg};
			}
		`;
	}}

	color: ${p =>
		p.color
			? p.color
			: p.theme.isLight
			? p.theme.colors.dark_gray[800]
			: p.theme.colors.light_gray[200]};
`;
