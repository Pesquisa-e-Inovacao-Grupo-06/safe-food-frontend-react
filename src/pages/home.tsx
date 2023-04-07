import Header from "../components/molecules/header/index";
import { FooterOrganism } from "../components/organisms/footer/footer-organism";
import { BannerMobilePlatform } from "../components/organisms/banner-mobile-platform/banner-mobile-platform";
import styled, { css } from "styled-components";
import { HomeTemplate } from "../components/templates/home-template";
function Home() {
	return (
		<>
			<HomeTemplate></HomeTemplate>
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
