import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: ${p => p.theme.colors.primary[3]};
	padding: 16px;
	font-size: ${p => p.theme.font.size.lg};
	font-family: ${p => p.theme.font.family.sans};
`;
