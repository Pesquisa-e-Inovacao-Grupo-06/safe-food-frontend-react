import styled, { css } from "styled-components";
import { ButtonStyle } from "./button-atom";
import { pixelToRem } from '../../../styles/theme/light';
//https://styled-components.com/docs/basics

export const StyledButton = styled.button<{
	buttonStyle: ButtonStyle;
}>`
	${p => {
		if (p.buttonStyle === "filled") {
			return css`
				box-shadow: ${({ theme }) => theme.colors.shadow[400]};
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
				background-color: transparent;
				border: 4px solid ${p => p.theme.colors.primary[400]};
			`;
		}
	}}
	min-width: 157px;
	height: ${p => pixelToRem(37)};
	font-size: ${p => p.theme.font.size.lg};
	color: ${p =>
		p.buttonStyle == `filled`
			? p.theme.colors.light_gray[200]
			: p.theme.colors.text};
	font-family: ${p => p.theme.font.family.text};
	border-radius: ${({ theme }) => theme.border.radius.md};
	cursor: pointer;
	
	
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	gap: 10px;
	opacity: 0.85;
	&:hover,
	&:focus,
	&:focus-within {
		opacity: 1;
	}
	&:hover{
		box-shadow: ${({theme})=>theme.colors.shadow[200]};
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

	//mediaQuery
	@media (max-width: ${p => p.theme.breakpoint.sm}) {
		width: 90%;
		margin: 20px;
		font-size: ${p => p.theme.font.size.lg};
	}
`;
