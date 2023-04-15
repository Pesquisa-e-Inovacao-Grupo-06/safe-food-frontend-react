import styled from "styled-components";

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
		display: flex;
	}

	@media (max-width: 900px) {
		& .button-mobile-platform {
			display: flex;
			align-self: normal;
		}

		& .button-desktop-platform {
			display: none;
		}
	}
`;
