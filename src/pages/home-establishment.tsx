import Layout from "@/components/molecules/sidebar-establishment/layout";
import { CardEstablishmentFoodOrganism, CardExpansiveEstablishmentFoodOrganism } from "@/components/organisms/card-establishment-food/card-establishment-food-organism";
import React from "react";
import styled from "styled-components";
import imgFood from "../assets/food-favorite.png";

function HomeEstablishment() {
	return (
		<Layout>
			<ContainerHomeEstablishment>
				<div className="header-home-establishment"></div>
				<div className="main-home-establishment">
					<div className="container-main-home-establishment">
						<div>
							<img src={imgFood} />
							<div className="info-product">
								<p>Name Food</p>
								<span>
									Aproveite todo o sabor de um clássico hambúrguer sem sacrificar seus
									princípios veganos com o nosso revolucionário Hambúrguer 2.0 Vegan.
									Feito com ingredientes de origem vegetal de alta qualidade, este
									hambúrguer é uma deliciosa opção para quem busca uma alimentação mais
									saudável e sustentável. Com sua textura suculenta e sabor inigualável,
									é perfeito para qualquer refeição, desde um lanche rápido até um jantar
									sofisticado. Experimente agora e descubra o futuro do hambúrguer
									vegano!
								</span>
							</div>
						</div>
						<div>
							<img src={imgFood} />
							<div className="info-product">
								<p>Name Food</p>
								<span>
									Aproveite todo o sabor de um clássico hambúrguer sem sacrificar seus
									princípios veganos com o nosso revolucionário Hambúrguer 2.0 Vegan.
									Feito com ingredientes de origem vegetal de alta qualidade, este
									hambúrguer é uma deliciosa opção para quem busca uma alimentação mais
									saudável e sustentável. Com sua textura suculenta e sabor inigualável,
									é perfeito para qualquer refeição, desde um lanche rápido até um jantar
									sofisticado. Experimente agora e descubra o futuro do hambúrguer
									vegano!
								</span>
							</div>
						</div>
						<div>
							<img src={imgFood} />
							<div className="info-product">
								<p>Name Food</p>
								<span>
									Aproveite todo o sabor de um clássico hambúrguer sem sacrificar seus
									princípios veganos com o nosso revolucionário Hambúrguer 2.0 Vegan.
									Feito com ingredientes de origem vegetal de alta qualidade, este
									hambúrguer é uma deliciosa opção para quem busca uma alimentação mais
									saudável e sustentável. Com sua textura suculenta e sabor inigualável,
									é perfeito para qualquer refeição, desde um lanche rápido até um jantar
									sofisticado. Experimente agora e descubra o futuro do hambúrguer
									vegano!
								</span>
							</div>
						</div>
						<div>
							<img src={imgFood} />
							<div className="info-product">
								<p>Name Food</p>
								<span>
									Aproveite todo o sabor de um clássico hambúrguer sem sacrificar seus
									princípios veganos com o nosso revolucionário Hambúrguer 2.0 Vegan.
									Feito com ingredientes de origem vegetal de alta qualidade, este
									hambúrguer é uma deliciosa opção para quem busca uma alimentação mais
									saudável e sustentável. Com sua textura suculenta e sabor inigualável,
									é perfeito para qualquer refeição, desde um lanche rápido até um jantar
									sofisticado. Experimente agora e descubra o futuro do hambúrguer
									vegano!
								</span>
							</div>
						</div>
						<div>
							<img src={imgFood} />
							<div className="info-product">
								<p>Name Food</p>
								<span>
									Aproveite todo o sabor de um clássico hambúrguer sem sacrificar seus
									princípios veganos com o nosso revolucionário Hambúrguer 2.0 Vegan.
									Feito com ingredientes de origem vegetal de alta qualidade, este
									hambúrguer é uma deliciosa opção para quem busca uma alimentação mais
									saudável e sustentável. Com sua textura suculenta e sabor inigualável,
									é perfeito para qualquer refeição, desde um lanche rápido até um jantar
									sofisticado. Experimente agora e descubra o futuro do hambúrguer
									vegano!
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-home-establishment"></div>
			</ContainerHomeEstablishment>
		</Layout>
	);
}

export default HomeEstablishment;

const ContainerHomeEstablishment = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 20dvh 0fr 10dvh;

	grid-template-areas: "header" "main" "footer";

	//header
	.header-home-establishment {
		background: yellow;
		padding: 24px 24px 0 24px;
		grid-area: header;
	}

	//main
	.main-home-establishment {
		background: green;
		grid-area: main;
		padding: 24px;

		.container-main-home-establishment {
			display: flex;
			flex-wrap: wrap;
			max-width: fit-content;
			margin: 0 auto;
			align-items: center;

			img {
				max-width: 200px;
				max-height: 145px;
			}
			> div {
				max-width: min-content;
				flex: 1 1 200px;
				margin: 10px;
				background: gray;
				border-radius: 8px;

				.info-product {
					padding: 10px;
				}
			}

			@media (max-width: 900px) {
				justify-content: center;
			}
		}
	}

	//footer
	.footer-home-establishment {
		background-color: red;
		padding: 0 24px 24px 24px;
		grid-area: footer;
	}
`;

const CardHomeEstablishment = styled(CardEstablishmentFoodOrganism)``;
const CardHeaderHomeEstablishment = styled(CardExpansiveEstablishmentFoodOrganism)``;
