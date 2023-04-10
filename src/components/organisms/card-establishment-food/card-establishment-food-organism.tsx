import { Box } from "../../atoms/box/index";
import styled from "styled-components";
import { AvaliationStars } from "@/components/molecules/avaliation-stars";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { TextAtom } from "../../atoms/text/text-atom";
import { TextIcon } from "@/components/molecules/text/text-icon-molecule";
import { FaCommentAlt, IoLocationSharp } from "react-icons/all";
import { Divider } from "../../../pages/home";
import { Star } from "@/components/atoms/star";

export type EstablishmentFood = {};

export const CardCarrouselFoodOrganism: React.FC<EstablishmentFood> = ({}) => {
	return (
		<>
			<Box
				display="flex"
				flexDiretion="column"
				borderRadius="md"
				// shadow="md"
				style={{
					width: "400px",
					height: "236px",
					// margin: "10px",
				}}
				// height={"auto"}
				// size="sm"
			>
				<div style={{ height: "46%", width: "100%" }}>
					<img
						src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"
						style={{ objectFit: "cover", borderRadius: "4px" }}
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
						justifyContent: "space-between",
						padding: "10px",
					}}
				>
					<StyledRow>
						<Subtitle>Pizza Vegana</Subtitle>
						<AvaliationStars avegareRate={1} />
						<div></div>
					</StyledRow>
					<TextAtom typeText="text-md">
						Pizza vegana produzida a base de frutas e vegetais
					</TextAtom>
					<StyledRow style={{ alignItems: "flex-start" }}>
						<StyledCost typeText="text-mdb">R$ 45,00</StyledCost>
						<TextIcon
							icon={<IoLocationSharp />}
							iconAlign="left"
							typeText="text-md"
						>
							500m
						</TextIcon>
						<div></div>
					</StyledRow>
				</div>
			</Box>
		</>
	);
};

export const CardEstablishmentFoodOrganism = ({}) => {
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
					src="https://midias.agazeta.com.br/2022/05/25/hamburguer-da-101-brasa-burger-em-vila-velha-769174-article.jpg"
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
				<Subtitle>Hamburguer Vegan 2.0</Subtitle>
				<TextAtom style={{ height: "fit-content" }}>
					Aproveite todo o sabor de um clássico hambúrguer sem sacrificar seus
					princípios veganos com o nosso revolucionário Hambúrguer 2.0 Vegan. Feito
					com ingredientes de origem vegetal de alta qualidade, este hambúrguer é uma
					deliciosa opção para quem busca uma alimentação mais saudável e
					sustentável. Com sua textura suculenta e sabor inigualável, é perfeito para
					qualquer refeição, desde um lanche rápido até um jantar sofisticado.
					Experimente agora e descubra o futuro do hambúrguer vegano!
				</TextAtom>
				<StyledCost typeText="text-mdb">R$ 45,00</StyledCost>

				<Divider />
				<StyledRow>
					<AvaliationStars
						color="orange"
						avegareRate={1}
					/>
					<TextAtom>(123 avaliações)</TextAtom>
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
				<TextAtom style={{ height: "fit-content" }}>
					Aproveite todo o sabor de um clássico hambúrguer sem sacrificar seus
					princípios veganos com o nosso revolucionário Hambúrguer 2.0 Vegano. Feito
					com ingredientes de origem vegetal de alta qualidade, este hambúrguer é uma
					deliciosa opção para quem busca uma alimentação mais saudável e
					sustentável. Com sua textura suculenta e sabor inigualável, é perfeito para
					qualquer refeição, desde um lanche rápido até um jantar sofisticado.
					Experimente agora e descubra o futuro do hambúrguer vegano!
				</TextAtom>
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
export const StyledColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
`;

export const StyledCost = styled(TextAtom)<{
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
