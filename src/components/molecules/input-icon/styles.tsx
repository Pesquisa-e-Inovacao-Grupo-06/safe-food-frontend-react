import styled, { css } from "styled-components";

export type StyledInputProps = {
	error?: boolean;
	disabled?: boolean;
};
export const StyledDivInput = styled.div<StyledInputProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 32px;
	width: 100%;
	padding: 0 8px;
	border-radius: ${p => p.theme.border.radius.md};
	font-family: ${p => p.theme.font.family.text};
	background: ${p => {
		if (p.theme.isLight) {
			if (p.error) return p.theme.colors.error[200];
			if (p.disabled) return p.theme.colors.light_gray[600];
			return p.theme.colors.light_gray[400];
		}
		if (p.theme.isDark) {
			if (p.error) return p.theme.colors.error[600];
			if (p.disabled) return p.theme.colors.dark_gray[400];
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
			if (p.disabled) {
				return "transparent";
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
	fill: ${p => {
		if (p.theme.isLight) {
			if (p.error) return p.theme.colors.error[600];
			return p.theme.colors.dark_gray[200];
		}
		if (p.theme.isDark) {
			if (p.error) return p.theme.colors.error[200];
			return p.theme.colors.light_gray[400];
		}
	}};

	opacity: 0.8;
	&:hover,
	&.focus {
		border: 1px solid
			${p => {
				if (p.error) return p.theme.colors.error[400];
				if (p.theme.isLight || p.disabled) {
					return "transparent";
				}
				if (p.theme.isDark) {
					return p.theme.colors.dark_gray[200];
				}
			}};
		transform: translateX(2px);
		opacity: 1;
	}
	${p => {
		if (p.disabled)
			return css`
				opacity: 0.6;
				&:hover,
				&.focus {
					transform: none;
					opacity: 0.6;
				}
			`;
	}}
`;

export const StyledInputSingle = styled.input<StyledInputProps>`
	height: 100%;
	width: 100%;
	font-family: inherit;
	color: inherit;
	background: inherit;
`;
