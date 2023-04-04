import styled from "styled-components";

export const Column = styled.div<{
	size?: 1 | 2 | 3 | 4;
	order?: number | string;
	minWidth?: string;
	maxWidth?: string;
}>`
	flex-grow: ${p => p.size || 1};
	min-width: ${p => p.minWidth || "100px"};
	max-width: ${p => p.maxWidth || "auto"};
	max-height: 100%;
	order: ${p => p.order || "initial"};
`;
