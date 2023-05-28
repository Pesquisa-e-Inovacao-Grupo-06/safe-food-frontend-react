import { Box } from "@/components/atoms/box";
import { StyledButton } from "@/components/atoms/button/styles";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { ProfilePhotoUploadWithPreview } from "@/components/molecules/upload-profile-photo";
import { Subtitle } from "@/styles/components/text/Subtitle";
import styled from "styled-components";
import banner from "../../../assets/food-favorite.png";

export const PBanner = styled(Box)`
	display: flex;
	height: 225px;
	padding-top: 75px;
	background: url(${banner});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	filter: brightness(46%);

	@media (max-width: 800px) {
		justify-content: flex-end;
	}
`;

export const PBtnEditar = styled(StyledButton)`
	margin: auto;
	font-size: 16px;
	font-weight: 400;
	max-height: 36px;
	min-width: 90px;
	color: white;
	border: 2px solid white;
	opacity: 100% !important;
	@media (max-width: 800px) {
		width: auto;
	}
`;

export const PContainer = styled.div`
	width: 70%;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 100px;
`;

export const PContainerProfilePhoto = styled.div`
	position: relative;
	margin-top: -45px;
	margin-left: -80px;

	@media (max-width: 800px) {
		margin-left: auto;
		margin-right: auto;

		span {
			text-align: center;
			margin-left: auto;
			margin-right: auto;
		}
	}
`;

export const PProfilePhoto = styled(ProfilePhotoUploadWithPreview)`
	background: #c2c2c2;
	opacity: 100%;
	border: 5px solid
		${p =>
        p.theme.name == "light"
            ? p.theme.colors.light_gray[200]
            : p.theme.colors.dark_gray[600]};

	@media (max-width: 800px) {
		margin-left: auto;
		margin-right: auto;
		justify-content: center;
	}
`;

export const PContainerSub = styled.div`
	display: grid;
	grid-template-columns: 1fr 0.4fr;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

//Info
export const PContainerInfo = styled.div`
	& ul {
		list-style: none;
	}
	& li {
		margin-top: 24px;
		display: grid;
		grid-template-columns: 0.4fr 1fr 0.1fr;

		span {
			align-self: center;
			font-weight: 600;
			opacity: 80%;
		}

		@media (max-width: 800px) {
			grid-template-columns: 1fr;

			span {
				margin-bottom: 5px;
				opacity: 100%;
			}
		}
	}

	@media (max-width: 600px) {
		button {
			width: 100%;
			svg {
				font-size: x-large;
			}
		}
	}

	input {
		background: ${p =>
        p.theme.name == "light" ? "" : p.theme.colors.dark_gray[400]};
		opacity: 100%;
	}

	.last-input {
		span {
			place-self: start;
			opacity: 80%;
		}
	}

	.penultima-input {
		input {
			align-self: center;
			align-items: center;
		}
	}

	.form-inputs-adm {
		button {
			opacity: 100%;
			width: fit-content;
		}
		@media (max-width: 600px) {
			button {
				width: 100%;
			}
		}
	}
`;

export const PDivider = styled.div`
	height: 1px;
	width: 100%;
	background: ${p =>
        p.theme.name == "light"
            ? p.theme.colors.light_gray[600]
            : p.theme.colors.dark_gray[400]};
	margin: 24px 0;
`;

export const PTitle = styled(Subtitle)`
	font-size: 24px;
	line-height: 36px;
	font-weight: 600;
	opacity: 100%;
`;

export const PBtnBaixar = styled(ButtonIcon)`
	margin-top: 24px;
	width: fit-content;
	max-height: 35px;
	align-items: center;
	color: ${p => p.theme.colors.light_gray[200]};

	& span {
		font-size: 16px;
	}

	@media (max-width: 800px) {
		max-height: none;
	}
`;

export const PBtnImportar = styled(ButtonIcon)`
	margin-top: 16px;
	width: fit-content;
	padding: 12px 20px;
	max-height: 35px;
	align-items: center;
	background: ${p => p.theme.colors.light_gray[800]};
	color: ${p => p.theme.colors.dark_gray[400]};
	border-color: ${p => p.theme.colors.light_gray[800]};

	& span {
		font-size: 16px;
	}

	@media (max-width: 800px) {
		max-height: none;
	}
`;

export const PContainerAddressCard = styled(Box)`
	margin-top: 24px;
`;

export const PContainerInfo3 = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

//Buttom
export const PContainerBtn = styled.div`
	margin-top: 50px;
	display: flex;
	justify-content: flex-end;
	gap: 15px;

	@media (max-width: 800px) {
		justify-content: flex-start;
	}

	@media (max-width: 600px) {
		flex-direction: column-reverse;
	}
`;

export const PBtnSalvar = styled(StyledButton)`
	position: sticky;
	top: 100px;
	font-size: 16px;
	background: #087704;
	border-color: #087704;
	max-height: 36px;
	min-width: 90px;
	padding: 0%;
`;

export const PBtnCancelar = styled(StyledButton)`
	position: sticky;
	top: 100px;
	font-size: 16px;
	max-height: 36px;
	min-width: 90px;
	padding: 0%;
	color: ${p =>
        p.theme.name == "light"
            ? p.theme.colors.dark_gray[800]
            : p.theme.colors.light_gray[200]};
`;
function setState(): [any, any] {
    throw new Error("Function not implemented.");
}
