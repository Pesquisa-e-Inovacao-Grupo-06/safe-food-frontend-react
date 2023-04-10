import styled, { css } from "styled-components";
import { HomeTemplate } from "../components/templates/home-template";
import {
	CardCarrouselFoodOrganism,
	CardEstablishmentFoodOrganism,
	CardExpansiveEstablishmentFoodOrganism,
} from "../components/organisms/card-establishment-food/card-establishment-food-organism";
import { Box } from "../components/atoms/box/index";
function Home() {
	return (
		<div>
			<CardExpansiveEstablishmentFoodOrganism />
			<CardEstablishmentFoodOrganism></CardEstablishmentFoodOrganism>
			<CardCarrouselFoodOrganism></CardCarrouselFoodOrganism>
			{/* <HomeTemplate></HomeTemplate> */}
			<Box></Box>
		</div>
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
