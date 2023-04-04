import { Box } from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import { Column } from "@/components/atoms/column";
import { TextAtom } from "@/components/atoms/text/text-atom";
import { AvaliationStars } from "@/components/molecules/avaliation-stars";
import { Row } from "@/components/molecules/row/styles";
import { TextIcon } from "@/components/molecules/text/text-icon-molecule";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { TiMediaEjectOutline } from "react-icons/ti";
import foodFavorito from "../../../assets/food-favorite.png";
import { Container } from "../../atoms/sidebarItem/styles";
import styled from "styled-components";

export const MoreFavoriteOrganism = ({}) => {
	return (
		<Container style={{ height: "280px" }}>
			<Row style={{ gap: "40px" }}>
				<Column maxWidth="100%">
					<Box
						display="flex"
						justify="right"
						height="100%"
					>
						<img src={foodFavorito} />
					</Box>
				</Column>
				<Column size={4}>
					<div>
						<Row gap="36px">
							<Subtitle>Tofu vegetariano</Subtitle>
							<AvaliationStars avegareRate={1} />
						</Row>
						<Row>
							<TextAtom
								text="Tofu Vegetariano produzido com legumes e massas especiais."
								typeText="text-md"
							></TextAtom>
						</Row>
						<Row gap="10px">
							<TextAtom
								text="Tofu Dividido"
								style={{
									border: "1px solid green",
									borderRadius: "8px",
									paddingLeft: "5px",
									paddingRight: "5px",
								}}
							>
								Tofu Dividido
							</TextAtom>
							<TextAtom
								text="Tofu Dividido"
								style={{
									border: "1px solid green",
									borderRadius: "8px",
									paddingLeft: "5px",
									paddingRight: "5px",
								}}
							>
								Tofu Dividido
							</TextAtom>{" "}
							<TextAtom
								text="Tofu Dividido"
								style={{
									border: "1px solid green",
									borderRadius: "8px",
									paddingLeft: "5px",
									paddingRight: "5px",
								}}
							>
								Tofu Dividido
							</TextAtom>
							<TextAtom
								text="Tofu Dividido"
								style={{
									border: "1px solid green",
									borderRadius: "8px",
									paddingLeft: "5px",
									paddingRight: "5px",
								}}
							>
								Tofu Dividido
							</TextAtom>
						</Row>
						<Row>
							<Subtitle
								style={{
									backgroundColor: "green",
									borderRadius: "8px",
									marginTop: "10px",
									paddingLeft: "10px",
									paddingRight: "10px",
									color: "white",
								}}
							>
								R$ 55,00
							</Subtitle>
						</Row>
						<Button style={{ marginLeft: "0px" }}> Ver produto</Button>
						<Column>
							<TextIcon
								icon={<TiMediaEjectOutline />}
								iconAlign={"left"}
							>
								Veg To Go - Restaurante Vegetariano
							</TextIcon>
							<TextIcon
								icon={<TiMediaEjectOutline />}
								iconAlign={"left"}
							>
								Aberto
							</TextIcon>
							<TextIcon
								icon={<TiMediaEjectOutline />}
								iconAlign={"left"}
							>
								Rua dos Otonis 627, São Paulo, SP, 04025-001
							</TextIcon>
						</Column>
					</div>
				</Column>
			</Row>
		</Container>
	);
};

export const StyledCost = styled.div`
	padding-left: 15px;
	padding-right: 15px;
	border-radius: 8px;
`;

export const StyledTextWithBorder = styled.p`
	border: 1px solid "green";
	border-radius: 8px;
`;
