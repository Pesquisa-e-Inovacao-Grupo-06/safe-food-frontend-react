import styled, { css } from "styled-components";
import { SizeChips } from "./chips-atom";

export const ContainerSkillChips = styled.div<{
	children: React.PropsWithChildren;
}>`
	display: flex;
	flex-wrap: wrap;
`;

export const ContainerChips = styled.div<{
	sizeChips?: SizeChips;
	text?: string;
	favorite?: boolean;
	key?: number;
	disabled?: boolean;
	onClick?: (id: number) => void;
}>`
	background-color: ${({ theme, favorite, disabled }) => {
		if (disabled) {
			return favorite ? theme.colors.success[200] : theme.colors.light_gray[600];
		}
		if (theme.isLight) {
			return favorite ? theme.colors.success[200] : theme.colors.light_gray[600];
		}
		if (theme.isDark) {
			return favorite ? theme.colors.success[1000] : theme.colors.dark_gray[600];
		}
	}};
	cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
	height: fit-content;
	width: fit-content;
	border: 2px solid
		${({ theme, favorite, disabled }) => {
		if (disabled) {
			return favorite ? theme.colors.success[800] : theme.colors.light_gray[200];
		}
		if (theme.isLight) {
			return favorite ? theme.colors.success[800] : theme.colors.light_gray[200];
		}
		if (theme.isDark) {
			return favorite ? theme.colors.success[1000] : theme.colors.light_gray[800];
		}
	}};

	${({ sizeChips }) => {
		switch (sizeChips) {
			case "chips-sm":
				return css`
					padding: 3px 10px;
					border-radius: 25px;

					p {
						font-size: small;
					}

					p svg {
						font-size: 10px;
					}
				`;
			case "chips-md":
				return css`
					padding: 5px 10px;
					border-radius: 25px;

					p {
						font-size: medium;
					}

					p svg {
						font-size: 13px;
					}
				`;
			case "chips-lg":
				return css`
					padding: 7px 10px;
					border-radius: 25px;

					p {
						font-size: large;
					}

					p svg {
						font-size: 17px;
					}
				`;
			default:
				return css`
					padding: 5px 10px;
					border-radius: 25px;

					p {
						font-size: medium;
					}

					p svg {
						font-size: 13px;
					}
				`;
		}
	}}

	& p {
		font-weight: 600;
		color: ${({ theme, favorite, disabled }) => {
		if (disabled) {
			return favorite ? theme.colors.success[800] : theme.colors.dark_gray[200];
		}
		if (theme.isLight) {
			return favorite ? theme.colors.success[800] : theme.colors.dark_gray[200];
		}
		if (theme.isDark) {
			return favorite ? theme.colors.success[200] : theme.colors.light_gray[800];
		}
	}};
		display: flex;
		gap: 4px;
		align-items: center;
		user-select: none;
	}

	& p svg {
		display: ${({ favorite }) => (favorite ? "inline" : "none")};
		color: #18a942;
	}
`;
