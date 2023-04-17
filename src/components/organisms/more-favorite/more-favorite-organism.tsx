import { Text } from "@/components/atoms/text";
import { AvaliationStars } from "@/components/molecules/avaliation-stars";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Button } from "@/components/atoms/button";
import { TiMediaEjectOutline } from "react-icons/ti";
import {
	StyledContainerColumn,
	StyledContainerRow,
	StyledCost,
} from "./more-favorite-organism-style";
import { TextIcon } from "@/components/molecules/text-icon/text-icon-molecule";
import { MoreFavoriteType } from "@/app/domain/entities/MoreFavorite";
import styled from "styled-components";
import { formatReal } from "@/app/util/convertions/price-br";
import { StyledColumn } from "../card-establishment-food/card-establishment-food-organism";
import { Box } from "@/components/atoms/box";
import { ImageAtom } from "@/components/atoms/img";
import { Carousel } from "@/components/molecules/carousel";

export type MoreFavoriteProps = {
	moreFavoriteType: MoreFavoriteType;
};

export const MoreFavoriteOrganism: React.FC<MoreFavoriteProps> = ({
	moreFavoriteType,
}) => {
	return (
		<BoxMoreFavorite
			display="flex"
			flexDiretion="row"
			gap="20px"
			justify="flex-start"
			alignItems="start"
			style={{ flexWrap: "wrap" }}
			width="100%"
			height="100%"
		>
			<div style={{ width: "500px", height: "300px" }}>
				<ImageAtom
					src={moreFavoriteType.img}
					// width={"100%"}
					// height={"100%"}
					minWidth={500}
					minHeight={300}
					maxWidth={500}
					maxHeight={300}
					objectFit="cover"
					borderRadius="lg"
					cursor
				/>
			</div>
			<Box
				display="flex"
				flexDiretion="column"
				alignItems="start"
				justify="space-between"
				// height="100%"
				style={{ flexBasis: "50%" }}
				height="300px"
			>
				<Box
					display="flex"
					flexDiretion="row"
					gap="10px"
					justify="flex-start"
				>
					<Subtitle
						style={{
							flexBasis: "70%",
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}
					>
						{moreFavoriteType.name}
					</Subtitle>
					<AvaliationStars avegareRate={1} />
					<div style={{ flexBasis: "10%" }}></div>
				</Box>
				<Text>{moreFavoriteType.description}</Text>
				{/* <Box
					display="flex"
					flexDiretion="row"
					style={{
						gap: "10px",
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
						textAlign: "start",
						placeContent: "flex-start",
					}}
				>
					{IngredientsList(moreFavoriteType.ingredients!)}
				</Box> */}
				<Carousel
					items={IngredientsListCarousel(moreFavoriteType.ingredients!)}
					itemSize={4}
					itemHeight={50}
				/>
				<StyledColumn alignItems="start">
					<StyledCost typeText="text-mdb">
						{formatReal(moreFavoriteType.price)}
					</StyledCost>
					<Button>Ver produto</Button>
				</StyledColumn>

				<TextIcon
					icon={<TiMediaEjectOutline />}
					iconAlign={"left"}
				>
					{moreFavoriteType.nameEstablishment}
				</TextIcon>
				<TextIcon
					icon={<TiMediaEjectOutline />}
					iconAlign={"left"}
				>
					{moreFavoriteType.workingPlaceEstablishment}
				</TextIcon>
				<TextIcon
					style={{}}
					icon={<TiMediaEjectOutline />}
					iconAlign="left"
				>
					{moreFavoriteType.locationEstablishment}
				</TextIcon>
			</Box>
		</BoxMoreFavorite>
	);
};

export const StyledTextWithBorder = styled(Text)`
	border: "1px solid green";
	border-radius: 8px;
	width: fit-content;
`;

export const BoxMoreFavorite = styled(Box)`
	@media (min-width: "1000px") {
		/* height: 300px; */
	}
`;

// function IngredientsList(ingredients: string[]) {
// 	const qtdIngredients = ingredients.length;
// 	const result = [];

// 	for (let i = 0; i < 5; i++) {
// 		result.push(
// 			<StyledTextWithBorder
// 				style={{
// 					border: "1px solid green",
// 					padding: "3px",
// 					height: "fit-content",
// 				}}
// 			>
// 				{ingredients[i]}
// 			</StyledTextWithBorder>
// 		);
// 		if (qtdIngredients > 5 && i == 4) {
// 			result.push(
// 				<Text
// 					typeText="text-md"
// 					style={{ alignSelf: "flex-end" }}
// 				>
// 					...
// 				</Text>
// 			);
// 		}
// 	}

// 	return result;
// }

function IngredientsListCarousel(ingredients: string[]): React.ReactNode[] {
	const qtdIngredients = ingredients.length;
	const result: React.ReactNode[] = [];

	for (let i = 0; i < qtdIngredients; i++) {
		if (i < 5) {
			result.push(
				<Box
					display="flex"
					justify="center"
					style={{
						height: "fit-content",
						width: "fit-content",
					}}
				>
					<StyledTextWithBorder
						style={{
							border: "1px solid green",
							padding: "3px",
							height: "fit-content",
							width: "fit-content",
							margin: "0px",
							textAlign: "center",
						}}
					>
						{ingredients[i]}
					</StyledTextWithBorder>
				</Box>
			);
		}
		if (qtdIngredients > 5 && i == 4) {
			result.push(
				<Text
					typeText="text-md"
					style={{ alignSelf: "flex-end" }}
				>
					...
				</Text>
			);
		}
	}

	return result;
}
