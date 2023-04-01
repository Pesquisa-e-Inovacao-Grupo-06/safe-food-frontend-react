import styled from "styled-components";

export const Row = styled.div<{
	gap?: string;
}>`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	width: 100%;
	height: 100%;
	gap: ${p => p.gap || 0};
`;
