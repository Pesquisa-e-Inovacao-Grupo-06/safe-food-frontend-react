import { Divider } from "@/pages/home";
import { Container } from "../atoms/container";
import { BannerMobilePlatform } from "../organisms/banner-mobile-platform/banner-mobile-platform";
import { FooterOrganism } from "../organisms/footer/footer-organism";
import { MoreFavoritesTemplate } from "./more-favorites-template";
import Header from "../molecules/header";
import { Box } from "../atoms/box";
import { CardEstablishmentFoodOrganism } from "../organisms/card-establishment-food/card-establishment-food-organism";
import { Carousel } from "../molecules/carousel";
import { CardEstablishmentFoodOTemplate } from "./card-establishment-food-organism";

export const HomeTemplate = ({}) => {
	return (
		<>
			<Header />
			<div style={{ paddingLeft: "150px", paddingRight: "150px" }}>
				<Divider marginBottom="100px"></Divider>
				<Box>
					{/* <Container
        height={"200px"}
        size="xxlg"
    > */}
					<CardEstablishmentFoodOTemplate />
					{/* </Container> */}
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
			</div>
		</>
	);
};
