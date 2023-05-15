import { Box } from "@/components/atoms/box";
import styled from "styled-components";

export const ContainerDropDownSubMenu = styled(Box)<{
	active: boolean;
}>`
	.container-children-dropdown-submenu {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.big-container-info-dropdown-sunmenu {
		visibility: ${p => (p.active ? "visible" : "hidden")};
		position: absolute;
		min-width: 100%;
		min-height: 100dvh;
		top: 0;
		right: 0;
	}

	.container-info-dropdown-submenu {
		display: ${p => (p.active ? "grid" : "")};
		position: absolute;
		background: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[200]
				: p.theme.colors.dark_gray[1000]};
		box-shadow: 0px 2px 12px 0px #00000022;
		top: ${p => (p.active ? "80px" : "135px")};
		right: 98px;
		padding: 10px 20px;
		width: 200px;
		box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		transition: 0.5s;
		visibility: ${p => (p.active ? "visible" : "hidden")};
		opacity: ${p => (p.active ? 1 : 0)};

		> p:nth-child(1) {
			padding-top: 20px;
			text-align: center;
			font-size: 20px;
			font-weight: 600;
			color: ${p =>
				p.theme.name == "light"
					? p.theme.colors.dark_gray[1000]
					: p.theme.colors.primary[600]};
			line-height: 1.2rem;
		}
		> p:nth-child(2) {
			text-align: center;
			font-size: 14px;
			padding-bottom: 20px;
			font-weight: 400;
			color: #cecece;
			color: ${p =>
				p.theme.name == "light" ? "#cecece" : p.theme.colors.light_gray[400]};
			line-height: 1.2rem;
		}

		> ul li {
			list-style: none;
			padding: 10px 0;
			border-top: 1px solid
				${p =>
					p.theme.name == "light" ? "#0000000d" : p.theme.colors.dark_gray[600]};

			> a {
				display: flex;
				align-items: center;
				gap: 10px;

				> svg {
					fill: ${p =>
						p.theme.name == "light"
							? p.theme.colors.dark_gray[400]
							: p.theme.colors.light_gray[600]};
				}

				> span {
					font-weight: 500;
					transition: 0.5s;
					color: ${p =>
						p.theme.name == "light"
							? p.theme.colors.dark_gray[800]
							: p.theme.colors.light_gray[600]};

					:hover {
						color: ${p => p.theme.colors.primary[600]};
					}
				}
			}
		}
	}

	.container-info-dropdown-submenu::before {
		content: "";
		position: absolute;
		top: -5px;
		right: 30px;
		width: 20px;
		height: 20px;
		background: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[200]
				: p.theme.colors.dark_gray[1000]};
		transform: rotate(45deg);
		transition: 0.5s;
	}
`;
