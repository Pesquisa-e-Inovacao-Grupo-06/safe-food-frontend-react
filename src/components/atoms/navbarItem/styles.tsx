import styled from "styled-components";
import { ContainerFluid } from "../container";

export const ContainerItem = styled(ContainerFluid)`
	height: 75px;
	padding: 0;
	width: fit-content;
	border-bottom: 3px solid
		${props => (props.theme.name === "dark" ? "#252525" : "#fcfcfc")};
	border-top: 3px solid
		${props => (props.theme.name === "dark" ? "#252525" : "#fcfcfc")};
	background: ${props => (props.theme.name === "dark" ? "#252525" : "#fcfcfc")};
	display: flex;
	justify-content: center;

	&:hover {
		border-bottom: 3px solid
			${props => (props.theme.name === "dark" ? "#fe8e27" : "#0a4908")};
		transition: all 0.5 ease-out;
	}
`;
