import styled from "styled-components";

export const StyledTitleFooterColumn = styled.p`
	margin-bottom: 16px;
`;

export const StyledFooterColumnContainer = styled.div`
	width: 200px;
	position: relative;

	& ::after {
		content: "";
		position: absolute;
		width: 12em;
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
