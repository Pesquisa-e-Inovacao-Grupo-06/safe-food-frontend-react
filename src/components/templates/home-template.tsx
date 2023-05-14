import Header from "../molecules/header";
import { BannerMobilePlatform } from "../organisms/banner-mobile-platform/banner-mobile-platform";

import { CardEstablishmentFoodOTemplate } from "./card-establishment-food-template";
import { MoreFavoritesTemplate } from "./more-favorites-template";
import { BodyTemplate } from "./body-template";
import { Landing } from "../organisms/landing/landing";
import { Product } from "@/app/domain/entities/Product";

export type HomeTemplateParams = {
	nearbyFoodsCardItems: Product[];
	listOfFavoriteProducts: Product[];
};

export const HomeTemplate: React.FC<HomeTemplateParams> = ({
	nearbyFoodsCardItems,
	listOfFavoriteProducts,
}) => {
	return (
		<>
			<Header />
			<BodyTemplate footer>
				<Landing></Landing>
				<CardEstablishmentFoodOTemplate nearbyFoodsItems={nearbyFoodsCardItems} />
				<MoreFavoritesTemplate listOfFavorite={listOfFavoriteProducts} />
				<BannerMobilePlatform />
			</BodyTemplate>
		</>
	);
};
