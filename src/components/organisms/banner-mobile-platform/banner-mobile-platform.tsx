import { ContainerFluid } from "../../atoms/container/index";
import styled from "styled-components";
import mobilePlatform from "../../../assets/mobile-platform.png";
import { Button } from "../../atoms/button/index";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { TextAtom } from "../../atoms/text/text-atom";

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
						<TextAtom typeText="text-md">
							Baixe o nosso APP na PlayStore e desfrute da melhor usabilidade em
							qualquer lugar!
						</TextAtom>
						<Button
							style={{ marginTop: "39px", width: "80%" }}
							className="button-desktop-platform"
							onClick={onClick}
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
					<Button
						style={{ marginTop: "39px" }}
						className="button-mobile-platform"
					>
						Baixar agora
					</Button>
				</StyledBannerMobilePlatformBody>
			</StyledBannerMobilePlatformContainer>
		</StyledBannerDiv>
	);
};

export const StyledBannerDiv = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	@media (min-width: 1024px) {
		&::before,
		&::after {
			z-index: 200;
			position: absolute;
			width: 80px;
			height: 100px;
			border-color: #fe8e27; /* or whatever colour */
			border-style: solid; /* or whatever style */
			content: " ";
		}
		&::before {
			border-width: 8px 0 0 8px;
		}
		&::after {
			border-width: 0 8px 8px 0;
			left: calc(100% - 88px);
			top: calc(100% - 116px);
		}
	}
`;

export const StyledBannerMobilePlatformImage = styled.div`
	max-width: 100%;
`;

export const StyledBannerMobilePlatformContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	max-height: 100%;
	height: 100%;
	gap: 74;
	margin: 8px;
	padding: 20px;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const StyledBannerMobilePlatformBody = styled.div`
	max-width: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	text-align: justify;
	justify-content: center;
	align-items: center;

	& .button-mobile-platform {
		display: none;
	}

	& .button-desktop-platform {
		display: block;
	}

	@media (max-width: 900px) {
		& .button-mobile-platform {
			display: block;
			align-self: normal;
		}

		& .button-desktop-platform {
			display: none;
		}
	}
`;
