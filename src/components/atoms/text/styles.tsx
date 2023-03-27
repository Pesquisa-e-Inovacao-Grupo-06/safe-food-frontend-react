import styled, { css } from "styled-components";
import { TypeText } from "./text-atom";
import { ColorType } from "@/styles/theme/styled";

export const StyledText = styled.span<{
	typeText: TypeText;
	color: ColorType;
}>`
	${p => {
		switch (p.typeText) {
			case "title":
				return css`
					font-size: ${p => p.theme.font.size.xxxlg};
					height: ${p => p.theme.pxToRem(56)};

					font-family: ${p => p.theme.font.family.text};
					font-weight: 700;
					color: p.color;
				`;
				break;
			case "subtitle":
				return css`
					font-size: ${p => p.theme.font.size.xxlg};

					font-family: ${p => p.theme.font.family.text};
					height: ${p => p.theme.pxToRem(36)};
					font-weight: 500;
					color: p.color;
				`;
				break;

			case "text-xlg":
				return css`
					font-size: ${p => p.theme.font.size.xlg};
					font-family: ${p => p.theme.font.family.text};
					height: ${p => p.theme.pxToRem(28)};
					font-weight: 400;
					color: p.color;
				`;
				break;

			case "text-md":
				return css`
					font-size: ${p => p.theme.font.size.md};

					font-family: ${p => p.theme.font.family.text};
					height: ${p => p.theme.pxToRem(24)};
					font-weight: 400;
					color: p.color;
				`;
				break;

			case "text-mdb":
				return css`
					height: ${p => p.theme.pxToRem(24)};
					font-size: ${p => p.theme.font.size.lg};
					font-weight: 700;

					font-family: ${p => p.theme.font.family.text};
					text-align: center;
					color: p.color;
				`;
				break;

			case "text-sm":
				return css`
					font-size: ${p => p.theme.font.size.sm};
					height: ${p => p.theme.pxToRem(24)};
					font-family: ${p => p.theme.font.family.text};

					font-weight: 400;
					color: p.color;
				`;
				break;

			case "text-xsm-i":
				return css`
					font-size: ${p => p.theme.font.size.xsm};
					height: ${p => p.theme.pxToRem(20)};
					font-weight: 400;
					font-family: ${p => p.theme.font.family.text};

					color: p.color;
				`;
				break;

			default:
				return css`
					height: ${p => p.theme.pxToRem(24)};
					font-size: ${p => p.theme.font.size.md};

					font-weight: 400;
					font-family: ${p => p.theme.font.family.text};

					color: p.color;
				`;
		}
	}}
`;
