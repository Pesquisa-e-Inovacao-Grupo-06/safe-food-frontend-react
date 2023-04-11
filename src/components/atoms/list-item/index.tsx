import styled from "styled-components";

export const ListItem = styled.li<{
	margin?: string;
}>`
	margin: ${p => p.margin ?? "none"};
`;
