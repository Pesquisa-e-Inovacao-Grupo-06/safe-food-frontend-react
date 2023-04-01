import styled from "styled-components";
import { ContainerFluid } from "../container";

export const ContainerItem = styled(ContainerFluid)`
	height: 75px;
	width: fit-content;
	border-bottom: 3px solid
		${props => (props.theme.name === "dark" ? "#333" : "#eaeaea")};
	border-top: 3px solid
		${props => (props.theme.name === "dark" ? "#333" : "#eaeaea")};
	background: ${props => (props.theme.name === "dark" ? "#333" : "#eaeaea")};
	display: flex;
	justify-content: center;

	&:hover {
		border-bottom: 3px solid
			${props => (props.theme.name === "dark" ? "#fe8e27" : "#0a4908")};
		transition: all 0.5 ease-out;
	}
`;