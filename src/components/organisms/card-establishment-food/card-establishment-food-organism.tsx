import { Box } from "../../atoms/box/index";
import styled from "styled-components";
import { AvaliationStars } from "@/components/molecules/avaliation-stars";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Text } from "../../atoms/text";
import { FaCommentAlt, IoLocationSharp } from "react-icons/all";
import { Star } from "@/components/atoms/star";
import { TextIcon } from "@/components/molecules/text-icon/text-icon-molecule";
import { EstablishmentFoodType } from "@/app/domain/entities/FoodEstablishment";
import { Divider } from "@/components/atoms/divider";
import { formatReal } from "@/app/util/convertions/price-br";
import { Product } from "@/app/domain/entities/Product";

export type EstablishmentFoodProps = {
	establishemntFood: EstablishmentFoodType;
};

export type InfoProduct = {
	product: Product;
};

export const CardCarrouselFoodOrganism: React.FC<EstablishmentFoodProps> = ({
	establishemntFood,
}) => {
	return (
		<>
			<Box
				display="flex"
				flexDiretion="column"
				borderRadius="md"
				style={{
					width: "480px",
					height: "236px",
				}}
			>
				<div style={{ height: "46%", width: "100%" }}>
					<img
						src={establishemntFood.img}
						style={{ objectFit: "cover", borderRadius: "4px", pointerEvents: "none" }}
						height={"100%"}
						width={"100%"}
					/>
				</div>
				<div
					style={{
						height: "54%",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around",
						padding: "10px",
					}}
				>
					<StyledRow style={{ justifyContent: "unset" }}>
						<Subtitle
							style={{
								WebkitLineClamp: 1,
								display: "-webkit-box",
								textOverflow: "ellipsis",
								overflow: "hidden",
								width: "200px",
								height: "auto",
								WebkitBoxOrient: "vertical",
								flexBasis: "79.4%",
							}}
						>
							{establishemntFood.name}
						</Subtitle>
						<AvaliationStars
							avegareRate={establishemntFood.avegareRate}
							style={{ flexBasis: "20.6%" }}
						/>
						<div style={{ flexBasis: "10%" }}></div>
					</StyledRow>
					<Text typeText="text-md">{establishemntFood.description}</Text>
					<StyledRow style={{ alignItems: "flex-start" }}>
						<StyledCost typeText="text-mdb">
							{formatReal(establishemntFood.price)}
						</StyledCost>
						<TextIcon
							icon={<IoLocationSharp />}
							iconAlign="left"
							typeText="text-md"
						>
							{establishemntFood.currentDistance + "m"}
						</TextIcon>
						<div></div>
					</StyledRow>
				</div>
			</Box>
		</>
	);
};

export const CardEstablishmentFoodOrganism: React.FC<InfoProduct> = ({
	product,
}) => {
	return (
		<Box
			display="flex"
			flexDiretion="column"
			borderRadius="md"
			width="360px"
			shadow="md"
			background="#FCFCFC"
		>
			<div style={{ width: "100%" }}>
				<img
					src={product.imagem ?? "https://via.placeholder.com/400"}
					alt=""
					style={{
						maxHeight: "200px",
						objectFit: "cover",
						width: "100%",
						borderRadius: "4px",
					}}
				/>
			</div>
			<StyledColumn style={{ margin: "14px", alignItems: "start" }}>
				<Subtitle>{product.titulo}</Subtitle>
				<Text style={{ height: "fit-content" }}>{product.descricao}</Text>
				<StyledCost typeText="text-mdb">{formatReal(product.preco)}</StyledCost>

				<Divider />
				<StyledRow>
					<AvaliationStars
						color="orange"
						avegareRate={1}
					/>
					<Text>(123 avaliações)</Text>
				</StyledRow>
			</StyledColumn>
		</Box>
	);
};
export const CardExpansiveEstablishmentFoodOrganism = ({}) => {
	return (
		<Box
			display="flex"
			flexDiretion="row"
			borderRadius="md"
			width="100%"
			shadow="md"
			background="#FCFCFC"
		>
			<div style={{ height: "125px", padding: "10px", flexBasis: "20%" }}>
				<img
					src="https://midias.agazeta.com.br/2022/05/25/hamburguer-da-101-brasa-burger-em-vila-velha-769174-article.jpg"
					alt=""
					style={{
						maxHeight: "100%",
						objectFit: "cover",
						width: "100%",
						borderRadius: "8px",
					}}
				/>
			</div>
			<StyledColumn style={{ flexBasis: "20%", alignItems: "start" }}>
				<Subtitle>Hamburger Vegan 2.0</Subtitle>
				<StyledRow style={{ justifyContent: "unset", gap: "20px" }}>
					<TextIcon
						icon={
							<Star
								filled={true}
								value={3.5}
								size={20}
							></Star>
						}
						iconAlign="left"
					>
						3.5
					</TextIcon>
					<TextIcon
						icon={<FaCommentAlt />}
						iconAlign="left"
					>
						53
					</TextIcon>
				</StyledRow>
			</StyledColumn>
			{/* <div
				style={{
					height: "100%",
					background: "black",
					width: "10px",
					flexBasis: "1%",
					position: "relative",
				}}
			></div> */}
			<StyledRow style={{ flexBasis: "59%" }}>
				<Text style={{ height: "fit-content" }}>
					Aproveite todo o sabor de um clássico hambúrguer sem sacrificar seus
					princípios veganos com o nosso revolucionário Hambúrguer 2.0 Vegano. Feito
					com ingredientes de origem vegetal de alta qualidade, este hambúrguer é uma
					deliciosa opção para quem busca uma alimentação mais saudável e
					sustentável. Com sua textura suculenta e sabor inigualável, é perfeito para
					qualquer refeição, desde um lanche rápido até um jantar sofisticado.
					Experimente agora e descubra o futuro do hambúrguer vegano!
				</Text>
			</StyledRow>
		</Box>
	);
};

export const StyledContainer = styled.div<{
	flexDiretion?: "column" | "row";
}>`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	flex-direction: row;
	.img-more-favorite {
		border-radius: 8px;
	}
`;

export const StyledRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
export const StyledColumn = styled.div<{
	alignItems?: AlignSetting;
}>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: ${p => p.alignItems};
	gap: 20px;
`;

export const StyledCost = styled(Text)<{
	backgroundColor?: string;
}>`
	background-color: ${p => p.backgroundColor ?? "green"};
	height: 100%;
	border-radius: 4px;
	padding-left: 3%;
	padding-right: 3%;
	color: white;
	max-width: auto;
	width: fit-content;
`;
