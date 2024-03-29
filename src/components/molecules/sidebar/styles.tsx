import { ContainerFluid } from "@/components/atoms/container";
import styled from "styled-components";

export const ContainerBack = styled.div<{ sidebar: boolean }>`
	background-color: #00000085;
	position: fixed;
	height: 100%;
	width: ${({ sidebar }) => (sidebar ? "100%" : "0")};
	top: 0px;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	visibility: ${p => (p.sidebar ? "visible" : "hidden")};
	z-index: 1;
`;

export const HeaderSidebar = styled(ContainerFluid)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0px 20px 0px 0px;
	height: 75px;
	width: auto;
	background-color: ${p =>
		p.theme.name === "light"
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[1000]};
	> svg {
		color: ${props => props.theme.colors.text};
		width: 25px;
		height: 25px;
		cursor: pointer;
	}

	@media (max-width: 600px) {
		> div {
			img {
				width: 50px;
			}

			h1 {
				font-size: 15px;
			}
		}
	}
`;

export const ContainerSidebar = styled.div<{ sidebar: boolean }>`
	background-color: ${p =>
		p.theme.name === "light"
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[1000]};
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

	@media (max-width: 600px) {
		width: ${({ sidebar }) => (sidebar ? "100%" : "0px")};
	}
`;

export const Content = styled.div`
	margin-top: 15px;
`;
