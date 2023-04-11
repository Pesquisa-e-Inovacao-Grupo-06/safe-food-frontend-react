import { TextAtom } from "@/components/atoms/text/text-atom";
import { AvaliationStars } from "@/components/molecules/avaliation-stars";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Button } from "@/components/atoms/button";
import { TiMediaEjectOutline } from "react-icons/ti";
import {
	StyledContainer,
	StyledContainerColumn,
	StyledContainerRow,
	StyledTextWithBorder,
	StyledCost,
} from "./more-favorite-organism-style";
import { TextIcon } from "@/components/molecules/text-icon/text-icon-molecule";

export type MoreFavoriteOrganismProps = {
	nameFoodTitle: string;
	descriptionFood: string;
	ingredients: string[];
	priceFood: string;
	nameEstablishment: string;
	workingPlaceEstablishment: boolean;
	locationEstablishment: string;
};

export const MoreFavoriteOrganism: React.FC<MoreFavoriteOrganismProps> = ({
	nameFoodTitle,
	descriptionFood,
	ingredients,
	priceFood,
	nameEstablishment,
	workingPlaceEstablishment,
	locationEstablishment,
}) => {
	function IngredientsList(ingredients: string[]) {
		return ingredients.map(ingredient => (
			<StyledTextWithBorder>{ingredient}</StyledTextWithBorder>
		));
	}
	return (
		<StyledContainer>
			<div style={{ width: "500px" }}>
				<img
					className="img-more-favorite"
					src="https://img.freepik.com/premium-photo/food-pasta-pork-ribs-avocado-buddha-bowl-beet-salad-black-stone-background-top-view-free-space-text_187166-7546.jpg?w=2000"
					alt=""
					width={"100%"}
					height={"100%"}
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div>
				<StyledContainerColumn>
					<StyledContainerRow style={{ justifyContent: "space-between" }}>
						<Subtitle>{nameFoodTitle}</Subtitle>

						<AvaliationStars avegareRate={1} />
						<div></div>
					</StyledContainerRow>
					<TextAtom>{descriptionFood}</TextAtom>
					<StyledContainerRow style={{ gap: "10px", width: "80%" }}>
						{/* //TODO: TESTAR LIST BUILDER*/}
						{IngredientsList(ingredients)}
					</StyledContainerRow>
					<StyledCost typeText="text-mdb">{priceFood}</StyledCost>
					<Button style={{ marginLeft: "0px", width: "fit-content" }}>
						Ver produto
					</Button>
					<TextIcon
						icon={<TiMediaEjectOutline />}
						iconAlign={"left"}
					>
						{nameEstablishment}
					</TextIcon>
					<TextIcon
						icon={<TiMediaEjectOutline />}
						iconAlign={"left"}
					>
						{workingPlaceEstablishment}
					</TextIcon>
					<TextIcon
						style={{}}
						icon={<TiMediaEjectOutline />}
						iconAlign={"left"}
					>
						{locationEstablishment}
					</TextIcon>
				</StyledContainerColumn>
			</div>
		</StyledContainer>
	);
};
