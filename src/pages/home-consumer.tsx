import { SelectAtom } from "@/components/atoms/select";
import { Text } from "@/components/atoms/text";
import Header from "@/components/molecules/header";
import { CardEstablishmentFoodOrganism } from "@/components/organisms/card-establishment-food/card-establishment-food-organism";
import { BodyTemplate } from "@/components/templates/body-template";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeConsumer: React.FC = () => {
	const [formCard, setFormcard] = useState<boolean>(false);

	const products = [
		{
			product: (
				<CardProductHomeConsumer isActive={formCard}>
					<CardEstablishmentFoodOrganism />
				</CardProductHomeConsumer>
			),
		},
		{
			product: (
				<CardProductHomeConsumer isActive={formCard}>
					<CardEstablishmentFoodOrganism />
				</CardProductHomeConsumer>
			),
		},
		{
			product: (
				<CardProductHomeConsumer isActive={formCard}>
					<CardEstablishmentFoodOrganism />
				</CardProductHomeConsumer>
			),
		},
		{
			product: (
				<CardProductHomeConsumer isActive={formCard}>
					<CardEstablishmentFoodOrganism />
				</CardProductHomeConsumer>
			),
		},
		{
			product: (
				<CardProductHomeConsumer isActive={formCard}>
					<CardEstablishmentFoodOrganism />
				</CardProductHomeConsumer>
			),
		},
		{
			product: (
				<CardProductHomeConsumer isActive={formCard}>
					<CardEstablishmentFoodOrganism />
				</CardProductHomeConsumer>
			),
		},
		{
			product: (
				<CardProductHomeConsumer isActive={formCard}>
					<CardEstablishmentFoodOrganism />
				</CardProductHomeConsumer>
			),
		},
		{
			product: (
				<CardProductHomeConsumer isActive={formCard}>
					<CardEstablishmentFoodOrganism />
				</CardProductHomeConsumer>
			),
		},
	];

	var count = 0;

	products.forEach(() => {
		count++;
	});

	return (
		<>
			<Header />
			<BodyTemplate footer>
				<ContainerHomeConsumer isFormCardActive={formCard}>
					<div className="header-home-consumer">
						<div className="container-header-home-consumer">
							<ul>
								<li>
									<Text>Ordenar:</Text>
									<SelectAtom options={teste} />
								</li>
								<li>
									<Text>Exibir:</Text>
									<SelectAtom options={teste} />
								</li>
								<li>
									<Text>{count} produtos</Text>
								</li>
							</ul>
							<div className="container-icon-header-home-consumer">
								<Text>{count} produtos</Text>
								<div className="box-icon-header-home-consumer">
									<FaBars onClick={() => setFormcard(true)} />
									<RxDashboard onClick={() => setFormcard(false)} />
								</div>
							</div>
						</div>
					</div>
					<div className="header-aside-filter-home-consumer">
						<Subtitle>Filtrar por:</Subtitle>
					</div>
					<div className="main-aside-filter-home-consumer">
						<div className="container-main-aside-filter-home-consumer"></div>
					</div>
					<div className="main-home-consumer">
						<div className="container-main-home-consumer">
							{products.map(({ product }) => product)}
						</div>
					</div>
					<div className="footer-home-consumer"></div>
				</ContainerHomeConsumer>
			</BodyTemplate>
		</>
	);
};

export default HomeConsumer;

const teste = ["Todos", "Todos", "Todos"];

const CardProductHomeConsumer = styled.div<{
	isActive?: boolean;
}>`
	height: ${p => (p.isActive ? "11.5625rem" : "")};
	> div {
		cursor: pointer;
		background: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[200]
				: p.theme.colors.dark_gray[1000]};
		width: auto;
		display: ${p => (p.isActive ? "grid" : "")};
		grid-template-columns: ${p => (p.isActive ? "0.3fr 1fr" : "")};

		> div {
			height: ${p => (p.isActive ? "11.5625rem" : "")};

			> img {
				max-height: ${p => (p.isActive ? "max-content" : "150px")} !important;
			}
		}

		> div:nth-child(2) {
			padding: 15px;
			margin: 0px !important;
			gap: ${p => (p.isActive ? "5px" : "10px")};

			> h2 {
				font-size: 14px;
				line-height: normal;
			}

			> p:nth-child(2) {
				${p => (p.isActive ? `--max-lines: 5;` : `--max-lines: 3;`)};

				display: -webkit-box;
				overflow: hidden;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: var(--max-lines);

				font-size: 10px;
				line-height: normal;
			}

			> p:nth-child(3) {
				height: ${p => (p.isActive ? "auto" : "")};
				padding: ${p => (p.isActive ? "0" : "0 3%")};
				line-height: normal;
				font-weight: 600;
				font-size: 14px;
				color: #177f14;
				background: none;
			}

			> div:nth-child(4) {
				background: ${p =>
					p.theme.name == "light"
						? p.theme.colors.light_gray[600]
						: p.theme.colors.dark_gray[800]};

				border: ${p => (p.isActive ? "0.1px" : "0px")} solid
					${p =>
						p.theme.name == "light"
							? p.theme.colors.light_gray[600]
							: p.theme.colors.dark_gray[800]};
			}

			> div:nth-child(5) {
				> p {
					font-size: 10px;
				}

				> section {
					> div {
						> svg {
							height: 13px;
							width: 13px;
						}
					}
				}
			}
		}

		@media (max-width: 1000px) {
			grid-template-columns: ${p => (p.isActive ? "0.8fr 1fr" : "")};
		}

		@media (max-width: 300px) {
			grid-template-columns: ${p => (p.isActive ? "1fr 1fr" : "")};
		}
	}
`;

