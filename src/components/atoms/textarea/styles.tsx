import styled from "styled-components";

export const ContainerTextArea = styled.textarea<{
	height?: string;
}>`
	resize: none;
	height: ${p => p.height};
	width: 100%;
	padding: 8px;
	border-radius: ${p => p.theme.border.radius.md};
	background: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[400]
			: p.theme.colors.dark_gray[600]};

	border: 1px solid
		${p =>
			p.theme.name == "light" ? "transparent" : p.theme.colors.dark_gray[400]};
	box-shadow: ${p => p.theme.colors.shadow[200]};
	color: ${p =>
		p.theme.name == "light"
			? p.theme.colors.dark_gray[600]
			: p.theme.colors.light_gray[600]};

	::placeholder {
		font-family: Arial, Helvetica, sans-serif;
		color: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[800]
				: p.theme.colors.dark_gray[400]};
	}

	/* &:hover
	,&:focus 
    {
		border: 1px solid
			${p =>
		p.theme.name == "light" ? "transparent" : p.theme.colors.dark_gray[200]};
		transform: translateX(2px);
		opacity: 1;
	}
	&:disabled {
		&:hover,
		&:focus {
			border: none;
			transform: none;
		}
	} */
`;