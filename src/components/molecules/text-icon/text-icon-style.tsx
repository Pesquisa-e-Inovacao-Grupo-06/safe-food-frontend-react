import styled, { css } from "styled-components";
import { IconAlign } from "./text-icon-molecule";

export const StyledTextIcon = styled.div<{
	iconAlign: IconAlign;
	iconColor?: string;
	cursor?: boolean;
}>`
	${p => {
		if (p.iconAlign === "right") {
			return css`
				display: flex;
				flex-direction: row-reverse;
				align-items: center;
				gap: 9px;
			`;
		} else if (p.iconAlign === "left") {
			return css`
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 9px;
			`;
		}
	}}
	fill: ${p => p.iconColor} !important;
`;
