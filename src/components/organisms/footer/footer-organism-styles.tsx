import styled from "styled-components";
export const StyledFooterContainer = styled.div<{}>`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	/* @media (max-width: 700px) { */
	/* flex-direction: column; */
	/* } */

	@media (max-width: 390px) {
		flex-direction: column;
	}
`;
export const StyledLIFooterColumn = styled.li`
	padding-top: 12px;
	@media (max-width: 390px) {
		flex-direction: column;
	}
`;

export const StyledCopyRightContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 750px) {
		img {
			width: 119px;
			height: 60px;
		}
		flex-direction: column-reverse;
	}
`;
