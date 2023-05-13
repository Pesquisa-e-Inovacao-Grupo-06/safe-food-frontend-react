import styled from "styled-components";

export const ContainerItem = styled.div<{
	isActive?: boolean;
}>`
	height: 75px;
	padding: 0;
	width: fit-content;

	border-bottom: 3px solid
		${({ theme, isActive }) =>
			!isActive
				? `transparent`
				: `${theme.name == "light" ? "#0a4908" : "#fe8e27"}`};
	border-top: 3px solid
		${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[200]
				: p.theme.colors.dark_gray[1000]};
	background: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[1000]};
	display: flex;
	justify-content: center;

	&:hover {
		border-bottom: 3px solid
			${props => (props.theme.name === "dark" ? "#fe8e27" : "#0a4908")};
		transition: all 0.5 ease-out;
	}

	a {
		align-self: center;
	}
`;
