import styled, { css } from "styled-components";

export type StyledInputProps = {
	error?: boolean;
};
export const StyledInput = styled.input<StyledInputProps>`
	height: 32px;
	width: 100%;
	padding: 0 8px;
	min-width: 300px;
	border-radius: ${p => p.theme.border.radius.md};
	font-family: ${p => p.theme.font.family.text};
	background: ${p => {
		if (p.theme.isLight) {
			if (p.error) return p.theme.colors.error[200];
			return p.theme.colors.light_gray[400];
		}
		if (p.theme.isDark) {
			if (p.error) return p.theme.colors.error[600];
			return p.theme.colors.dark_gray[600];
		}
	}};
	border: 1px solid
		${p => {
			if (p.error) return p.theme.colors.error[400];
			if (p.theme.isLight) {
				return "transparent";
			}
			if (p.theme.isDark) {
				return p.theme.colors.dark_gray[400];
			}
		}};
	box-shadow: ${p => p.theme.colors.shadow[200]};
	color: ${p => {
		if (p.theme.isLight) {
			if (p.error) return p.theme.colors.error[600];
			return p.theme.colors.dark_gray[600];
		}
		if (p.theme.isDark) {
			if (p.error) return p.theme.colors.error[200];
			return p.theme.colors.light_gray[600];
		}
	}};

	opacity: 0.8;

	&:disabled {
		filter: saturate(0.7);
	}
	&:hover,
	&:focus {
		border: 1px solid
			${p => {
				if (p.error) return p.theme.colors.error[400];
				if (p.theme.isLight) {
					return "transparent";
				}
				if (p.theme.isDark) {
					return p.theme.colors.dark_gray[200];
				}
			}};
		transform: translateX(2px);
		opacity: 1;
	}
`;
