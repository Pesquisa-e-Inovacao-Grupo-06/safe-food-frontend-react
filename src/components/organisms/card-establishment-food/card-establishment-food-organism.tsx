import { Box } from "../../atoms/box/index";
import styled from "styled-components";
import { AvaliationStars } from "@/components/molecules/avaliation-stars";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { TextAtom } from "../../atoms/text/text-atom";
import { TextIcon } from "@/components/molecules/text/text-icon-molecule";
import { IoLocationSharp } from "react-icons/all";
export type EstablishmentFood = {};

export const CardEstablishmentFoodOrganism: React.FC<
	EstablishmentFood
> = ({}) => {
	return (
		<>
			<Box
				display="flex"
				flexDiretion="column"
				borderRadius="md"
				style={{
					width: "400px",
					height: "215px",
					margin: "10px",
				}}
				// height={"auto"}
				// size="sm"
			>
				<div style={{ height: "50%", width: "100%" }}>
					<img
						src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"
						style={{ objectFit: "cover", borderRadius: "4px" }}
						height={"100%"}
						width={"100%"}
					/>
				</div>
				<div
					style={{
						height: "50%",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
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
					<StyledRow
						style={{ justifyContent: "space-around", alignItems: "flex-start" }}
					>
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

export const StyledContainer = styled.div`
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
`;

export const StyledCost = styled(TextAtom)`
	background-color: green;
	height: 100%;
	border-radius: 4px;
	padding-left: 3%;
	padding-right: 3%;
	color: white;
	max-width: auto;
	width: fit-content;
`;
