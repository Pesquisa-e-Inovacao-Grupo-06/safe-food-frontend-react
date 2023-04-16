import { ContainerFluid } from "../../atoms/container/index";
import styled from "styled-components";
import mobilePlatform from "../../../assets/mobile-platform.png";
import { Button } from "../../atoms/button/index";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Text } from "../../atoms/text";
import {
	StyledBannerDiv,
	StyledBannerMobilePlatformContainer,
	StyledBannerMobilePlatformBody,
	StyledBannerMobilePlatformImage,
} from "./style";
import { Divider } from "@/components/atoms/divider";
import { Box } from "@/components/atoms/box";

export type BannerMobilePlatformProps = {
	onClick?: () => void;
};

export const BannerMobilePlatform: React.FC<BannerMobilePlatformProps> = ({
	onClick,
}) => {
	return (
		<StyledBannerDiv id="content">
			<StyledBannerMobilePlatformContainer>
				<StyledBannerMobilePlatformBody>
					<div>
						<Subtitle>Gosta da Nossa Plataforma?</Subtitle>
						<Box width="80%">
							<Text typeText="text-md">
								Baixe o nosso APP na PlayStore e desfrute da melhor usabilidade em
								qualquer lugar!
							</Text>
						</Box>
						<Divider marginTop="39px" />
						<Button
							className="button-desktop-platform"
							onClick={onClick}
							height={40}
						>
							Baixar agora
						</Button>
					</div>
				</StyledBannerMobilePlatformBody>
				<StyledBannerMobilePlatformBody>
					<StyledBannerMobilePlatformImage>
						<img
							id="img"
							src={mobilePlatform}
							style={{ maxHeight: "100%" }}
						/>
					</StyledBannerMobilePlatformImage>

					<Button className="button-mobile-platform">Baixar agora</Button>
				</StyledBannerMobilePlatformBody>
			</StyledBannerMobilePlatformContainer>
		</StyledBannerDiv>
	);
};
