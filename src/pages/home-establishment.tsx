import Layout from "@/components/molecules/sidebar-establishment/layout";
import { CardEstablishmentFoodOrganism } from "@/components/organisms/card-establishment-food/card-establishment-food-organism";
import { useState } from "react";
import styled from "styled-components";
import { Box } from "@/components/atoms/box";
import { Text } from "@/components/atoms/text";
import imgTeste from "../assets/food-favorite.png";
import { StyledButton } from "@/components/atoms/button/styles";
import { Cache } from "@/app/domain/protocols/Cache";

type HomeEstablishmentProps = {
	cache: Cache;
};

function HomeEstablishment({ cache }: HomeEstablishmentProps) {
	const [modalRegister, setModalRegister] = useState(false);

	function toggleModalResgiter() {
		setModalRegister(!modalRegister);
	}

	return (
		<Layout
			active={modalRegister}
			toggle={toggleModalResgiter}
			activeRegisterProduct={true}
			paddingMain={true}
			cache={cache}
		>
			<ContainerHomeEstablishment>
				<div className="header-home-establishment">
					<Box className="container-home-establishment">
						<Text className="text-intro">
							<h1>Seja Bem-Vindo, Açougue Vegano</h1>
							<label>Sexta-feira, 11 Mar 2023</label>
						</Text>
						<Box className="container-banner-home-establishment">
							<Box className="banner-info-home-establishment">
								<img src={imgTeste} />
								<div>
									<h1>Safe Food</h1>
									<label>Gerencie seus produtos</label>
								</div>
							</Box>
							<StyledButton
								onClick={toggleModalResgiter}
								buttonStyle="filled"
							>
								ADICIONAR
							</StyledButton>
						</Box>
						<Text className="text-categoria-home-establishment">
							<h1>Categoria</h1>
						</Text>
						<Box className="container-categoria-home-establishment">
							{categoria.map((r, i) => (
								<StyledButton
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									style={{
										fontSize: "16px",
										maxHeight: "32px",
										width: "fit-content",
										maxWidth: "50px",
									}}
									key={r + i}
								>
									{r}
								</StyledButton>
							))}
						</Box>
					</Box>
				</div>
				<div className="main-home-establishment">
					<div className="container-main-home-establishment">
						{/* <CardHomeEstablishment />
						<CardHomeEstablishment />
						<CardHomeEstablishment />
						<CardHomeEstablishment />
						<CardHomeEstablishment />
						<CardHomeEstablishment />
						<CardHomeEstablishment /> */}
					</div>
				</div>
				<div className="footer-home-establishment"></div>
			</ContainerHomeEstablishment>
		</Layout>
	);
}

export default HomeEstablishment;

const categoria = [
	"Todos",
	"Todos",
	"Todos",
	"Todos",
	"Todos",
	"Todos",
	"Todos",
];

const ContainerHomeEstablishment = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0fr 0fr 10dvh;

	grid-template-areas: "header" "main" "footer";

	//header
	.header-home-establishment {
		padding: 24px 24px 0 24px;
		grid-area: header;

		.text-intro {
			line-height: 80%;
			h1 {
				font-size: 15px;
				color: ${p =>
					p.theme.name == "light"
						? p.theme.colors.dark_gray[600]
						: p.theme.colors.light_gray[400]};
			}

			label {
				font-size: 12px;
				color: ${p =>
					p.theme.name == "light"
						? p.theme.colors.dark_gray[200]
						: p.theme.colors.light_gray[600]};
			}
		}

		.container-banner-home-establishment {
			display: flex;
			flex-wrap: wrap;
			margin: 20px 0 0 0;
			padding: 13px 28px;
			justify-content: space-between;
			border-radius: 8px;
			background: ${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[400]
					: p.theme.colors.black};
			box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px;

			gap: 15px;

			.banner-info-home-establishment {
				display: flex;
				justify-content: flex-start;
				width: fit-content;
				align-items: center;
				gap: 10px;

				img {
					height: 60px;
					width: 60px;
					border-radius: 50px;
				}

				h1 {
					font-size: 15px;
					color: ${p =>
						p.theme.name == "light"
							? p.theme.colors.dark_gray[600]
							: p.theme.colors.light_gray[400]};
				}

				label {
					font-size: 13px;
					color: ${p =>
						p.theme.name == "light"
							? p.theme.colors.dark_gray[400]
							: p.theme.colors.light_gray[600]};
				}
			}

			button {
				padding: 0;
				height: 30px;
				width: 100px;
				min-width: 100px;
				min-height: 30px;
				font-size: 12px;
				place-self: end;
				opacity: inherit;
			}
		}

		@media (max-width: 600px) {
			.container-banner-home-establishment {
				button {
					width: 100%;
				}
			}
		}

		.text-categoria-home-establishment {
			> h1 {
				margin: 16px 0;
				font-size: 15px;
			}
		}

		.container-categoria-home-establishment {
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
					p.theme.name == "light"
						? p.theme.colors.light_gray[200]
						: p.theme.colors.dark_gray[600]};
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
							: p.theme.colors.dark_gray[600]};
			}

			/* Handle on Hover */

			::-webkit-scrollbar-thumb:hover {
				background-color: ${p =>
					p.theme.name == "light"
						? p.theme.colors.light_gray[800]
						: p.theme.colors.black};
			}

			> button {
				margin-bottom: 3px;
				opacity: inherit;
				min-width: 80px;
				min-height: 25px;
				padding: 3px;
			}
		}
	}

	//main
	.main-home-establishment {
		grid-area: main;
		padding: 24px;

		.container-main-home-establishment {
			display: flex;
			flex-wrap: wrap;
			max-width: fit-content;
			margin: 0 auto;
			align-items: center;

			> div {
				max-width: min-content;
				flex: 1 1 200px;
				margin: 10px;
				background: ${p =>
					p.theme.name == "light"
						? p.theme.colors.light_gray[400]
						: p.theme.colors.black};
				box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px;

				color: ${p =>
					p.theme.name == "light"
						? p.theme.colors.dark_gray[800]
						: p.theme.colors.light_gray[600]};
				> div {
					gap: 15px;
				}

				img {
					height: 125px;
				}

				h2 {
					font-size: 16px;
					line-height: 20px;
				}
				span:nth-last-child(4) {
					line-height: 16px;
					font-size: 12px;
				}

				span:nth-last-child(3) {
					line-height: 25px;
					font-size: 16px;
				}

				span:nth-last-child(3) {
					color: ${p => p.theme.colors.light_gray[200]};
				}

				> div {
					> div:nth-last-child(2) {
						height: 1px;
						background: ${p =>
							p.theme.name == "light"
								? p.theme.colors.light_gray[600]
								: p.theme.colors.dark_gray[600]};
					}
				}

				span:nth-last-child(1) {
					margin-left: 10px;
					line-height: 16px;
					font-size: 12px;
					width: max-content;
				}

				@media screen and (max-width: 600px) {
					width: auto;
					max-width: fit-content;
					margin: 15px 10px;

					img {
						min-height: 200px;
					}
				}

				@media screen and (max-width: 480px) {
					margin: 15px 0px;
				}
			}

			@media (max-width: 1100px) {
				justify-content: center;
			}
		}
	}

	//footer
	.footer-home-establishment {
		padding: 0 24px 24px 24px;
		grid-area: footer;
	}
`;

const CardHomeEstablishment = styled(CardEstablishmentFoodOrganism)``;
