import Header from "../components/molecules/header/index";
import { FooterOrganism } from "../components/organisms/footer/footer-organism";
import { BannerMobilePlatform } from "../components/organisms/banner-mobile-platform/banner-mobile-platform";
import styled, { css } from "styled-components";
import { MoreFavoritesTemplate } from "../components/templates/more-favorites-template";
import { Container } from "@/components/atoms/container";
import { Carousel } from "../components/molecules/carousel/index";
import { Box } from "@/components/atoms/box";
import { MoreFavoriteOrganism } from "../components/organisms/more-favorite/more-favorite-organism";
function Home() {
	return (
		<>
			<Header />
			<div style={{ paddingTop: "105px" }}>
				<Container
					height={"200px"}
					size="xxlg"
				>
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
				</Container>
				<Container
					height={"80%"}
					size="xlg"
				>
					<MoreFavoritesTemplate />
					<Divider
						marginTop="20px"
						color="transparent"
					></Divider>
					<BannerMobilePlatform />
					<Divider
						marginTop="39px"
						marginBottom="39px"
					></Divider>
					<FooterOrganism />
				</Container>
			</div>
		</>
	);
}

export default Home;

export const Divider = styled.div<{
	marginTop?: string;
	marginBottom?: string;
	marginAll?: string;

	color?: string;
}>`
	width: 100%;
	height: 1px;
	margin-top: ${p => {
		if (p.marginAll != null) {
			return p.marginAll;
		} else {
			return p.marginTop;
		}
	}};
	margin-bottom: ${p => {
		if (p.marginAll != null) {
			return p.marginAll;
		} else {
			return p.marginBottom;
		}
	}};
	background-color: ${p => {
		if (p.color != null) {
			return css`
				 "transparent";
			`;
		} else {
			return css`
				${({ theme }) => theme.colors.dark_gray[200]};
			`;
		}
	}};
`;
