import { Divider } from "@/pages/home";
import { BannerMobilePlatform } from "../organisms/banner-mobile-platform/banner-mobile-platform";
import { FooterOrganism } from "../organisms/footer/footer-organism";
import { MoreFavoritesTemplate } from "./more-favorites-template";
import Header from "../molecules/header";
import { Box } from "../atoms/box";
import { CardEstablishmentFoodOTemplate } from "./card-establishment-food-organism";
import { ContainerFluid } from "../atoms/container";

export const HomeTemplate = ({}) => {
	return (
		<>
			<Header />
			<ContainerFluid>
				<Divider marginBottom="100px"></Divider>
				<Box>
					<CardEstablishmentFoodOTemplate />
					{/* more-favorites */}
					<MoreFavoritesTemplate />
					<Divider
						marginTop="20px"
						color="transparent"
					></Divider>
					{/* banner-mobile */}
					<BannerMobilePlatform />
					<Divider
						marginTop="39px"
						marginBottom="39px"
					></Divider>
					{/* footer */}
					<FooterOrganism />
				</Box>
			</ContainerFluid>
		</>
	);
};
