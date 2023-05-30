import styled from 'styled-components';
import { SSidebarButton } from '../sidebar-establishment/styles';
import { CardExpansiveEstablishmentFoodOrganism } from '@/components/organisms/card-establishment-food/card-establishment-food-organism';
import { InputNameSignUp } from '@/components/organisms/signup-consumer/inputs/InputNameSignUpConsumer';

export const ContainerRegisterProduct = styled.div<{
	activeRegisterProduct?: boolean;
	isOpen?: boolean;
}>`
	height: 100dvh;
	display: ${p => (p.activeRegisterProduct ? 'block' : 'none')};
	left: ${p => (!p.isOpen ? '100%' : '0')};
	width: ${p => (!p.isOpen ? '0' : '400px')};
	background: ${p =>
		p.theme.name == 'light'
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[1000]};
	border-left: 1px solid
		${p =>
			p.theme.name == 'light'
				? p.theme.colors.light_gray[800]
				: p.theme.colors.dark_gray[1000]};

	position: relative;

	.container-info-register-product {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 0fr 0fr 0fr;

		grid-template-areas: 'header' 'main' 'footer';

		overflow-y: scroll;
		overflow-x: hidden;

		height: 100dvh;

		/* Scrollbar modification */

		::-webkit-scrollbar {
			width: ${p => (!p.isOpen ? '0' : '8px')};
		}

		/* Track */

		::-webkit-scrollbar-track {
			background-color: ${p =>
				p.theme.name == 'light'
					? p.theme.colors.light_gray[200]
					: p.theme.colors.dark_gray[1000]};
		}

		/* Handle */

		::-webkit-scrollbar-thumb {
			background-color: ${p =>
				p.theme.name == 'light'
					? p.theme.colors.light_gray[600]
					: p.theme.colors.dark_gray[800]};
			border-radius: 50px;
			border: 3px solid
				${p =>
					p.theme.name == 'light'
						? p.theme.colors.light_gray[200]
						: p.theme.colors.dark_gray[1000]};
		}

		/* Handle on Hover */

		::-webkit-scrollbar-thumb:hover {
			background-color: ${p =>
				p.theme.name == 'light'
					? p.theme.colors.light_gray[800]
					: p.theme.colors.dark_gray[600]};
		}
	}

	//header
	.header-register-product {
		display: ${p => (!p.isOpen ? 'none' : '')};
		padding: 24px 24px 0 24px;
		grid-area: header;

		> div:nth-last-child(1) {
			> div:nth-child(1) {
				//campo de inserir imagem na aba de cadstrar
				> div:nth-child(1) {
					height: 100%;
					border-radius: 6px;

					> label {
						border: none;
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 0;
						background: ${p =>
							p.theme.name == 'light'
								? p.theme.colors.light_gray[600]
								: p.theme.colors.dark_gray[600]};
						height: 100%;
						width: 94%;
						border-radius: 6px;

						> img {
							width: 100%;
							height: 100%;
							border-radius: 6px;
						}
					}

					> p {
						display: none;
						border: 2px solid blue;
					}
				}
			}

			> div:nth-child(2) {
				> h2 {
					display: -webkit-box;
					overflow: hidden;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					max-width: 200px;
					line-height: normal;
					font-size: 16px;
					font-weight: 600;
				}
			}
			> div:nth-last-child(1) {
				display: none;
			}
		}

		> div {
			background: ${p =>
				p.theme.name == 'light'
					? p.theme.colors.light_gray[400]
					: p.theme.colors.black};
			border-radius: 10px;
			display: grid;

			grid-template-columns: 0.6fr 1fr;

			box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px;

			> div {
				height: 100px !important;
				border-radius: 10px;
				align-self: center;
				grid-gap: 2px;

				padding: 15px 10px 15px 0;

				> div:nth-last-child(1) {
					> div {
						svg {
							cursor: pointer;
							/* filter: invert(69%) sepia(34%) saturate(3661%) hue-rotate(339deg)
								brightness(100%) contrast(102%); */
						}
					}
				}

				img {
					cursor: pointer;
					height: auto;
				}

				h2 {
					color: ${p =>
						p.theme.name == 'light'
							? p.theme.colors.dark_gray[800]
							: p.theme.colors.light_gray[400]};
					font-size: 18px;
				}

				> div:nth-last-child(6) {
					background: blue;
					border: 2px solid blue;
				}

				span {
					display: none;
				}

				@media (max-width: 600px) {
					padding: 0px 10px 15px 10px;
					height: auto !important;
					img {
						height: 200px;
					}
				}
			}

			@media (max-width: 600px) {
				grid-template-columns: 1fr;
			}
		}
	}

	//main
	.main-register-product {
		display: ${p => (!p.isOpen ? 'none' : '')};
		padding: 0 24px;
		grid-area: main;

		.container-categoria-register-product {
			display: flex;
			justify-content: flex-start;
			gap: 10px;
			overflow-x: auto;
			contain: inline-size;

			::-webkit-scrollbar {
				width: 8px;
				height: 8px;
			}

			/* Track */

			::-webkit-scrollbar-track {
				background-color: ${p =>
					p.theme.name == 'light'
						? p.theme.colors.light_gray[200]
						: p.theme.colors.dark_gray[1000]};
			}

			/* Handle */

			::-webkit-scrollbar-thumb {
				background-color: ${p =>
					p.theme.name == 'light'
						? p.theme.colors.light_gray[600]
						: p.theme.colors.dark_gray[800]};
				border-radius: 50px;
				border: 3px solid
					${p =>
						p.theme.name == 'light'
							? p.theme.colors.light_gray[200]
							: p.theme.colors.dark_gray[1000]};
			}

			/* Handle on Hover */

			::-webkit-scrollbar-thumb:hover {
				background-color: ${p =>
					p.theme.name == 'light'
						? p.theme.colors.light_gray[800]
						: p.theme.colors.dark_gray[800]};
			}

			> button {
				margin-bottom: 3px;
				opacity: inherit;
				min-width: max-content;
				min-height: 25px;
				padding: 0 10px;
			}
		}

		.divider-register-product {
			margin: 15px 0;
			grid-area: divider;
		}

		.text-categoria-register-product {
			> h1 {
				margin: 10px 0;
				font-size: 15px;
			}
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
							p.theme.name == 'light'
								? p.theme.colors.dark_gray[1000]
								: p.theme.colors.light_gray[400]};

						label {
							margin: 0 2px;
							color: #e65769;
						}
					}
				}

				div {
					opacity: 100%;
				}
			}

			.container-restricao-register-product {
				margin-top: 25px;
				label {
					font-size: 16px;
					color: ${p =>
						p.theme.name == 'light'
							? p.theme.colors.dark_gray[800]
							: p.theme.colors.light_gray[400]};
				}

				.restricao-register-product {
					display: flex;
					flex-wrap: wrap;
					gap: 10px;
					margin-top: 6px;
					max-height: 135px;
					padding: 10px;
					background: ${p =>
						p.theme.name == 'light'
							? p.theme.colors.light_gray[400]
							: p.theme.colors.dark_gray[600]};
					border-radius: 0.25rem;
					border: ${p =>
						p.theme.name == 'light' ? 'none' : '1px solid rgb(71, 71, 71)'};
					overflow-y: scroll;

					/* Scrollbar modification */

					::-webkit-scrollbar {
						width: 8px;
					}

					/ Track / ::-webkit-scrollbar-track {
						background-color: ${p =>
							p.theme.name == 'light'
								? '#f5f5f5'
								: p.theme.colors.dark_gray[600]};
					}

					/* Handle */

					::-webkit-scrollbar-thumb {
						background-color: ${p =>
							p.theme.name == 'light'
								? p.theme.colors.light_gray[600]
								: p.theme.colors.dark_gray[800]};
						border-radius: 50px;
						border: 3px solid
							${p =>
								p.theme.name == 'light'
									? '#f5f5f5'
									: p.theme.colors.dark_gray[600]};
					}

					/* Handle on Hover */

					::-webkit-scrollbar-thumb:hover {
						background-color: ${p =>
							p.theme.name == 'light'
								? p.theme.colors.light_gray[800]
								: p.theme.colors.dark_gray[400]};
					}
				}
			}
		}
	}

	//footer
	.footer-register-product {
		display: ${p => (!p.isOpen ? 'none' : '')};
		padding: 24px 24px 24px 24px;
		grid-area: footer;

		.container-footer-register-product {
			display: flex;
			justify-content: space-between;
			flex-direction: column-reverse;

			button {
				width: 100%;
				opacity: 100%;
				margin-bottom: 15px;
			}

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
		margin-top: 75px;
		position: inherit;
		width: fit-content;

		.container-info-register-product {
			width: ${p => (!p.isOpen ? '0' : '100dvw')};
		}

		.container-footer-register-product {
			flex-direction: column-reverse;
			button {
				opacity: 100%;
				margin-bottom: 15px;
			}
		}
	}
`;

export const BtnRegisterProduct = styled(SSidebarButton)`
	right: ${p => (p.isOpen ? `385px` : `10px`)};

	@media (max-width: 800px) {
		right: 10px;
		top: 85px;
		position: fixed;
	}
`;

export const CardHeaderHomeEstablishment = styled(
	CardExpansiveEstablishmentFoodOrganism
)`
	max-height: 100px;
	height: 100px;
`;

export const InputNameSignUpHomeEstablishment = styled(InputNameSignUp)``;
