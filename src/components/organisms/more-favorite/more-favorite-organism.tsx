import { Text } from "@/components/atoms/text";
import { AvaliationStars } from "@/components/molecules/avaliation-stars";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Button } from "@/components/atoms/button";
import { TiMediaEjectOutline } from "react-icons/ti";
import { StyledCost } from "./more-favorite-organism-style";
import { TextIcon } from "@/components/molecules/text-icon/text-icon-molecule";
import { MoreFavoriteType } from "@/app/domain/entities/MoreFavorite";
import styled from "styled-components";
import { formatReal } from "@/app/util/convertions/price-br";
import { StyledColumn } from "../card-establishment-food/card-establishment-food-organism";
import { Box } from "@/components/atoms/box";
import { ImageAtom } from "@/components/atoms/img";
import iconNoGluten from "../../../assets/icons8-no-gluten-50.png";
import iconNoMeat from "../../../assets/icons8-no-meat-50.png";
import iconNoSoy from "../../../assets/icons8-no-soy-30.png";
import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import { Product } from "@/app/domain/entities/Product";

export type MoreFavoriteProps = {
	moreFavoriteItems: Product;
};

export const MoreFavoriteOrganism: React.FC<MoreFavoriteProps> = ({
	moreFavoriteItems,
}) => {
	const colors = useSafeFoodTheme();
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
					src={moreFavoriteItems.params.imagem ?? "https://via.placeholder.com/400"}
					minWidth={500}
					minHeight={320}
					maxWidth={500}
					maxHeight={320}
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
				height="320px"
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
						{moreFavoriteItems.params.titulo}
					</Subtitle>
					<AvaliationStars avegareRate={1} />
					<div
						style={{
							flexBasis: "14%",
							height: "20px",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<ImageAtom
							src={iconNoGluten}
							cursor
						/>
						<ImageAtom
							src={iconNoMeat}
							cursor
						/>
						<ImageAtom
							src={iconNoSoy}
							cursor
						/>
					</div>
				</Box>
				<Text
					style={{
						WebkitLineClamp: 3,
						display: "-webkit-box",
						textOverflow: "ellipsis",
						overflow: "hidden",
						width: "400px",
						height: "auto",
						WebkitBoxOrient: "vertical",
					}}
					color={"whitegray"}
				>
					{moreFavoriteItems.params.descricao}
				</Text>
				<Box
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
					{/* {IngredientsList(moreFavoriteItems.params.ingredientes)} */}
				</Box>

				<StyledCost typeText="text-mdb">
					{formatReal(moreFavoriteItems.params.preco)}
				</StyledCost>
				<Button width="fit-content">Ver produto</Button>

				<TextIcon
					icon={<TiMediaEjectOutline />}
					iconAlign={"left"}
				>
					{/* {moreFavoriteItems.} */}
				</TextIcon>
				<TextIcon
					icon={<TiMediaEjectOutline />}
					iconAlign={"left"}
				>
					{/* {moreFavoriteItems.params.} */}
				</TextIcon>
				<TextIcon
					style={{}}
					icon={<TiMediaEjectOutline />}
					iconAlign="left"
				>
					{/* {moreFavoriteItems.} */}
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

function IngredientsList(ingredients: string[]) {
	const qtdIngredients = ingredients.length;
	const result = [];

	for (let i = 0; i < 5; i++) {
		result.push(
			<StyledTextWithBorder
				style={{
					border: "1px solid green",
					padding: "3px",
					height: "fit-content",
				}}
			>
				{ingredients[i]}
			</StyledTextWithBorder>
		);
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
