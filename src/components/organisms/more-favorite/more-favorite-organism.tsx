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

export type MoreFavoriteProps = {
	moreFavoriteType: MoreFavoriteType;
};

export const MoreFavoriteOrganism: React.FC<MoreFavoriteProps> = ({
	moreFavoriteType,
}) => {
	function IngredientsList(ingredients: string[]) {
		return ingredients.map(ingredient => (
			<StyledTextWithBorder
				style={{ border: "1px solid green", padding: "3px", height: "fit-content" }}
			>
				{ingredient}
			</StyledTextWithBorder>
		));
	}
	return (
		<Box
			display="flex"
			flexDiretion="row"
			gap="20px"
			justify="flex-start"
		>
			<div style={{ width: "500px", height: "300px" }}>
				<ImageAtom
					src={moreFavoriteType.img}
					width={"100%"}
					height={"100%"}
					objectFit="cover"
					borderRadius="lg"
				/>
			</div>
			<div>
				<StyledContainerColumn
					height={"100%"}
					style={{ justifyContent: "space-between" }}
				>
					<StyledContainerRow style={{ justifyContent: "space-between" }}>
						<Subtitle>{moreFavoriteType.name}</Subtitle>
						<AvaliationStars avegareRate={1} />
						<div></div>
					</StyledContainerRow>
					<Text>{moreFavoriteType.description}</Text>
					<StyledContainerRow style={{ gap: "10px", width: "80%" }}>
						{/* //TODO: TESTAR LIST BUILDER*/}
						{IngredientsList(moreFavoriteType.ingredients!)}
					</StyledContainerRow>
					<StyledColumn alignItems="start">
						<StyledCost typeText="text-mdb">
							{formatReal(moreFavoriteType.price)}
						</StyledCost>
						<Button style={{ marginLeft: "0px", width: "fit-content" }}>
							Ver produto
						</Button>
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
				</StyledContainerColumn>
			</div>
		</Box>
	);
};

export const StyledTextWithBorder = styled(Text)`
	border: "1px solid green";
	border-radius: 8px;
	width: fit-content;
`;
