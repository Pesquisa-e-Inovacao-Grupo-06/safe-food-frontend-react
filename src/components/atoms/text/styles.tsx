import styled, { css } from "styled-components";
import { AlignText, TypeText } from ".";

export const StyledText = styled.p<{
	typeText: TypeText;
	color?: string;
	align?: AlignText;
	cursor?: boolean;
}>`
	text-align: ${p => p.align ?? "start"};
	${p => {
		switch (p.typeText) {
			case "text-x-md":
				return css`
					font-size: ${p => p.theme.font.size.lg};
					font-family: ${p => p.theme.font.family.text};
					line-height: ${p => p.theme.font.height.lg};
					font-weight: 400;
				`;
			case "text-md":
				return css`
					font-size: ${p => p.theme.font.size.md};
					font-family: ${p => p.theme.font.family.text};
					line-height: ${p => p.theme.font.height.md};
					font-weight: 400;
				`;

			case "text-mdb":
				return css`
					line-height: ${p => p.theme.font.height.lg};
					font-size: ${p => p.theme.font.size.lg};
					font-weight: 700;
					font-family: ${p => p.theme.font.family.text};
					text-align: center;
				`;

			case "text-sm":
				return css`
					font-size: ${p => p.theme.font.size.sm};
					line-height: ${p => p.theme.font.height.sm};
					font-family: ${p => p.theme.font.family.text};
					font-weight: 400;
				`;

			case "text-xsm-i":
				return css`
					font-size: ${p => p.theme.font.size.xsm};
					line-height: ${p => p.theme.font.height.xsm};
					font-weight: 400;
					font-family: ${p => p.theme.font.family.text};
				`;

			default:
				return css`
					line-height: ${p => p.theme.font.height.md};
					font-size: ${p => p.theme.font.size.md};
					font-weight: 400;
					font-family: ${p => p.theme.font.family.text};
				`;
		}
	}};
	margin: 0px;
	padding: 0px;
	cursor: ${p => (p.cursor ? "pointer" : null)};

	color: ${p =>
		p.color
			? p.color
			: p.theme.isLight
			? p.theme.colors.dark_gray[p.typeText == "text-mdb" ? 400 : 600]
			: p.theme.colors.light_gray[200]};
`;
