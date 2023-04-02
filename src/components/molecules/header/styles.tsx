import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	z-index: 1;
	width: 100%;
	height: 75px;
	background: ${p =>
		p.theme.name == "dark"
			? p.theme.colors.dark_gray[600]
			: p.theme.colors.light_gray[200]};
	align-items: center;
	justify-content: space-between;
	padding: 0px 50px;
	display: grid;
	grid-template-columns: 0fr 2fr 1.2fr 0fr;
	justify-items: center;
	grid-gap: 10px;
	box-shadow: 0px 0px 25px 4px
		${p =>
			p.theme.name == "dark"
				? p.theme.colors.dark_gray[800]
				: p.theme.colors.light_gray[600]};

	> svg {
		color: ${props => props.theme.name};
		cursor: pointer;
		font-size: 25px;
		display: none;
	}

	& a {
		text-decoration: none;
		color: ${props => props.theme.name};
	}

	& ul {
		margin-left: 125px;
		height: inherit;
		display: flex;
		list-style: none;
		align-items: center;
	}

	& li {
		border-bottom: 3px solid
			${props => (props.theme.name == "dark" ? "#333" : "#eaeaea")};
		border-top: 3px solid
			${props => (props.theme.name == "dark" ? "#333" : "#eaeaea")};
		display: flex;
		align-items: center;
		height: inherit;
		margin-left: 3em;
	}

	& li:hover {
		border-bottom: 3px solid
			${props => (props.theme.name == "dark" ? "#fe8e27" : "#0a4908")};
		transition: all 0.5s ease-out;
	}

	@media screen and (max-width: 800px) {
		gap: 0;
		grid-template-columns: 0fr 0fr;
		padding: 0 20px;
		& ul,
		li,
		a {
			display: none;
		}
		> svg {
			display: block;
		}
	}
`;

export const ContainerLogo = styled.div`
	@media screen and (max-width: 800px) {
		display: none;
	}
`;

export const ContainerBtn = styled.div`
	height: 75px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
	align-items: center;
	@media screen and (max-width: 800px) {
		display: none;
	}
`;
