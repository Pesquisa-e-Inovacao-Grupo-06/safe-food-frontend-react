import Header from "@/components/molecules/header";
import { BodyTemplate } from "@/components/templates/body-template";
import styled from "styled-components";
import {
	StyledColumn,
	StyledCost,
	StyledRow,
} from "@/components/organisms/card-establishment-food/card-establishment-food-organism";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Text } from "@/components/atoms/text";
import { AvaliationStars } from "@/components/molecules/avaliation-stars";
import { Box } from "@/components/atoms/box";
import { MdLocationOn, MdPhoneEnabled } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import imgTeste from "../../assets/food-favorite.png";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { FaMapMarkedAlt } from "react-icons/fa";
import ProgressBar from "@/components/molecules/progress-bar";
import { StyledButton } from "@/components/atoms/button/styles";
import TextArea from "@/components/atoms/textarea";
import BoxComment, { CommentProps } from "@/components/molecules/box-coment";
import { AvaliationProgressBar } from "../molecules/avaliation-progress-bar";

interface ProductParams {
	imageUrl?: string;
	productName?: string;
	productDescription?: string;
	averageRating?: number;
	totalRatings?: number;
	category?: string[];
	price?: number;
	address?: string;
	waitTime?: string;
	operationHours?: string;
	phone?: string;
	storeImage?: string;
	storeName?: string;
	storeProducts?: number;
	listOfComments?: CommentProps[];
}

export const ProductConsumerTemplate: React.FC<ProductParams> = ({
	imageUrl = "https://via.placeholder.com/400",
	productName = "Hamburger",
	productDescription = "Delicious hamburger made with high quality ingredients.",
	averageRating = 4.5,
	totalRatings = 100,
	category = ["Fast Food", "Burgers"],
	price = 9.99,
	address = "123 Main Street",
	waitTime = "10-15 minutes",
	operationHours = "Mon-Sun 10am-10pm",
	phone = "555-555-5555",
	storeImage = "https://via.placeholder.com/150",
	storeName = "Burger Joint",
	storeProducts = 50,
	listOfComments,
}) => {
	return (
		<>
			<Header />
			<BodyTemplate footer>
				<ContainerProductConsumer>
					<div className="header-product-consumer"></div>
					<div className="main-product-consumer">
						<div className="img-product-consumer">
							<img src={imageUrl} />
						</div>
						<div className="info-product-consumer">
							<StyledColumn style={{ margin: "14px", alignItems: "start" }}>
								<Subtitle>{productName}</Subtitle>
								<Text style={{ height: "fit-content" }}>{productDescription}</Text>
								<StyledRow>
									<AvaliationStars
										color="orange"
										avegareRate={averageRating}
									/>
									<Text>({totalRatings} avaliações)</Text>
								</StyledRow>
								<Box className="container-ingredientes-product-info">
									{category.map((r, i) => (
										<span
											className="ingredientes-product-info"
											key={i}
										>
											{r}
										</span>
									))}
								</Box>
								<StyledCost typeText="text-mdb">
									R$ {price}
									<span>Unidade</span>
								</StyledCost>
							</StyledColumn>
							<div className="info-local">
								<MdLocationOn className="icon-one-info-local" />
								<Text>{address}</Text>
							</div>
							<div className="info-local">
								<AiFillClockCircle className="icon-two-info-local" />
								<Text>Tempo de espera: {waitTime}</Text>
							</div>
							<div className="info-local">
								<SiHomeassistantcommunitystore className="icon-three-info-local" />
								<Text>{operationHours}</Text>
							</div>
							<div className="info-local">
								<MdPhoneEnabled className="icon-four-info-local" />
								<Text>Telefone: {phone}</Text>
							</div>
							<Box className="container-store-info-local">
								<img src={storeImage} />
								<Text>
									<h3>{storeName}</h3>
									<span>{storeProducts} Produtos</span>
								</Text>
							</Box>
							<ButtonIcon icon={<FaMapMarkedAlt />}>VISUALIZAR</ButtonIcon>
							<Subtitle className="subtitulo-avaliacao-info-product">
								Avaliações
							</Subtitle>
							<AvaliationProgressBar />
						</div>
						<div className="comentario-product-consumer">
							<Box className="container-comentario-product-consumer-first-row">
								<Subtitle>Contribua</Subtitle>
								<Text>Dê uma nota para sua experiência</Text>
								<div className="comentario-product-avaliation-start">
									<AvaliationStars
										color="orange"
										avegareRate={1}
									/>
									<ul>
										<li>MUITO BOM</li>
									</ul>
								</div>
								<Text>Faça um comentário</Text>
								<TextArea height="42px" />
								<ButtonIcon
									buttonStyle="filled"
									icon={undefined}
								>
									CONTRIBUIR
								</ButtonIcon>
							</Box>
							<Box className="container-comentario-product-consumer-second-row">
								<Subtitle>Comentários</Subtitle>
								<div className="container-comentario-product-text">
									{/* TODO: RETIRAR APÓS INTEGRAÇÃO */}
									<BoxComment
										name="Denise Oliveira"
										date="09/09/2022"
										qtdComentario={4}
										comentario="Eu sou vegetariana há alguns anos e já experimentei muitos
											hambúrgueres vegetarianos e veganos, mas devo dizer que o Hambúrguer
											2.0 Vegan do GreenBite é realmente impressionante! A textura é
											perfeita e o sabor é incrível, eu não conseguia acreditar que não era
											carne de verdade! Além disso, adorei a ideia de que é uma opção mais
											saudável e sustentável para o meio ambiente. Com certeza vou voltar
											para experimentar mais opções do menu."
									/>
									{listOfComments?.map(item => (
										<BoxComment
											key={item.name}
											comentario={item.comentario}
											img={item.img}
											name={item.name}
											qtdComentario={item.qtdComentario}
											date={item.date}
										/>
									))}
								</div>
							</Box>
						</div>
					</div>
				</ContainerProductConsumer>
			</BodyTemplate>
		</>
	);
};

