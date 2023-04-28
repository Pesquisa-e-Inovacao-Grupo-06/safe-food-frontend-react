import Header from "../molecules/header";
import { BannerMobilePlatform } from "../organisms/banner-mobile-platform/banner-mobile-platform";

import { CardEstablishmentFoodOTemplate } from "./card-establishment-food-template";
import { MoreFavoritesTemplate } from "./more-favorites-template";
import { BodyTemplate } from "./body-template";
import { Landing } from "../organisms/landing/landing";

export const HomeTemplate = ({}) => {
	return (
		<>
			<Header />
			<BodyTemplate footer>
				<Landing></Landing>
				<CardEstablishmentFoodOTemplate />
				<MoreFavoritesTemplate />
				<BannerMobilePlatform />
			</BodyTemplate>
		</>
	);
};
