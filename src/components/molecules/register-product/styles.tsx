import { Box } from "@/components/atoms/box";
import styled from "styled-components";
import { SSidebarButton } from "../sidebar-establishment/styles";
import { CardExpansiveEstablishmentFoodOrganism } from "@/components/organisms/card-establishment-food/card-establishment-food-organism";
import { InputNameSignUp } from "@/components/organisms/signup-consumer/inputs/InputNameSignUpConsumer";

export const ContainerRegisterProduct = styled.div<{
	isOpen: boolean;
}>`
	left: ${p => (!p.isOpen ? "100%" : "0")};
	width: ${p => (!p.isOpen ? "fit-content" : "400px")};
	background: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[1000]};

	transition: 0.2s ease-out;

	position: relative;

	.container-info-register-product {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 0fr 0fr 0fr;

		grid-template-areas: "header" "main" "footer";

		overflow-y: scroll;
		overflow-x: hidden;

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
		padding: 24px 24px 0 24px;
		grid-area: header;

		> div {
			height: 99px;

			background: ${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[400]
					: p.theme.colors.black};
			border-radius: 10px;
			display: grid;

			grid-template-columns: 1fr 2.5fr;

			box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px;

			> div {
				border-radius: 10px;
				align-self: center;
				grid-gap: 2px;

				padding-bottom: 25px;

				> div:nth-last-child(1) {
					> div {
						svg {
							cursor: pointer;
							filter: invert(69%) sepia(34%) saturate(3661%) hue-rotate(339deg)
								brightness(100%) contrast(102%);
						}
					}
				}

				img {
					cursor: pointer;
					height: auto;
				}

				h2 {
					color: ${p => p.theme.name == "light" ? p.theme.colors.dark_gray[800] : p.theme.colors.light_gray[400]};
					font-size: 18px;
				}

				span {
					display: none;
				}
			}
		}
	}

	//main
	.main-register-product {
		display: ${p => (!p.isOpen ? "none" : "")};
		padding: 0 24px;
		grid-area: main;

		.divider-register-product {
			margin: 15px 0;
			grid-area: divider;
		}

		.container-main-register-product {
			ul {
				margin-top: 10px;
				list-style: none;
				li {
					display: flex;
					flex-direction: column;
					gap: 3px;

					> div {
						label {
							display: none;
						}
					}

					span {
						color: ${p =>
							p.theme.name == "light"
								? p.theme.colors.dark_gray[1000]
								: p.theme.colors.light_gray[400]};

						label {
							margin: 0 2px;
							color: #e65769;
						}
					}
				}

				.input-descricao-home-establishment {
					> div {
						> div {
							height: 100px;
						}
					}
				}
			}

			.container-restricao-register-product {
				margin-top: 25px;
				label {
					font-size: 16px;
					color: ${p =>
						p.theme.name == "light"
							? p.theme.colors.dark_gray[800]
							: p.theme.colors.light_gray[400]};
				}

				.restricao-register-product {
					display: flex;
					flex-wrap: wrap;
					gap: 10px;
					margin-top: 6px;
					max-height: 200px;
					padding: 10px;
					background: ${p =>
						p.theme.name == "light" ? p.theme.colors.light_gray[400] : p.theme.colors.dark_gray[600]};
					border-radius: 0.25rem;
					border: ${p =>
						p.theme.name == "light" ? "none" : "1px solid rgb(71, 71, 71)"};
					overflow-y: scroll;

					/* Scrollbar modification */

					::-webkit-scrollbar {
						width: 8px;
					}

					/ Track / ::-webkit-scrollbar-track {
						background-color: ${p =>
							p.theme.name == "light" ? "#f5f5f5" : p.theme.colors.dark_gray[600]};
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
								p.theme.name == "light" ? "#f5f5f5" : p.theme.colors.dark_gray[600]};
					}

					/* Handle on Hover */

					::-webkit-scrollbar-thumb:hover {
						background-color: ${p =>
							p.theme.name == "light"
								? p.theme.colors.light_gray[800]
								: p.theme.colors.dark_gray[400]};
					}
				}
			}
		}
	}

	//footer
	.footer-register-product {
		display: ${p => (!p.isOpen ? "none" : "")};
		padding: 24px 24px 24px 24px;
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

	@media (max-width: 800px) {
		display: none;
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

export const InputNameSignUpHomeEstablishment = styled(InputNameSignUp)``;