const ContainerHomeConsumer = styled.div<{
	isFormCardActive: boolean;
}>`
	display: grid;
	grid-template-columns: 0.3fr 1fr;
	grid-template-rows: 0fr 1fr 0.1fr;
	margin-top: 125px;

	grid-template-areas:
		"asideHeader header"
		"aside main";

	grid-column-gap: 30px;

	/* background: red; */

	//header
	.header-home-consumer {
		grid-area: header;

		.container-header-home-consumer {
			display: flex;
			height: 100%;
			background: blue;
			padding: 10px 0 15px 0;
			gap: 15px;
			border-bottom: 1px solid
				${p =>
					p.theme.name == "light"
						? p.theme.colors.light_gray[800]
						: p.theme.colors.dark_gray[400]};

			> ul {
				width: 100%;
				list-style: none;
				/* background: red; */
				display: grid;
				grid-template-columns: 1fr 1fr 0.5fr;
				column-gap: 15px;

				> li {
					display: flex;
					align-items: center;
					/* background: green; */
					column-gap: 10px;

					> div {
						width: 100%;
						min-width: 100px;
					}
				}

				> li:nth-child(3) {
					justify-content: center;
					> p {
						width: max-content;
					}
				}
			}

			.container-icon-header-home-consumer {
				display: flex;
				align-items: center;

				> p {
					display: none;
				}
				.box-icon-header-home-consumer {
					/* background: pink; */
					display: flex;
					align-items: center;
					gap: 10px;

					> svg {
						cursor: pointer;
					}

					> svg:nth-child(2) {
						fill: ${p => (!p.isFormCardActive ? p.theme.colors.primary[600] : "")};
					}

					> svg:nth-child(1) {
						fill: ${p => (p.isFormCardActive ? p.theme.colors.primary[600] : "")};
					}
				}
			}
		}
	}

	//aside header
	.header-aside-filter-home-consumer {
		grid-area: asideHeader;
		background: green;
		display: flex;
		align-items: center;

		> h2 {
			font-size: 24px;
			color: ${p => p.theme.colors.primary[600]};
		}
	}

	//aside main
	.main-aside-filter-home-consumer {
		grid-area: aside;
		/* padding: 0 0 0 5px; */

		.container-main-aside-filter-home-consumer {
			height: 100%;
			border-radius: 8px;
			background: ${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[200]
					: p.theme.colors.dark_gray[1000]};
			box-shadow: rgba(0, 0, 0, 0.133) 0px 4px 12px 2px;
		}
	}

	//main
	.main-home-consumer {
		background: purple;
		grid-area: main;
		padding: 10px 0;

		.container-main-home-consumer {
			/* background: black; */
			padding: 10px 0;
			display: grid;
			grid-template-columns: ${p =>
				p.isFormCardActive ? "1fr" : "repeat(auto-fit , minmax(225px, 1fr))"};
			gap: 20px;
		}
	}

	//footer
	.footer-home-consumer {
		background: yellow;
		grid-column: 2 / 3;
		grid-row: 3;
	}

	@media (max-width: 770px) {
		grid-template-columns: 1fr;
		grid-template-areas:
			"header"
			"main"
			"footer";

		.main-aside-filter-home-consumer,
		.header-aside-filter-home-consumer {
			display: none;
		}

		.footer-home-consumer {
			background: gray;
			grid-column: 1;
			grid-row: 3;
		}
	}

	@media (max-width: 600px) {
		.header-home-consumer {
			.container-header-home-consumer {
				flex-direction: column;
				> ul {
					grid-template-columns: 1fr;
					gap: 10px;

					> li {
						flex-direction: column;
						align-items: flex-start;
					}

					> li:nth-child(3) {
						display: none;
					}
				}

				.container-icon-header-home-consumer {
					justify-content: space-between;
					> p {
						display: block;
					}
				}
			}
		}
	}
`;
