import { LandingFormFoodOrganism } from "@/components/molecules/landing-form-food/landing-form-food";
import { Title } from "@/styles/components/text/Title";
import {
	StyledRow,
	StyledColumn,
} from "../card-establishment-food/card-establishment-food-organism";
import bannerHome from "../../../assets/banner-home.svg";
import { Box } from "@/components/atoms/box";
import { ImageAtom } from "@/components/atoms/img";
import styled from "styled-components";

export const Landing = ({}) => {
	return (
		<Box
			margin="0px 0px 30px 0px"
			display="flex"
			alignItems="center"
			width="100%"
			justify="center"
		>
			<StyledRow>
				<StyledColumn>
					<TitleLanding color="orange">
						O <span style={{ color: "green" }}> Alimento</span> restritivo que você
						pode <span style={{ color: "green" }}> confiar</span>
					</TitleLanding>
					<LandingFormFoodOrganism></LandingFormFoodOrganism>
				</StyledColumn>
				<StyledColumn>
					<ImageLanding
						src={bannerHome}
						cursor={false}
						id="img-landing"
					/>
				</StyledColumn>
			</StyledRow>
		</Box>
	);
};

const ImageLanding = styled(ImageAtom)`
	@media (max-width: 1200px) {
		display: none;
	}
`;

const TitleLanding = styled(Title)`
	@media (max-width: 1200px) {
		text-align: center;
	}
`;
