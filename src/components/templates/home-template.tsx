import { Divider } from "@/pages/home";
import { Container } from "../atoms/container";
import { BannerMobilePlatform } from "../organisms/banner-mobile-platform/banner-mobile-platform";
import { FooterOrganism } from "../organisms/footer/footer-organism";
import { MoreFavoritesTemplate } from "./more-favorites-template";
import Header from "../molecules/header";
import { Box } from "../atoms/box";

export const HomeTemplate = ({}) => {
	return (
		<>
			<Header />
			<div style={{ paddingLeft: "150px", paddingRight: "150px" }}>
				<Divider marginBottom="75px"></Divider>
				<Box>
					{/* <Container
        height={"200px"}
        size="xxlg"
    > */}
					{/* <Carousel
items={[
    <Box>
        <MoreFavoriteOrganism />
    </Box>,
    <Box>
        <MoreFavoriteOrganism />
    </Box>,
    <Box>
        <MoreFavoriteOrganism />
    </Box>,
    <Box>
        <MoreFavoriteOrganism />
    </Box>,
]}
itemSize={4}
itemHeight={700}
></Carousel> */}
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
