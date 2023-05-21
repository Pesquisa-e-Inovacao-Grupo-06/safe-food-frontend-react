import styled, { css } from "styled-components";
import { AlertType } from ".";

export type StyledAletsProps = {
	type: AlertType;
};

export const StyledAlert = styled.div<StyledAletsProps>`
	min-height: 40px;
	width: 100%;
	padding: 10px;
	margin-top: 20px;
	border-radius: ${p => p.theme.border.radius.md};
	font-family: ${p => p.theme.font.family.text};
	font-weight: 500;
	box-shadow: ${p => p.theme.colors.shadow[600]};
	background: ${p => {
		if (p.theme.isLight) {
			if (p.type === "success") return p.theme.colors.success[400];
			if (p.type === "danger") return p.theme.colors.danger[400];
			if (p.type === "warning") return p.theme.colors.warning[400];
			if (p.type === "info") return p.theme.colors.dark_gray[200];
		}
		if (p.theme.isDark) {
			if (p.type === "success") return p.theme.colors.success[600];
			if (p.type === "danger") return p.theme.colors.danger[600];
			if (p.type === "warning") return p.theme.colors.warning[600];
			if (p.type === "info") return p.theme.colors.dark_gray[400];
		}
	}};
	color: ${p => {
		if (p.theme.isLight) {
			if (p.type === "success") return p.theme.colors.success[800];
			if (p.type === "danger") return p.theme.colors.danger[600];
			if (p.type === "warning") return p.theme.colors.warning[800];
			if (p.type === "info") return p.theme.colors.light_gray[400];
		}
		if (p.theme.isDark) {
			if (p.type === "success") return p.theme.colors.success[200];
			if (p.type === "danger") return p.theme.colors.danger[200];
			if (p.type === "warning") return p.theme.colors.warning[200];
			if (p.type === "info") return p.theme.colors.light_gray[400];
		}
	}};
`;
export const AlertDivider = styled.div<{
	width?: string;
}>`
	width: ${p => p.width ?? "100%"};
	height: 2px;
	margin: 2px 0;
	background-color: rgba(42, 42, 42, 0.1);
	opacity: 0.8;
`;
export const TitleAlert = styled.h3`
	font-family: ${p => p.theme.font.family.title};
	font-weight: 700;
	margin-bottom: 8px;
`;
