import Layout from "@/components/molecules/sidebar-establishment/layout";
import {
	CardEstablishmentFoodOrganism,
	CardExpansiveEstablishmentFoodOrganism,
} from "@/components/organisms/card-establishment-food/card-establishment-food-organism";
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
						<CardHomeEstablishment />
						<CardHomeEstablishment />
						<CardHomeEstablishment />
						<CardHomeEstablishment />
						<CardHomeEstablishment />
						<CardHomeEstablishment />
						<CardHomeEstablishment />
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

			> div {
				max-width: min-content;
				flex: 1 1 200px;
				margin: 10px;
				background: ${p =>
					p.theme.name == "light"
						? p.theme.colors.light_gray[600]
						: p.theme.colors.light_gray[400]};
				box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px;

				> div {
					gap: 5px;
				}

				img {
					height: 125px;
				}

				h2 {
					font-size: 16px;
					line-height: 20px;
					color: black;
				}
				span {
					line-height: 20px;
					font-size: 12px;
					color: black;
				}

				span:nth-last-child(3) {
					color: ${p => p.theme.colors.light_gray[200]};
				}
				span:nth-last-child(1) {
					margin-left: 10px;
					width: max-content;
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
