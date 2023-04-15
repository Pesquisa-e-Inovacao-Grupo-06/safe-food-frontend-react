import { TextAtom } from "@/components/atoms/text";
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
export const StyledContainerColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledCost = styled(TextAtom)`
	background-color: green;
	height: 100%;
	border-radius: 4px;
	margin-top: 10px;
	padding-left: 3%;
	padding-right: 3%;
	color: white;
	max-width: auto;
	width: fit-content;
`;

export const StyledTextWithBorder = styled(TextAtom)`
	border: "2px solid green ";
	border-radius: 8px;
	width: fit-content;
`;
