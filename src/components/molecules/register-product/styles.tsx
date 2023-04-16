import { Box } from "@/components/atoms/box";
import styled from "styled-components";
import { SSidebarButton } from "../sidebar-establishment/styles";
import { CardExpansiveEstablishmentFoodOrganism } from "@/components/organisms/card-establishment-food/card-establishment-food-organism";

export const ContainerRegisterProduct = styled.div<{
	isOpen: boolean;
}>`
	left: ${p => (!p.isOpen ? "100%" : "0")};
	width: ${p => (!p.isOpen ? "fit-content" : "400px")};
	background: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[1000]};

	position: relative;

	.container-info-register-product {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 20dvh 70dvh 10dvh;

		grid-template-areas: "header" "main" "footer";

		overflow-y: scroll;
		overflow-x: none;

		/* Scrollbar modification */

		::-webkit-scrollbar {
			width: ${p => (!p.isOpen ? "0" : "8px")};
		}

		/* Track */

		::-webkit-scrollbar-track {
			background-color: ${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[200]
					: p.theme.colors.dark_gray[1000]};
		}

		/* Handle */

		::-webkit-scrollbar-thumb {
			background-color: ${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[600]
					: p.theme.colors.dark_gray[800]};
			border-radius: 50px;
			border: 3px solid
				${p =>
					p.theme.name == "light"
						? p.theme.colors.light_gray[200]
						: p.theme.colors.dark_gray[1000]};
		}

		/* Handle on Hover */

		::-webkit-scrollbar-thumb:hover {
			background-color: ${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[800]
					: p.theme.colors.dark_gray[600]};
		}
	}

	//header
	.header-register-product {
		display: ${p => (!p.isOpen ? "none" : "")};
		background: yellow;
		padding: 24px 24px 0 24px;
		grid-area: header;
	}

	//main
	.main-register-product {
		display: ${p => (!p.isOpen ? "none" : "")};
		background-color: green;
		padding: 0 24px;
		grid-area: main;

		.divider-register-product {
			display: none;
			margin: 15px 0;
			grid-area: divider;
		}
	}

	//footer
	.footer-register-product {
		display: ${p => (!p.isOpen ? "none" : "")};
        background: red;
		padding: 0 24px 24px 24px;
		grid-area: footer;

		.container-footer-register-product {
			display: flex;
			justify-content: space-between;

			.btn-cancelar-footer-register-product {
				font-size: 16px;
				max-height: 36px;
				padding: 0%;
				color: #e65769;
				background: #ffdee2;
				border-color: #e65769;
			}

			.btn-salvar-footer-register-product {
				font-size: 16px;
				background: #fe8e27;
				border-color: #fe8e27;
				max-height: 36px;
				padding: 0%;
			}
		}
	}
`;

export const BtnRegisterProduct = styled(SSidebarButton)`
	right: ${p => (p.isOpen ? `385px` : `10px`)};
`;

export const CardHeaderHomeEstablishment = styled(
	CardExpansiveEstablishmentFoodOrganism
)`
	max-height: 100px;
	height: 100px;
`;
