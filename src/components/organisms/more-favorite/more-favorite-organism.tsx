import { TextAtom } from "@/components/atoms/text/text-atom";
import { AvaliationStars } from "@/components/molecules/avaliation-stars";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Button } from "@/components/atoms/button";
import { TiMediaEjectOutline } from "react-icons/ti";
import {
	StyledContainer,
	StyledContainerColumn,
	StyledContainerRow,
	StyledCost,
} from "./more-favorite-organism-style";
import { TextIcon } from "@/components/molecules/text-icon/text-icon-molecule";
import { MoreFavoriteType } from "@/app/domain/entities/MoreFavorite";
import styled from "styled-components";

export type MoreFavoriteProps = {
	moreFavoriteType: MoreFavoriteType;
};

export const MoreFavoriteOrganism: React.FC<MoreFavoriteProps> = ({
	moreFavoriteType,
}) => {
	function IngredientsList(ingredients: string[]) {
		return ingredients.map(ingredient => (
			<StyledTextWithBorder style={{ border: "1px solid green", padding: "3px" }}>
				{ingredient}
			</StyledTextWithBorder>
		));
	}
	return (
		<StyledContainer>
			<div style={{ width: "500px", height: "300px" }}>
				<img
					className="img-more-favorite"
					src={moreFavoriteType.img}
					alt=""
					width={"100%"}
					height={"100%"}
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div>
				<StyledContainerColumn>
					<StyledContainerRow style={{ justifyContent: "space-between" }}>
						<Subtitle>{moreFavoriteType.name}</Subtitle>

						<AvaliationStars avegareRate={1} />
						<div></div>
					</StyledContainerRow>
					<TextAtom>{moreFavoriteType.description}</TextAtom>
					<StyledContainerRow style={{ gap: "10px", width: "80%" }}>
						{/* //TODO: TESTAR LIST BUILDER*/}
						{IngredientsList(moreFavoriteType.ingredients!)}
					</StyledContainerRow>
					<StyledCost typeText="text-mdb">{moreFavoriteType.price}</StyledCost>
					<Button style={{ marginLeft: "0px", width: "fit-content" }}>
						Ver produto
					</Button>
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
						iconAlign={"left"}
					>
						{moreFavoriteType.locationEstablishment}
					</TextIcon>
				</StyledContainerColumn>
			</div>
		</StyledContainer>
	);
};

export const StyledTextWithBorder = styled(TextAtom)`
	border: "1px solid green";
	border-radius: 8px;
	width: fit-content;
`;
