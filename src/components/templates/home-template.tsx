import { Divider } from "@/pages/home";
import { BannerMobilePlatform } from "../organisms/banner-mobile-platform/banner-mobile-platform";
import { FooterOrganism } from "../organisms/footer/footer-organism";
import Header from "../molecules/header";
import { Box } from "../atoms/box";
import { Container, ContainerFluid } from "../atoms/container";
import { Column } from "../atoms/column";
import { TextField } from "../molecules/textfield";
import { Button } from "../atoms/button";
import { Title } from "@/styles/components/text/Title";
import {
	StyledColumn,
	StyledRow,
} from "../organisms/card-establishment-food/card-establishment-food-organism";
import BannerHome from "../../assets/banner-home.svg";
import { CardEstablishmentFoodOTemplate } from "./card-establishment-food-template";
import { MoreFavoritesTemplate } from "./more-favorites-template";

export const HomeTemplate = ({}) => {
	return (
		<>
			<Header />
			<ContainerFluid>
				<Divider marginBottom="70px"></Divider>
				<Box>
					<Box width="100%">
						<StyledRow>
							<StyledColumn>
								<Title style={{ color: "orange" }}>
									O <span style={{ color: "green" }}> Alimento</span> restritivo que você
									pode <span style={{ color: "green" }}> confiar</span>
								</Title>
								<Container
									size="sm"
									height={"auto"}
								>
									<Column style={{ width: "70%" }}>
										<TextField
											type="email"
											label={"O que vai querer hoje?"}
											id={""}
											required={false}
											onChange={() => {}}
											value={"Bolo de cenoura, Tapioca, Pizza..."}
										></TextField>
										<Divider
											marginAll="10px"
											color="transparent"
										></Divider>
										<TextField
											type="email"
											label={"localização:"}
											id={""}
											required={false}
											onChange={() => {}}
											value={"Rua Sete de Dezembro, n° 7"}
										></TextField>
										<Divider
											marginAll="10px"
											color="transparent"
										></Divider>{" "}
										<Button style={{ width: "100%", height: "40px" }}>Pesquisar</Button>
									</Column>
								</Container>
							</StyledColumn>
							<StyledColumn>
								<img
									src={BannerHome}
									alt=""
								/>
							</StyledColumn>
						</StyledRow>
					</Box>
					<CardEstablishmentFoodOTemplate />
					<MoreFavoritesTemplate />
					<Divider
						marginTop="20px"
						color="transparent"
					></Divider>
					<BannerMobilePlatform />
					<Divider
						marginTop="39px"
						marginBottom="39px"
					></Divider>
					<FooterOrganism />
				</Box>
			</ContainerFluid>
		</>
	);
};
