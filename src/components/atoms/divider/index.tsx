import styled, { css } from "styled-components";

export const Divider = styled.div<{
	marginTop?: string;
	marginBottom?: string;
	marginAll?: string;

	color?: string;
}>`
	width: 100%;
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
				${({ theme }) => theme.colors.dark_gray[200]};
			`;
		} else {
			return css`
            "transparent";
			`;
		}
	}};
`;
