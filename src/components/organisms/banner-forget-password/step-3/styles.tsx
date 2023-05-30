import styled from "styled-components";

export const ContainerBannerStep3ForgetPassword=styled.div`
	padding-top: 50px;

	> .container-banner-step3-forget-password {
		margin: auto;
		max-width: 760px;
		padding: 50px 10px;
		border-radius: 8px;
		box-shadow: 0px 2px 4px 1px #00000022;

		> .container-step3-forget-password {
			display: grid;
			height: 100%;
			grid-template-rows: 0fr 0fr 0fr;
			width: fit-content;
			margin: auto;
			grid-row-gap: 15px;
			max-width: 100%;

			grid-template-areas:
				"header"
				"main"
				"footer";

			> .header-step3-forget-password {
				grid-area: header;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			> .main-step3-forget-password {
				grid-area: main;
				display: grid;
				grid-row-gap: 10px;

				> .container-img-step3-forget-passwor {
					height: fit-content;
					text-align: center;
					> img {
						image-rendering: pixelated;
						max-width: 385px;
						object-fit: cover;
						width: 100%;
						border-radius: 4px;
					}
				}

				> .text-step3-forget-password {
					display: grid;
					grid-row-gap: 20px;
					margin: 5px 0 15px 0;

					> p {
						text-align: center;
						font-size: 32px;
						font-weight: 500;
						color: ${p =>
		p.theme.name=="light"
			? p.theme.colors.dark_gray[400]
			:p.theme.colors.light_gray[800]};
					}

					> h2 {
						text-align: center;
						color: ${p =>
		p.theme.name=="light"
			? p.theme.colors.dark_gray[200]
			:p.theme.colors.dark_gray[200]};
						font-size: 12px;
						line-height: normal;
						font-weight: 600;
					}
				}
			}

			> .footer-step3-forget-password {
				grid-area: footer;

				> button {
					max-height: 34px;
					max-width: fit-content;
					font-size: 16px;
					margin: auto;
				}
			}

			@media (max-width: 600px) {
				.footer-step3-forget-password {
					> button {
						max-width: 100%;
					}
				}

				.text-step3-forget-password {
					> p {
						font-size: 24px !important;
					}
				}
			}
		}
	}
`;
