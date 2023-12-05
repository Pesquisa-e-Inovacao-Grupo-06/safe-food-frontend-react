import Header from "@/components/molecules/header";
import { BodyTemplate } from "@/components/templates/body-template";
import styled from "styled-components";
import { Title } from "@/styles/components/text/Title";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Text } from "@/components/atoms/text";
import { Subtitle } from "@/styles/components/text/Subtitle";
import BannerFinal from "../assets/Banner-meio.png";
import { useModalHome } from "@/app/contexts/ModalProvider";
import { useNavigate } from "react-router-dom";

export const NewHome: React.FC = () => {
	const { setModal } = useModalHome();
	const navigate = useNavigate()

	return (
		<>
			<Header />
			<ContainerNewHome>
				<div className="container-banner-new-home">
					<div className="container-banner-info-new-home">
						<TitleLanding color="orange">
							O <span style={{ color: "green" }}> Alimento</span> restritivo
							<br />
							que você pode
							<br /> <span style={{ color: "green" }}> confiar</span>
						</TitleLanding>
						<ButtonIcon icon={<MdOutlineArrowForwardIos />}
							onClick={() => setModal('establishment')}
						>Conheça já</ButtonIcon>
					</div>
				</div>
				<div className="container-info-new-home">
					<div className="conatiner-destaque-new-home">
						<Subtitle>PRINCIPAIS CATEGORIAS</Subtitle>
						<div className="conatiner-img-destaque-new-home">
							<div className="card-img-destaque-new-home">
								<img src={"https://safefood-nfs.hopto.org/assets/Zero Lactose.png"} />
								<Text>Zero Lactose</Text>
							</div>
							<div className="card-img-destaque-new-home">
								<img src={"https://safefood-nfs.hopto.org/assets/Zero Grúten.png"} />
								<Text>Zero Glúten</Text>
							</div>
							<div className="card-img-destaque-new-home">
								<img src={"https://safefood-nfs.hopto.org/assets/Vegano.png"} />
								<Text>Vegano</Text>
							</div>
							<div className="card-img-destaque-new-home">
								<img src={"https://safefood-nfs.hopto.org/assets/Vegetariano.png"} />
								<Text>Vegetariano</Text>
							</div>
							<div className="card-img-destaque-new-home">
								<img src={"https://safefood-nfs.hopto.org/assets/Zero açucar.png"} />
								<Text>Zero Açúcar</Text>
							</div>
						</div>
					</div>
					<DividerNewHome />
					<div className="container-saiba-mais-new-home">
						<div className="container-info-saiba-mais-new-home">
							<Subtitle>
								Aqui você come com <br /> segurança!
							</Subtitle>
							<Text>
								Nosso principal objetivo é promover facilidades e segurança no dia a dia
								das pessoas com qualquer restrição alimentar, seja ela uma intolerância,
								alergia, estivo de vida, religiosa ou problemas de saúde.
							</Text>
							<ButtonIcon icon onClick={() => navigate("/about")}>Saiba mais</ButtonIcon>
						</div>
						<div className="container-img-saiba-mais-new-home">
							<div>
								<img src={"https://safefood-nfs.hopto.org/assets/Mask group.png"} />
							</div>
							<div>
								<img src={"https://safefood-nfs.hopto.org/assets/Mask group (1).png"} />
							</div>
							<div>
								<img src={"https://safefood-nfs.hopto.org/assets/Mask group (2).png"} />
							</div>
							<div>
								<img src={"https://safefood-nfs.hopto.org/assets/Mask group (3).png"} />
							</div>
						</div>
					</div>
					<DividerNewHome />
					<div className="container-cadastro-new-home">
						<div className="container-img-new-home">
							<div>
								<img src={"https://safefood-nfs.hopto.org/assets/pexels-kaboompics-com-5697 1.png"} />
							</div>
						</div>
						<div className="container-text-new-home">
							<Subtitle>
								<span style={{ color: "green" }}>Junte-se ao</span> Safe Food
							</Subtitle>
							<Subtitle>Registre seu estabelecimento!</Subtitle>
							<Text>
								Faça parte de um mercado em constante crescimento. Saiba como alcançar
								um novo público e visibilidade para o seu negócio.
							</Text>
							<ButtonIcon icon onClick={() => setModal('establishment')}>Cadastre-se</ButtonIcon>
						</div>
					</div>
				</div>
				<div className="container-banner-final-new-home">
					<div className="container-img-banner-final-new-home">
						<Text>
							Reinventando o conceito das restrições e escolhas, para que você possa
							apreciar a vida com segurança e sem medo!
						</Text>
					</div>
				</div>
				<BodyTemplate footer></BodyTemplate>
			</ContainerNewHome>
		</>
	);
};

