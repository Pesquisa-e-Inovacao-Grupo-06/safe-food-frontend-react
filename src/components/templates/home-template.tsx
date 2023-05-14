import Header from "../molecules/header";
import { BannerMobilePlatform } from "../organisms/banner-mobile-platform/banner-mobile-platform";

import { NearbyFoodsCard } from "./card-establishment-food-template";
import { MoreFavoritesTemplate } from "./more-favorites-template";
import { BodyTemplate } from "./body-template";
import { Landing } from "../organisms/landing/landing";
import { Product } from "@/app/domain/entities/Product";

export type HomeTemplateProps = {
	nearbyProducts: Product[];
	listOfFavoriteProducts: Product[];
};

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
	nearbyProducts,
	listOfFavoriteProducts,
}) => {
	return (
		<>
			<Header />
			<BodyTemplate footer>
				<Landing></Landing>
				<NearbyFoodsCard nearbyFoods={nearbyProducts} />
				<MoreFavoritesTemplate listOfFavorite={listOfFavoriteProducts} />
				<BannerMobilePlatform />
			</BodyTemplate>
		</>
	);
};
