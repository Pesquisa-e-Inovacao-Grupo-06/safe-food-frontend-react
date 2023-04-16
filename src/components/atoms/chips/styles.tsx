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
	onClick?: (id: number) => void;
}>`
	background-color: ${p => {
		if (p.theme.isLight) {
			return p.favorite
				? p.theme.colors.success[200]
				: p.theme.colors.light_gray[600];
		}
		if (p.theme.isDark) {
			return p.favorite
				? p.theme.colors.success[1000]
				: p.theme.colors.dark_gray[600];
		}
	}};
	cursor: pointer;
	height: fit-content;
	width: fit-content;
	border: 2px solid
		${p => {
			if (p.theme.isLight) {
				return p.favorite
					? p.theme.colors.success[800]
					: p.theme.colors.light_gray[200];
			}
			if (p.theme.isDark) {
				return p.favorite
					? p.theme.colors.success[1000]
					: p.theme.colors.light_gray[800];
			}
		}};

	${l => {
		switch (l.sizeChips) {
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
		color: ${p => {
			if (p.theme.isLight) {
				return p.favorite
					? p.theme.colors.success[800]
					: p.theme.colors.dark_gray[200];
			}
			if (p.theme.isDark) {
				return p.favorite
					? p.theme.colors.success[200]
					: p.theme.colors.light_gray[800];
			}
		}};
		display: flex;
		gap: 4px;
		align-items: center;
	}

	& p svg {
		display: ${({ favorite }) => (favorite ? "inline" : "none")};
		color: #18a942;
	}
`;
