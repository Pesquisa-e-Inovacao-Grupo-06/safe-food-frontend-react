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

export type LandingProps = {
	textFieldFood: string;
	textFieldLocation: string;
	handleChangeFood: (value: any) => void;
	handleChangeLocation: (value: any) => void;
	onClickSearchLanding: () => void;
};

export const Landing: React.FC<LandingProps> = ({
	handleChangeFood,
	handleChangeLocation,
	textFieldFood,
	onClickSearchLanding,
	textFieldLocation,
}) => {
	return (
		<Box
			margin="0px 0px 0px 0px"
			display="flex"
			alignItems="center"
			width="100%"
			justify="center"
			background=" linear-gradient(90.19deg, rgba(255, 213, 189, 0.8) 49.22%, rgba(255, 164, 80, 0.8) 98.62%)"
			style={{ paddingTop: "80px" }}
		>
			<Box width="80%">
				<StyledRow>
					<StyledColumn>
						<TitleLanding color="orange">
							O <span style={{ color: "green" }}> Alimento</span> restritivo que você
							pode <span style={{ color: "green" }}> confiar</span>
						</TitleLanding>
						<Box
							display="flex"
							justify="center"
							alignItems="center"
							flexDirection="row"
						>
							<LandingFormFoodOrganism
								textFieldFood={textFieldFood}
								textFieldLocation={textFieldLocation}
								handleChangeFood={handleChangeFood}
								handleChangeLocation={handleChangeLocation}
								onClickSearchLanding={onClickSearchLanding}
							></LandingFormFoodOrganism>
						</Box>
					</StyledColumn>
					<StyledColumn>
						<ImageLanding
							src={bannerHome}
							cursor={"false"}
							id="img-landing"
						/>
					</StyledColumn>
				</StyledRow>
			</Box>
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