const ContainerNewHome = styled.div`
	padding-top: 76px;

	//banner
	.container-banner-new-home {
		background-image: url("https://safefood-nfs.hopto.org/assets/new-Banner.png");
		background-position: left center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 90dvh;
		margin: 0;

		> .container-banner-info-new-home {
			padding-top: 90px;
			width: 70%;

			> button {
				width: fit-content;
				margin-top: 30px;
				margin-left: auto;
				margin-right: auto;
				border: 2px solid #fe8e27;
				background-color: #fe8e27;
			}

			@media (max-width: 1240px) {
				width: 73%;
			}
			@media (max-width: 1120px) {
				width: 80%;
			}
			@media (max-width: 1050px) {
				width: 85%;
			}
			@media (max-width: 950px) {
				width: 100%;
			}

			@media (max-width: 750px) {
				padding: 0;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
			}

			@media (max-width: 400px) {
				> h1 {
					font-size: 30px;
					line-height: 50px;
				}
			}
		}
	}

	//info container
	.container-info-new-home {
		margin: 80px;
		@media (max-width: 500px) {
			margin: 80px 20px;
		}
	}

	//destaque
	.conatiner-destaque-new-home {
		> .conatiner-img-destaque-new-home {
			margin-top: 20px;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
			gap: 10px;
			width: 100%;

			> .card-img-destaque-new-home {
				width: 100%;
				text-align-last: center;
				> img {
					height: auto;
					width: 100%;

					@media (max-width: 500px) {
						width: auto;
					}
				}
				> p {
					font-weight: 600;
				}
			}

			@media (max-width: 500px) {
				grid-template-columns: 1fr;
			}
		}

		@media (max-width: 500px) {
			text-align-last: center;
		}
	}

	//saiba mais
	.container-saiba-mais-new-home {
		margin: 0 80px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;

		> .container-info-saiba-mais-new-home {
			grid-column: 1;
			display: grid;
			gap: 20px;

			> h2 {
				font-size: 40px;
				line-height: 45px;
			}

			> p {
				font-size: 20px;
				font-weight: normal;
				line-height: 30px;
				color: ${p =>
		p.theme.name == "light" ? "#474747" : p.theme.colors.light_gray[800]};
			}
			> button {
				width: fit-content;
				place-self: end;
				margin-right: auto;
				border: 2px solid #fe8e27;
				background-color: #fe8e27;

				@media (max-width: 500px) {
					width: 100%;
				}
			}

			@media (max-width: 1125px) {
				> h2 {
					font-size: 25px;
					line-height: 30px;
				}
				> p {
					font-size: 18px;
					line-height: 25px;
				}
			}
		}

		> .container-img-saiba-mais-new-home {
			grid-column: 2;
			display: grid;
			grid-template-columns: 0fr 0fr;
			grid-template-rows: 0fr 0fr;
			gap: 10px;
			justify-content: end;

			> div {
				border-radius: 8px;
				filter: drop-shadow(4px 4px 2px #00000022);
				> img {
					height: 100%;
					max-width: 160px;
				}
			}
		}

		@media (max-width: 970px) {
			grid-template-columns: 1fr;
			grid-template-rows: 0fr 1fr;

			> .container-info-saiba-mais-new-home {
				grid-column: 1 / 3;
				grid-row: 2;
			}

			> .container-img-saiba-mais-new-home {
				height: fit-content;
				grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
				grid-column: 1 / 3;
				grid-row: 1;

				> div {
					> img {
						max-width: 100%;
					}
				}
			}
		}

		@media (max-width: 750px) {
			margin: 0;
		}

		@media (max-width: 400px) {
			> .container-img-saiba-mais-new-home {
				justify-self: center;
			}
		}
	}

	//junte-se
	.container-cadastro-new-home {
		margin: 0 80px;
		display: grid;
		grid-template-columns: 0fr 1fr;
		gap: 50px;
		> .container-img-new-home {
			height: fit-content;
			> div {
				> img {
					filter: drop-shadow(4px 4px 2px #00000022);
					max-width: 350px;
				}
			}
		}

		> .container-text-new-home {
			width: fit-content;
			> h2:nth-child(1) {
				color: orange;
				font-size: 40px;
				margin-bottom: 20px;
				line-height: 45px;
			}
			> h2:nth-child(2) {
				font-size: 25px;
			}

			> p {
				width: 85%;
				font-size: 20px;
				font-weight: normal;
				line-height: 30px;

				@media (max-width: 1300px) {
					width: 85%;
				}
			}

			> button {
				margin-top: 10px;
				width: fit-content;
				place-self: end;
				margin-right: auto;
				border: 2px solid #fe8e27;
				background-color: #fe8e27;

				@media (max-width: 500px) {
					width: 100%;
				}
			}
			display: grid;
			gap: 20px;
		}

		@media (max-width: 970px) {
			grid-template-columns: 1fr;
			grid-template-rows: 0fr 1fr;

			> .container-img-new-home {
				> div {
					width: fit-content;
					margin: auto;
					> img {
						width: 100%;
					}
				}
			}
		}
		@media (max-width: 700px) {
			margin: 0;
		}
	}

	//banner final
	.container-banner-final-new-home {
		margin-top: 200px;
		> .container-img-banner-final-new-home {
			display: flex;
			align-items: center;
			justify-content: center;
			background-image: url("https://safefood-nfs.hopto.org/assets/Banner-meio.png");
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			height: 25dvh;
			padding: 0 150px;

			> p {
				text-align: center;
				font-size: 36px;
				line-height: 40px;
				color: ${p => p.theme.colors.light_gray[200]};

				@media (max-width: 1100px) {
					font-size: 26px;
					line-height: 30px;
				}
				@media (max-width: 700px) {
					font-size: 20px;
					line-height: 25px;
				}
				@media (max-width: 400px) {
					font-size: 18px;
					line-height: 24px;
				}
				@media (max-width: 300px) {
					font-size: 16px;
					line-height: 18px;
				}
				@media (max-width: 270px) {
					font-size: 12px;
					line-height: 16px;
				}
			}

			@media (max-width: 700px) {
				padding: 0 50px;
			}
		}
	}

	//footer
	> section:nth-child(4) {
		> div:nth-child(1) {
			margin-bottom: 50px;
		}
		> div:nth-child(2) {
			> div:nth-child(1) {
				padding-top: 0px;
			}
		}
	}
`;

const TitleLanding = styled(Title)`
	text-align: center;
	@media (max-width: 1200px) {
		text-align: center;
	}
`;

const DividerNewHome = styled.div`
	margin: 100px 0;
	margin-left: auto;
	margin-right: auto;
	background: ${p =>
		p.theme.name == "light" ? "#fddbbc" : p.theme.colors.dark_gray[400]};
	height: 5px;
	width: 50%;
`;
