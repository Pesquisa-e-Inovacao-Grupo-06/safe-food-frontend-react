import { Text } from "@/components/atoms/text";
import styled from "styled-components";

export const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	flex-direction: row;
	.img-more-favorite {
		border-radius: 8px;
	}
`;

export const StyledContainerRow = styled.div`
	display: flex;
	flex: 1 1 20px;
	flex-direction: row;
	flex-wrap: wrap;
`;
export const StyledContainerColumn = styled.div<{
	width?: string | number;
	height?: string | number;
}>`
	width: ${p => (typeof p.width === "number" ? p.width + "px" : p.width)};
	height: ${p => (typeof p.height === "number" ? p.height + "px" : p.height)};
	display: flex;
	flex-direction: column;
`;

export const StyledCost = styled(Text)`
	background-color: green;
	height: fit-content;
	/* padding-bottom: 5px; */
	/* padding-top: 5px; */
	padding: 8px 3% 8px 3%;
	border-radius: 4px;
	margin-top: 10px;
	/* padding-left: 3%; */
	/* padding-right: 3%; */
	color: white;
	max-width: auto;
	width: fit-content;
`;

export const StyledTextWithBorder = styled(Text)`
	border: "2px solid green ";
	border-radius: 8px;
	width: fit-content;
`;
