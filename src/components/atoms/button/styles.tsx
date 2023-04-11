import styled, { css } from "styled-components";
import { ButtonStyle } from "./button-atom";

export const StyledButton = styled.button<{
	buttonStyle: ButtonStyle;
}>`
	min-width: 150px;
	min-height: 35px;
	font-size: ${p => p.theme.font.size.lg};
	color: ${p =>
		p.buttonStyle == `filled`
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[200]};

	fill: ${p =>
		p.buttonStyle == `filled`
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[200]};
	font-family: ${p => p.theme.font.family.text};
	border-radius: ${({ theme }) => theme.border.radius.md};
	cursor: pointer;

	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	padding: 12px 24px;
	opacity: 0.85;
	&:hover,
	&:focus,
	&:focus-within {
		opacity: 1;
	}
	&:hover {
		box-shadow: ${p =>
			p.buttonStyle == "filled" ? p.theme.colors.shadow[400] : "none"};
	}
	&:disabled {
		opacity: 0.8;
		filter: contrast(0.8);
		cursor: none;
		user-select: contain;

		&:hover {
			box-shadow: ${({ theme }) => theme.colors.shadow[400]};
		}
	}

	${p => {
		if (p.buttonStyle === "filled") {
			return css`
				box-shadow: ${({ theme }) => theme.colors.shadow[200]};
				background-color: ${p =>
					p.theme.isLight
						? p.theme.colors.primary[600]
						: p.theme.colors.primary[800]};
				border: 2px solid
					${p => {
						if (p.theme.isLight) {
							return p.theme.colors.primary[600];
						}
						return p.theme.colors.primary[1000];
					}};
			`;
		} else if (p.buttonStyle === `outline`) {
			return css`
				min-width: min-content;
				background-color: transparent;
				border: none;
			`;
		}
	}}

	@media (max-width: ${p => p.theme.breakpoint.sm}) {
		width: 100%;
		min-width: 80px;
		min-height: 32px;
		font-size: ${p => p.theme.font.size.md};
	}
`;
