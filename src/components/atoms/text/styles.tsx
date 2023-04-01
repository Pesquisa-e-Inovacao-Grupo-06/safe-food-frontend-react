import styled, { css } from "styled-components";
import { TypeText } from "./text-atom";
import { pixelToRem } from "../../../styles/theme/light";

export const StyledText = styled.span<{
	typeText: TypeText;
	color: string;
}>`
	${p => {
		switch (p.typeText) {
			case "text-md":
				return css`
					font-size: ${p => p.theme.font.size.md};
					font-family: ${p => p.theme.font.family.text};
					height: ${p => pixelToRem(24)};
					font-weight: 400;
				`;

			case "text-mdb":
				return css`
					height: ${p => pixelToRem(24)};
					font-size: ${p => p.theme.font.size.lg};
					font-weight: 700;
					font-family: ${p => p.theme.font.family.text};
					text-align: center;
				`;

			case "text-sm":
				return css`
					font-size: ${p => p.theme.font.size.sm};
					height: ${p => pixelToRem(24)};
					font-family: ${p => p.theme.font.family.text};
					font-weight: 400;
				`;

			case "text-xsm-i":
				return css`
					font-size: ${p => p.theme.font.size.xsm};
					height: ${p => pixelToRem(20)};
					font-weight: 400;
					font-family: ${p => p.theme.font.family.text};
				`;

			default:
				return css`
					height: ${p => pixelToRem(24)};
					font-size: ${p => p.theme.font.size.md};
					font-weight: 400;
					font-family: ${p => p.theme.font.family.text};
				`;
		}
	}};
	color: ${p => p.color};
`;
