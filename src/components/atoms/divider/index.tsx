import styled, { css } from "styled-components";

export const Divider = styled.div<{
	marginTop?: string;
	marginBottom?: string;
	marginAll?: string;
	width?: string | number;
	color?: string;
}>`
	width: ${p =>
		(typeof p.width === "number" ? p.width + "px" : p.width) ?? "100%"};

	height: 1px;
	margin-top: ${p => {
		if (p.marginAll != null) {
			return p.marginAll;
		} else {
			return p.marginTop;
		}
	}};
	margin-bottom: ${p => {
		if (p.marginAll != null) {
			return p.marginAll;
		} else {
			return p.marginBottom;
		}
	}};
	background-color: ${p => {
		if (p.color != null) {
			return css`
				${({ theme }) => theme.colors.light_gray[600]};
			`;
		} else {
			return css`
            "transparent";
			`;
		}
	}};
`;
