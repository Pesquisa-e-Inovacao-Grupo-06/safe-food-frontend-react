import { ContainerFluid } from "@/components/atoms/container";
import styled from "styled-components";

export const ContainerBack = styled.div<{ sidebar: boolean }>`
	background-color: #00000085;
	position: fixed;
	height: 100%;
	width: ${({ sidebar }) => (sidebar ? "100%" : "0")};
	top: 0px;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	z-index: 1;
`;

export const HeaderSidebar = styled(ContainerFluid)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0px 20px 0px 0px;
	height: 75px;
	width: auto;
	background-color: ${props =>
		props.theme.name === "dark" ? "#272727" : "#f0f0f0"};
	> svg {
		color: ${props => props.theme.colors.text};
		width: 25px;
		height: 25px;
		cursor: pointer;
	}
`;

export const ContainerSidebar = styled.div<{ sidebar: boolean }>`
	background-color: ${props =>
		props.theme.name === "dark" ? "#272727" : "#f0f0f0"};
	position: fixed;
	padding: 0px 10px 10px 10px;
	height: 100%;
	top: 0px;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	width: ${({ sidebar }) => (sidebar ? "240px" : "0px")};
	transition: all 0.4s ease;
	z-index: 2;
	> svg {
		position: fixed;
		color: ${props => props.theme.colors.text};
		width: 25px;
		height: 25px;
		margin-top: 25px;
		margin-left: 10px;
		cursor: pointer;
	}
`;

export const Content = styled.div`
	margin-top: 15px;
`;