const categoriaResgisterProduct = ["Ingrediente", "Ingrediente", "Ingrediente"];

const ContainerProductConsumer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0fr 0fr;

	grid-template-areas: "header" "main";

	.header-product-consumer {
		height: 10dvh;
		grid-area: header;
	}

	.main-product-consumer {
		display: grid;
		grid-template-columns: 0.8fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-column-gap: 40px;

		grid-template-areas: "img" "coment";

		grid-area: main;
	}

	.img-product-consumer {
		grid-area: img;

		> img {
			max-height: 100%;
			object-fit: cover;
			width: 100%;
			border-radius: 8px;
		}
	}

	.info-product-consumer {
		grid-column-start: 2;
		grid-row: 1 / 3;
		padding: 0 60px;

		> div {
			margin: 14px 0 !important;

			> h2:nth-child(1) {
				font-size: 36px;
			}

			> div:nth-child(3) {
				justify-content: flex-start;
				gap: 15px;
			}

			> span:nth-child(5) {
				margin: 15px 0 15px 0;
				background: none;
				padding: 0;
				font-size: 48px;
				color: ${p => p.theme.colors.primary[600]};
				> span {
					margin-left: 10px;
					font-size: 14px;
				}

				@media (max-width: 1000px) {
					font-size: 38px;
				}

				@media (max-width: 800px) {
					font-size: 48px;
				}

				@media (max-width: 500px) {
					font-size: 38px;
				}
			}

			@media (max-width: 800px) {
				margin: 25px 0 0 0 !important;
			}
		}

		.container-ingredientes-product-info {
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
						: p.theme.colors.dark_gray[800]};
			}
			.ingredientes-product-info {
				margin-bottom: 3px;
				padding: 5px 16px;
				background: #087704;
				border-radius: 30px;
				text-align: center;
				color: ${p => p.theme.colors.light_gray[200]};
			}
		}

		.info-local {
			display: grid;
			grid-template-columns: 30px 1fr;
			grid-column-gap: 10px;
			align-items: center;
			margin: 5px 0 !important;

			svg {
				height: min-content;
				width: 25px;
				place-self: flex-start;
				justify-self: center;
				fill: #087704;
			}

			.icon-two-info-local {
				width: 21px;
			}

			.icon-three-info-local {
				width: 17px;
			}

			.icon-four-info-local {
				width: 21px;
			}
		}

		.container-store-info-local {
			display: flex;
			justify-content: flex-start;
			gap: 10px;
			align-items: center;
			margin: 25px 0 !important;

			img {
				height: 36px;
				width: 36px;
				border-radius: 50px;
			}

			> span {
				display: flex;
				flex-direction: column;
				justify-content: center;
				color: ${p =>
					p.theme.name == "light"
						? p.theme.colors.dark_gray[400]
						: p.theme.colors.light_gray[200]};

				> h3 {
					font-size: 16px;
					line-height: 16px;
				}

				> span {
					font-size: 12px;
					line-height: 12px;
				}
			}
		}

		> button:nth-child(7) {
			max-width: fit-content;
			font-weight: 500;
			gap: 8px;

			@media (max-width: 500px) {
				max-width: 100%;
			}
		}

		.subtitulo-avaliacao-info-product {
			margin-top: 40px;
			font-size: 32px;

			@media (max-width: 600px) {
				text-align: center;
			}
		}

		.container-evaluation-info-product {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));

			.container-progress-bar {
				display: grid;
				grid-row-gap: 5px;

				> div > span {
					font-size: 14px;
					font-weight: 600;
					place-self: center;
				}

				.progress-bar-1,
				.progress-bar-2,
				.progress-bar-3,
				.progress-bar-4,
				.progress-bar-5 {
					display: grid;
					grid-template-columns: 35px 1fr;
					align-items: center;
					grid-column-gap: 10px;
				}
			}

			.container-circulo-value {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 15px;
				height: 132px;

				.circulo-value {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 60px;
					width: 60px;
					border-radius: 100%;
					border: 3.5px solid #087704;

					> span {
						font-size: 24px;
						font-weight: 600;
						color: #087704;
						padding-bottom: 4px;
					}
				}

				> h2 {
					line-height: 15px;
					> h3 {
						font-size: 24px;
						line-height: 24px;
					}

					> span {
						font-size: 14px;
						line-height: 14px;
						font-weight: 500;
						color: ${p =>
							p.theme.name == "light"
								? p.theme.colors.dark_gray[200]
								: p.theme.colors.light_gray[800]};
					}
				}
			}
		}
	}

	.comentario-product-consumer {
		grid-area: coment;
		padding: 30px 0;

		.container-comentario-product-consumer-first-row {
			> h2 {
				margin-bottom: 8px;
			}

			.comentario-product-avaliation-start {
				display: flex;
				margin: 3px 0 8px 0;

				ul {
					list-style: none;
					color: ${p => p.theme.colors.primary[600]};
					font-weight: 600;
				}

				li::before {
					content: "•";
					color: ${p => p.theme.colors.primary[600]};
					display: inline-block;
					font-weight: bold;
					width: 1em;
					margin-left: 10px;
				}
			}

			> textarea {
				margin-top: 4px;
			}

			> button {
				margin-top: 12px;
				font-weight: 600;
				padding: 4px 20px;
				font-size: 16px;
			}
		}

		.container-comentario-product-consumer-second-row {
			margin-top: 30px;
			height: 250px;

			.container-comentario-product-text {
				margin-top: 10px;
				height: 100%;
				padding: 10px 0;

				overflow-x: auto;

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

				.box-coment {
					height: fit-content;
					display: flex;
					flex-direction: column;
					padding: 8px;
					border-radius: ${p => p.theme.border.radius.md};
					background: ${p =>
						p.theme.name == "light"
							? p.theme.colors.light_gray[400]
							: p.theme.colors.dark_gray[600]};

					border: 1px solid
						${p =>
							p.theme.name == "light" ? "transparent" : p.theme.colors.dark_gray[400]};
					box-shadow: ${p => p.theme.colors.shadow[200]};
					color: ${p =>
						p.theme.name == "light"
							? p.theme.colors.dark_gray[600]
							: p.theme.colors.light_gray[600]};
					gap: 10px;

					.header-comentario-product-text {
						display: flex;
						justify-content: flex-start;
						gap: 10px;
						align-items: center;

						img {
							height: 36px;
							width: 36px;
							border-radius: 50px;
						}

						> span {
							display: flex;
							flex-direction: column;
							justify-content: center;
							color: ${p =>
								p.theme.name == "light"
									? p.theme.colors.dark_gray[400]
									: p.theme.colors.light_gray[200]};

							> h3 {
								font-size: 16px;
								line-height: 16px;
							}

							> span {
								font-size: 12px;
								line-height: 12px;
							}
						}
					}

					> span {
						font-size: 12px;
					}
				}
			}
		}
	}

	@media (max-width: 800px) {
		.main-product-consumer {
			grid-template-columns: 1fr;
			grid-template-rows: 0fr 0fr 0fr;

			grid-template-areas: "img" "info" "coment";
		}

		.info-product-consumer {
			grid-area: info;
			padding: 0;
		}

		.comentario-product-consumer {
			grid-area: coment;
		}
	}
`;