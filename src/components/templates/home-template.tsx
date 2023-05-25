import Header from "../molecules/header";
import { BannerMobilePlatform } from "../organisms/banner-mobile-platform/banner-mobile-platform";

import { MoreFavoritesTemplate } from "./more-favorites-template";
import { BodyTemplate } from "./body-template";
import { Landing } from "../organisms/landing/landing";
import { Product } from "@/app/domain/entities/Product";
import { CardEstablishmentFoodOTemplate } from "./card-establishment-food-template";
import { SafeFoodLoginResponse } from "@/app/infra/gateway/safefood/models/SafeFoodUser";
import HeaderConsumer from "../molecules/header-consumer";
import { Cache } from "@/app/domain/protocols/Cache";

export type HomeTemplateParams = {
	nearbyFoodsCardItems: Product[];
	listOfFavoriteProducts: Product[];
	textFieldFood: string;
	textFieldLocation: string;
	handleChangeFood: (value: any) => void;
	handleChangeLocation: (value: any) => void;
	onClickSearchLanding: () => void;
	user: SafeFoodLoginResponse;
	cache: Cache;
};

export const HomeTemplate: React.FC<HomeTemplateParams> = ({
	nearbyFoodsCardItems,
	listOfFavoriteProducts,
	handleChangeFood,
	handleChangeLocation,
	textFieldFood,
	textFieldLocation,
	onClickSearchLanding,
	user,
	cache,
}) => {
	return (
		<>
			{user.token ? <HeaderConsumer cache={cache} /> : <Header />}
			<Landing
				textFieldFood={textFieldFood}
				textFieldLocation={textFieldLocation}
				handleChangeFood={handleChangeFood}
				handleChangeLocation={handleChangeLocation}
				onClickSearchLanding={onClickSearchLanding}
			></Landing>
			<BodyTemplate footer>
				<CardEstablishmentFoodOTemplate nearbyFoodsItems={nearbyFoodsCardItems} />
				<MoreFavoritesTemplate listOfFavorite={listOfFavoriteProducts} />
				<BannerMobilePlatform />
			</BodyTemplate>
		</>
	);
};
