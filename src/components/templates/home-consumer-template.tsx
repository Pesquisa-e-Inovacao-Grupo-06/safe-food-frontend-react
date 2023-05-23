import { Product } from "@/app/domain/entities/Product";
import { SelectAtom } from "@/components/atoms/select";
import { Text } from "@/components/atoms/text";
import DropDown, { DropDownProps } from "@/components/molecules/drop-down";
import HeaderConsumer from "@/components/molecules/header-consumer";
import { CardEstablishmentFoodOrganism } from "@/components/organisms/card-establishment-food/card-establishment-food-organism";
import { BodyTemplate } from "@/components/templates/body-template";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../atoms/button/index";
import { Divider } from "@/components/atoms/divider";

export type HomeConsumerProps = {
	products: Product[];
	dropDownList: DropDownProps[];
	onClickApplication(): void;
};

const HomeConsumerTemplate: React.FC<HomeConsumerProps> = ({
	products,
	dropDownList,
	onClickApplication,
}) => {
	const [formCard, setFormcard] = useState<boolean>(false);
	const [termAccepted, setTermAccepted] = useState(false);

	var count = 0;

	products.forEach(() => {
		count++;
	});

	const [isDropDown, setDropDown] = useState(false);

	return (
		<>
			<HeaderConsumer />
			<BodyTemplate footer={true}>
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
						<div className="container-main-aside-filter-home-consumer">
							{dropDownList.map(dropDownItem => {
								return (
									<DropDown
										titleDropDown={dropDownItem.titleDropDown}
										activeCheckBox={dropDownItem.activeCheckBox}
										alignTitleText={dropDownItem.alignTitleText}
										alignSubText={dropDownItem.alignSubText}
										textSubMenuWithCheckBox={dropDownItem.textSubMenuWithCheckBox}
										checkList={dropDownItem.checkList}
										onCheckboxChainChange={dropDownItem.onCheckboxChainChange}
									/>
								);
							})}
						</div>
						<Divider marginAll="10px" />
						<Button onClick={onClickApplication}>Aplicar</Button>
					</div>
					<div className="main-home-consumer">
						<div className="container-main-home-consumer">
							{products.map(item => (
								<Link to={`/product-consumer/${item.params.id}`}>
									<CardProductHomeConsumer isActive={formCard}>
										<CardEstablishmentFoodOrganism product={item} />
									</CardProductHomeConsumer>
								</Link>
							))}
						</div>
					</div>
					<div className="footer-home-consumer"></div>
				</ContainerHomeConsumer>
			</BodyTemplate>
		</>
	);
};

export default HomeConsumerTemplate;

//Para a input select, porém não está funcionando
const teste = ["Todos", "Todos", "Todos"];

//itens sub-menu
const submenu = ["Vegano", "Glúten", "Vegano", "Glúten", "Glúten", "Glúten"];

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
			gap: ${p => (p.isActive ? "0px" : "10px")};

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

				/* border: ${p => (p.isActive ? "0.1px" : "0px")} solid
					${p =>
					p.theme.name == "light"
						? p.theme.colors.light_gray[600]
						: p.theme.colors.dark_gray[800]}; */
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
	margin-top: 120px;

	grid-template-areas:
		"asideHeader header"
		"aside main";

	grid-column-gap: 30px;

	//header
	.header-home-consumer {
		grid-area: header;

		.container-header-home-consumer {
			display: flex;
			height: 100%;
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
				display: grid;
				grid-template-columns: 1fr 1fr 0.5fr;
				column-gap: 15px;

				> li {
					display: flex;
					align-items: center;
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

		.container-main-aside-filter-home-consumer {
			border-radius: 8px;
			padding: 1px 15px 15px 15px;
			background: ${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[200]
					: p.theme.colors.dark_gray[1000]};
			box-shadow: rgba(0, 0, 0, 0.133) 0px 4px 12px 2px;

			> li {
				transition: all 0.4s ease;
			}

			//aba filter
			.dropdown-filter-aside {
				user-select: none;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10px;

				> p:nth-child(1) {
					font-weight: 600;
				}

				> svg {
					cursor: pointer;
					fill: ${p => p.theme.colors.primary[600]};
				}
			}
		}
	}

	//main
	.main-home-consumer {
		grid-area: main;
		padding: 10px 0;

		.container-main-home-consumer {
			padding: 10px 0;
			display: grid;
			grid-template-columns: ${p =>
				p.isFormCardActive ? "1fr" : "repeat(auto-fit , minmax(225px, 1fr))"};
			gap: 20px;
		}
	}

	//footer
	.footer-home-consumer {
		height: 100%;
		grid-column: 2 / 3;
		grid-row: 3;
	}

	@media (max-width: 770px) {
		margin-top: 100px;
		grid-template-columns: 1fr;
		grid-template-rows: 0fr 0fr 0fr 0fr 0fr;
		grid-template-areas:
			"asideHeader"
			"aside"
			"header"
			"main"
			"footer";

		.footer-home-consumer {
			grid-column: 1;
			grid-row: 5;
		}

		.container-main-aside-filter-home-consumer {
			margin-bottom: 30px;
		}

		.header-home-consumer {
			.container-header-home-consumer {
				flex-direction: column;

				border-top: 1px solid
					${p =>
						p.theme.name == "light"
							? p.theme.colors.light_gray[800]
							: p.theme.colors.dark_gray[400]};

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
