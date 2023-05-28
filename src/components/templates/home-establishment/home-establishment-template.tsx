import Layout from "@/components/molecules/sidebar-establishment/layout";
import { CardEstablishmentFoodOrganism } from "@/components/organisms/card-establishment-food/card-establishment-food-organism";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Box } from "@/components/atoms/box";
import { Text } from "@/components/atoms/text";
import imgTeste from "../../../assets/food-favorite.png";
import { StyledButton } from "@/components/atoms/button/styles";
import { Cache } from "@/app/domain/protocols/Cache";
import { Restriction } from "@/app/domain/entities/Restriction";
import { Product } from "@/app/domain/entities/Product";
import { TypeProduct } from "@/app/domain/entities/TypeProduct";
import { SafeFoodLoginResponse, SafeFoodUsuarioModel } from "@/app/infra/gateway/safefood/models/SafeFoodUser";
import { SafeFoodCreateProductRequest } from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { SafeFoodProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper";

type HomeEstablishmentProps = {
	products: Product[];
	productRestriction: Restriction[];
	typeProduct: TypeProduct[];
	cache: Cache;
	user: SafeFoodUsuarioModel;
	productGateway: SafeFoodProductGateway;
	onClickCreate(data: SafeFoodCreateProductRequest): void;
	onClickUpdate(id: string, data: SafeFoodCreateProductRequest): void;
	onClickDelete(id: string): void;
	renderListProduct(): void;
};

function HomeEstablishmentTemplate({
	products,
	productRestriction,
	typeProduct,
	cache,
	user,
	productGateway,
	onClickCreate,
	onClickUpdate,
	onClickDelete,
	renderListProduct,
}: HomeEstablishmentProps) {
	const [modalRegister, setModalRegister] = useState(false);
	const [type, setType] = useState("");
	const [filterData, setFilterData] = useState<Product[]>([]);
	const [objEdit, setObjEdit] = useState<Product>();
	const [auxObjEdit, setAuxObjEdit] = useState<boolean>(false);
	const [auxBtnAdd, setAuxBtnAdd] = useState<boolean>(false);

	const setObj = (item: Product) => {
		setObjEdit(item);
		setModalRegister(true);
		setAuxObjEdit(!auxObjEdit);
	};

	useEffect(() => {
		setFilterData(products);
	}, [products]);

	const handleFilter = (typeProduct: string) => {
		const filterType = typeProduct;
		setType(filterType);
	};

	useEffect(() => {
		const newFilter = products.filter(item => {
			return item.params.categoria?.nome
				?.toLowerCase()
				.includes(type.toLowerCase());
		});

		if (type == "") {
			setFilterData(products);
		} else {
			setFilterData(newFilter);
		}
	}, [type]);

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
			productRestrictions={productRestriction}
			typeProduct={typeProduct}
			onClickCreate={onClickCreate}
			onClickUpdate={onClickUpdate}
			onClickDelete={onClickDelete}
			productEdit={objEdit}
			auxObjEdit={auxObjEdit}
			user={user}
			btnAdd={auxBtnAdd}
			renderListProduct={renderListProduct} typeUser={user.tipoUsuario}		>
			<ContainerHomeEstablishment>
				<div className="header-home-establishment">
					<Box className="container-home-establishment">
						<Text className="text-intro">
							<h1>Seja Bem-Vindo, {user.nome}</h1>
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
								onClick={() => {
									setModalRegister(true);
									setAuxBtnAdd(!auxBtnAdd);
								}}
								buttonStyle="filled"
							>
								ADICIONAR
							</StyledButton>
						</Box>
						<Text className="text-categoria-home-establishment">
							<h1>Categoria</h1>
						</Text>
						<Box className="container-categoria-home-establishment">
							<StyledButton
								onClick={() => handleFilter("")}
								height="fit-content"
								width="fit-content"
								buttonStyle="filled"
								style={{
									fontSize: "16px",
									maxHeight: "32px",
									width: "fit-content",
									maxWidth: "50px",
								}}
							>
								Todos
							</StyledButton>
							{typeProduct?.map(item => (
								<StyledButton
									onClick={() =>
										item.nome == undefined
											? handleFilter("")
											: handleFilter(item.nome)
									}
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									style={{
										fontSize: "16px",
										maxHeight: "32px",
										width: "fit-content",
										maxWidth: "50px",
									}}
									key={item.id}
								>
									{item.nome}
								</StyledButton>
							))}
						</Box>
					</Box>
				</div>
				<div className="main-home-establishment">
					<div className="container-main-home-establishment">
						{filterData.map(item => (
							<CardHomeEstablishment
								isActive={false}
								key={item.params.id}
							>
								<CardEstablishmentFoodOrganism
									product={item}
									activeEdit
									getInfoProduct={() => setObj(item)}
								/>
							</CardHomeEstablishment>
						))}
					</div>
				</div>
				<div className="footer-home-establishment"></div>
			</ContainerHomeEstablishment>
		</Layout>
	);
}

export default HomeEstablishmentTemplate;

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
			/* justify-content: center; */
			gap: 5px;

			> div {
				min-width: 225px;
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
					gap: 0px;
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

				> div:nth-child(1) {
					> div:nth-child(2) {
						width: 100%;
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

				@media (max-width: 570px) {
					min-width: 100%;
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

const CardHomeEstablishment = styled.div<{
	isActive?: boolean;
}>`
	height: ${p => (p.isActive ? "11.5625rem" : "")};
	border-radius: 5px;
	> div {
		background: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[1000]};
		width: auto;
		display: ${p => (p.isActive ? "grid" : "")};
		grid-template-columns: ${p => (p.isActive ? "0.3fr 1fr" : "")};
		border-radius: 4px;

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
