import Header from '@/components/molecules/header';
import { BodyTemplate } from '@/components/templates/body-template';
import styled from 'styled-components';
import banner from '../assets/Rectangle.png';
import { Subtitle } from '@/styles/components/text/Subtitle';
import { Text } from '@/components/atoms/text';
import fruits from '../assets/banner-img-fruit.png';
import BoloFruits from '../assets/bolo-fruits.png';
import BoloChocalte from '../assets/bolo-chocalate.png';
import { FaUsers } from 'react-icons/fa';
import { TbTargetArrow } from 'react-icons/tb';
import { MdOutlineFactCheck } from 'react-icons/md';
import BannerFinal from '../assets/Banner-meio.png';

export const About: React.FC = () => {
	return (
		<>
			<Header />
			<ContainerAbout>
				<div className="container-banner-about">
					<div className="container-banner-text-about">
						<Subtitle>A SOLUÇÃO QUE VOCÊ PODE CONFIAR!</Subtitle>
						<Text>
							Reinventando o conceito das restrições e escolhas. para que você
							possa apreciar a vida com segurança e sem medo!
						</Text>
						<div>
							<img src={fruits} />
						</div>
					</div>
				</div>
				<div className="container-quem-somos-about">
					<div className="container-titulo-quem-somos-about">
						<Text>
							QUEM SOMOS <FaUsers />
						</Text>
						<DividerTextAbout />
					</div>
					<Text>
						A Safe Food é um app que está aqui pra ajudar qualquer pessoa que
						tenha restrições alimentares de todos os tipos: intolerâncias,
						alergias, restrições culturais ou religiosas, além daqueles que
						seguem um estilo de vida específico ou têm problemas de saúde. É só
						baixar e aproveitar!
					</Text>
				</div>
				<div className="container-quem-somos-about">
					<div className="container-titulo-quem-somos-about">
						<Text>
							OBJETIVO <TbTargetArrow className="target-arrow" />
						</Text>
						<DividerTextAbout />
					</div>
					<Text>
						Nosso objetivo principal é deixar a vida mais fácil e segura para
						que as pessoas que possuem algum tipo de restrição alimentar, seja
						intolerância, alergia, estilo de vida diferente, religião específica
						ou problemas de saúde. Queremos garantir que todo mundo possa curtir
						a vida sem preocupações na hora de comer!
					</Text>
				</div>
				<div className="container-bolo-chocolate-about">
					<div className="container-img-bolo-chocolate-about">
						<img src={BoloChocalte} />
					</div>
					<div className="container-quem-somos-about">
						<div className="container-titulo-quem-somos-about">
							<Text>
								NOSSA MISSÃO <MdOutlineFactCheck />
							</Text>
							<DividerTextAbout />
						</div>
						<Text>
							A ideia é conectar pessoas que possuem gostos mais específicos com
							os lugares certos, pra garantir que todo mundo se sinta seguro e
							satisfeito nos momentos importantes da vida. Queremos facilitar
							essa conexão e fazer todo mundo se sentir bem!
						</Text>
					</div>
				</div>
				<div className="container-bolo-fruits-about">
					<div className="container-quem-somos-about">
						<div className="container-titulo-quem-somos-about">
							<Text>POR QUE A SAFE FOOD?</Text>
							<DividerTextAbout />
						</div>
						<Text>
							Imagina este cenário: você tá perdido em um lugar desconhecido,
							sem saber onde tem restaurantes ou bares legais por perto. Aí vem
							uma pessoa "normal" que come qualquer coisa sem problemas, mas
							nós, que somos mais seletivos, não podemos arriscar comer em
							qualquer lugar, né? Aí que entra a Safe Food para te ajudar! Ela
							veio pra facilitar a vida das pessoas e encontrar os melhores
							lugares para você comer, levando em conta as suas necessidades que
							já está cadastrada no app. É mega prático e rápido! Se você já tem
							uma conta, quando abrir o app ou fizer login, a Safe Food já vai
							ver onde você está e te mostrar os melhores lugares pra você se
							alimentar com segurança. Demais, né?
						</Text>
					</div>
					<div className="container-img-bolo-chocolate-about">
						<img src={BoloFruits} />
					</div>
				</div>
				<div className="container-banner-final-new-home">
					<div className="container-img-banner-final-new-home">
						<Text>
							Reinventando o conceito das restrições e escolhas, para que você
							possa apreciar a vida com segurança e sem medo!
						</Text>
					</div>
				</div>
				<BodyTemplate footer />
			</ContainerAbout>
		</>
	);
};

