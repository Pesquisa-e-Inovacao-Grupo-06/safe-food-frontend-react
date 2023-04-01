import Header from "../components/molecules/header/index";
import { FooterOrganism } from "../components/organisms/footer/footer-organism";
import { BannerMobilePlatform } from "../components/organisms/banner-mobile-platform/banner-mobile-platform";
import { ContainerFluid } from "../components/atoms/container/index";
function Home() {
	return (
		<>
			<Header />
			<div style={{ paddingTop: "75px" }}>
				<ContainerFluid>
					<BannerMobilePlatform />
					<FooterOrganism />
				</ContainerFluid>
			</div>
		</>
	);
}

export default Home;
