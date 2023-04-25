import styled from "styled-components";

export const StyledSelect = styled.div<{
	width?: number;
}>`
	width: ${p => (p.width == null ? "auto" : p.width + "px")};
`;
