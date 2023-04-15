import { Title } from "@/styles/components/text/Title";
import { Box } from "../atoms/box";
import { ContainerFluid } from "../atoms/container";
import { Divider } from "../atoms/divider";
import Header from "../molecules/header";
import { BannerMobilePlatform } from "../organisms/banner-mobile-platform/banner-mobile-platform";
import { StyledRow, StyledColumn } from "../organisms/card-establishment-food/card-establishment-food-organism";
import { FooterOrganism } from "../organisms/footer/footer-organism";
import { LandingFormFoodOrganism } from "../organisms/landing-form-food/landing-form-food";
import { CardEstablishmentFoodOTemplate } from "./card-establishment-food-template";
import { MoreFavoritesTemplate } from "./more-favorites-template";
import bannerHome from "../../assets/banner-home.svg";



export const HomeTemplate = ({ }) => {

	return (
		<>
			<Header />
			<ContainerFluid>
				<Divider marginBottom="70px" />
				<Box>
					<Box width="100%">
						<StyledRow>
							<StyledColumn>
								<Title style={{ color: "orange" }}>
									O <span style={{ color: "green" }}> Alimento</span> restritivo que você
									pode <span style={{ color: "green" }}> confiar</span>
								</Title>

								<LandingFormFoodOrganism></LandingFormFoodOrganism>
							</StyledColumn>
							<StyledColumn>
								<img
									src={bannerHome}
									alt=""
								/>
							</StyledColumn>
						</StyledRow>
					</Box>
					<CardEstablishmentFoodOTemplate />
					<MoreFavoritesTemplate />
					<Divider marginTop="20px" />
					<BannerMobilePlatform />
					<Divider marginTop="39px" marginBottom="39px" />
					<FooterOrganism />
				</Box>
			</ContainerFluid>
		</>
	);
};
