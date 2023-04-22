import styled from "styled-components";
import { Text } from "../text";
import { Box } from "../box";

const PaginationItemActive = styled(Text)`
	cursor: pointer;
	font-weight: 800;
	font-size: ${p => p.theme.font.size.lg};
	font-family: ${p => p.theme.font.family.title};
	color: ${p => p.theme.colors.primary[600]};
`;

const PaginationItemDisable = styled(Text)`
	cursor: pointer;
	font-weight: 500;
	font-family: ${p => p.theme.font.family.title};
	opacity: 0.6;
	font-size: ${p => p.theme.font.size.lg};
	color: ${p => p.theme.colors.dark_gray[400]};
	transition: all 0.3s ease;
	&:is(:hover, :focus) {
		transition: all 0.3s ease;
		opacity: 1;
	}
`;
const PageItem = styled(Box)<{
	currentPage: number | string;
	totalPages: number;
}>`
	width: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
`;

export { PageItem, PaginationItemActive, PaginationItemDisable };
