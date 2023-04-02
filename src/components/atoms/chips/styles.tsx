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
	background-color: ${({ favorite }) => (favorite ? "#EDFFD9 " : "#e1e1e1")};
	cursor: pointer;
	height: fit-content;
	width: fit-content;
	border: 2px solid ${({ favorite }) => (favorite ? "#18A942" : "#d5d5d5")};

	${l => {
		switch (l.sizeChips) {
			case "chips-sm":
				return css`
					margin: 10px;
					padding: 3px 10px;
					border-radius: 25px;

					p {
						margin: 0;
						font-size: small;
						font-weight: 500;
					}

					p svg {
						font-size: 10px;
					}
				`;
			case "chips-md":
				return css`
					margin: 10px;
					padding: 5px 10px;
					border-radius: 25px;

					p {
						margin: 0;
						font-size: medium;
						font-weight: 500;
					}

					p svg {
						font-size: 13px;
					}
				`;
			case "chips-lg":
				return css`
					margin: 10px;
					padding: 7px 10px;
					border-radius: 25px;

					p {
						margin: 0;
						font-size: large;
						font-weight: 500;
					}

					p svg {
						font-size: 17px;
					}
				`;
			default:
				return css`
					margin: 10px;
					padding: 5px 10px;
					border-radius: 25px;

					p {
						margin: 0;
						font-size: medium;
						font-weight: 500;
					}

					p svg {
						font-size: 13px;
					}
				`;
		}
	}}

	& p {
		font-family: sans-serif;
		color: ${({ favorite }) => (favorite ? "#18A942" : "#767676")};
		display: flex;
		gap: 5px;
		align-items: center;
	}

	& p svg {
		display: ${({ favorite }) => (favorite ? "inline" : "none")};
		color: #18a942;
	}
`;
