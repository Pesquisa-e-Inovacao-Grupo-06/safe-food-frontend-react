import { Link } from "react-router-dom";
import styled from "styled-components";

export const SSidebar = styled.div<{
	isOpen: boolean;
}>`
	height: 100dvh;
	width: ${p => (!p.isOpen ? "100px" : "300px")};
	background: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[1000]};
	padding: 24px;

	position: relative;

	& h2,
	span,
	svg {
		opacity: ${p => (p.theme.name == "light" ? {} : "85%")};
	}

	@media screen and (max-width: 800px) {
		display: none;
	}
`;

export const SHeader = styled.div`
	width: fir-content;
	height: fit-content;
	position: fixed;
	display: none;

	@media screen and (max-width: 800px) {
		display: block;
	}
`;

export const SSidebarButton = styled.button<{
	isOpen: boolean;
}>`
	font-family: inherit;
	outline: none;
	border: none;
	background: none;
	letter-spacing: inherit;
	color: inherit;
	font-size: inherit;
	text-align: inherit;
	padding: 0;
	position: absolute;
	top: 48px;
	right: ${p => (p.isOpen ? `-16px` : `-40px`)};
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[1000]};
	/* background: ${p => p.theme.colors.primary[600]}; */
	box-shadow: 0 0 4px
			${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[600]
					: p.theme.colors.dark_gray[600]},
		0 0 7px
			${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[200]
					: p.theme.colors.dark_gray[1000]};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SLogo = styled.div<{
	sidebarOpen: boolean;
}>`
	width: auto;
	display: grid;
	grid-template-columns: ${({ sidebarOpen }) => (!sidebarOpen ? {} : "1fr 3fr")};
	align-items: center;

	text-align: ${({ sidebarOpen }) => (!sidebarOpen ? "center" : {})};

	img {
		height: 50px;
	}
	cursor: pointer;

	margin-bottom: 24px;
`;

export const SDivider = styled.div`
	height: 1px;
	width: 100%;
	background: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[600]
			: p.theme.colors.dark_gray[600]};
	margin: 24px 0;
`;

export const SLinkContainer = styled.div<{
	key?: string;
	isActive?: boolean;
}>`
	background: ${({ theme, isActive }) =>
		!isActive
			? `transparent`
			: `${
					theme.name == "light"
						? theme.colors.light_gray[600]
						: theme.colors.dark_gray[600]
			  }`};
	border-radius: 6px;
	margin: 8px 0;

	:hover {
		box-shadow: inset 0 0 0 1px
			${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[600]
					: p.theme.colors.dark_gray[600]};
	}
`;

export const SInfo = styled.div<{
	sidebarOpen: boolean;
}>`
	display: ${({ sidebarOpen }) => (!sidebarOpen ? "none" : "inline")};
	width: ${({ sidebarOpen }) => (!sidebarOpen ? "fit-content" : {})};
	color: inherit;
`;

export const SLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: inherit;
	font-size: 16px;
	padding: calc(8px - 2px) 0;
`;

export const SLinkIcon = styled.div`
	padding: 8px 16px;
	display: flex;

	svg {
		font-size: 20px;
	}
`;

export const SLinkLabel = styled.span`
	display: block;
	flex: 1;
	margin-left: 8px;
`;

export const STheme = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
`;
export const SThemeLabel = styled.span`
	display: block;
	flex: 1;
`;
