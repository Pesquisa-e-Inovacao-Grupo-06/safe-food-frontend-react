import styled from "styled-components";

export const StyledTitleFooterColumn = styled.p`
	margin-bottom: 16px;
`;

export const StyledFooterColumnContainer = styled.div`
	min-width: 300px;
	width: 100%;

	position: relative;

	& ::after {
		content: "";
		position: absolute;
		width: 10em;
		/* max-width: 100%; */
		height: 3px;
		background-color: ${p => p.theme.colors.primary[600]};
		border-radius: 4px;
		bottom: -5px;
		left: 0;
	}
`;

export const StyledLIFooterColumn = styled.li`
	padding-top: 12px;
`;

export const StyledDivFooterColumn = styled.div`
	padding-bottom: 45px;
	#play-store {
		max-width: 300px;
		width: auto;
	}
`;