const DividerTextAbout = styled.div`
	height: 5px;
	background: ${p =>
		p.theme.name == 'light' ? '#fddbbc' : p.theme.colors.dark_gray[400]};
`;

const ContainerAbout = styled.div`
	padding-top: 64px;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0fr 0fr 0fr 0fr 0fr 0fr 0fr;

	.container-banner-about {
		background-image: url(${banner});
		background-repeat: no-repeat;
		background-size: contain;
		height: min-content;
		margin: 0;

        @media (max-width: 1020px) {
            background-size: unset;
        }

		> .container-banner-text-about {
			align-items: center;
			justify-content: center;
			flex-direction: column;
			height: 100%;
			padding-top: 115px;

			> h2 {
				line-height: 40px;
				text-align: center;
				font-size: 35px;
				color: ${p => p.theme.colors.light_gray[200]};
				margin-bottom: 15px;

				@media (max-width: 600px) {
					font-size: 25px;
				}
				@media (max-width: 400px) {
					font-size: 18px;
				}
			}

			> p {
				text-align: center;
				font-size: 20px;
				color: ${p => p.theme.colors.light_gray[200]};
				line-height: 25px;
				@media (max-width: 600px) {
					font-size: 15px;
				}
				@media (max-width: 400px) {
					font-size: 12px;
				}
			}

			> div {
				height: 100%;
				margin-top: 50px;
				text-align: center;
				> img {
					width: 65%;
				}
			}
		}
	}

	.container-quem-somos-about {
		margin: 100px 125px 0 125px;

		> .container-titulo-quem-somos-about {
			display: grid;
			gap: 10px;
			width: 65%;
			margin-bottom: 25px;

			> p {
				display: flex;
				align-items: center;
				color: ${p => p.theme.colors.primary[600]};
				font-size: 32px;
				font-weight: 600;
				gap: 10px;
				line-height: 32px;
			}

			.target-arrow {
				fill: none;
				color: ${p =>
					p.theme.name == 'light' ? '#474747' : p.theme.colors.light_gray[400]};
			}
		}

		> p:nth-child(2) {
			font-size: 20px;
			font-weight: 500;
			line-height: 27px;
		}

		@media (max-width: 700px) {
			margin: 100px 25px 0 25px;
		}
	}

	.container-bolo-chocolate-about {
		display: grid;
		grid-template-columns: 0fr 1fr;
		margin: 125px 125px;
		gap: 25px;

		.container-img-bolo-chocolate-about {
			width: 100%;
			> img {
				height: auto;
			}
		}

		> div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin: 0;

			> div {
				width: 100% !important;
			}
		}

		@media (max-width: 1020px) {
			grid-template-columns: 1fr;

			.container-img-bolo-chocolate-about {
				> img {
					width: fit-content;
					place-self: center;
				}
			}

			> div {
				> div {
					width: 65% !important;
				}
			}
		}

		@media (max-width: 750px) {
			margin: 100px 25px 0 25px;
		}

		@media (max-width: 600px) {
			.container-img-bolo-chocolate-about {
				> img {
					width: 100%;
				}
			}
		}
	}

	.container-bolo-fruits-about {
		display: grid;
		grid-template-columns: 1fr 0fr;
		margin: 0px 125px;
		gap: 25px;

		> div:nth-child(2) {
			display: flex;
			align-items: center;
			> img {
				height: auto;
				max-width: 450px;
			}
		}

		> div:nth-child(1) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin: 0;

			> div {
				width: 100%;
			}
		}

		@media (max-width: 1020px) {
			grid-template-columns: 1fr;
			grid-template-rows: 0fr 0fr;

			> div:nth-child(1) {
				grid-row: 2;
			}

			> div:nth-child(2) {
				grid-row: 1;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		@media (max-width: 700px) {
			margin: 100px 25px 0 25px;
			> div:nth-child(2) {
				> img {
					max-width: 300px;
				}
			}
		}

		@media (max-width: 500px) {
			> div:nth-child(2) {
				> img {
					max-width: 200px;
				}
			}
		}
	}

	//banner final
	.container-banner-final-new-home {
		margin-top: 75px;
		> .container-img-banner-final-new-home {
			display: flex;
			align-items: center;
			justify-content: center;
			background-image: url(${BannerFinal});
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

	> section:nth-child(7) {
		height: fit-content;
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
