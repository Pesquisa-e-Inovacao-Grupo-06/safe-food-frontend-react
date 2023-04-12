import { Divider } from "@/pages/home";
import { BannerMobilePlatform } from "../organisms/banner-mobile-platform/banner-mobile-platform";
import { FooterOrganism } from "../organisms/footer/footer-organism";
import { MoreFavoritesTemplate } from "./more-favorites-template";
import Header from "../molecules/header";
import { Box } from "../atoms/box";
import { CardEstablishmentFoodOTemplate } from "./card-establishment-food-organism";
import { Container, ContainerFluid } from "../atoms/container";
import { Input } from "../atoms/input";
import { Column } from "../atoms/column";
import { TextField } from "../molecules/textfield";
import { Button } from "../atoms/button";
import { Title } from "@/styles/components/text/Title";
import {
	StyledColumn,
	StyledRow,
} from "../organisms/card-establishment-food/card-establishment-food-organism";

export const HomeTemplate = ({}) => {
	return (
		<>
			<Header />
			<ContainerFluid>
				<Divider marginBottom="100px"></Divider>
				<Box>
					<Title>O Alimento restritivo que você pode confiar</Title>
					<Box>
						<StyledRow>
							<StyledColumn>
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
											value={""}
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
											value={""}
										></TextField>
										<Divider
											marginAll="10px"
											color="transparent"
										></Divider>{" "}
										<Button style={{ width: "100%" }}>Pesquisar</Button>
									</Column>
								</Container>
							</StyledColumn>
						</StyledRow>
					</Box>
					<CardEstablishmentFoodOTemplate />
					{/* more-favorites */}
					<MoreFavoritesTemplate />
					<Divider
						marginTop="20px"
						color="transparent"
					></Divider>
					{/* banner-mobile */}
					<BannerMobilePlatform />
					<Divider
						marginTop="39px"
						marginBottom="39px"
					></Divider>
					{/* footer */}
					<FooterOrganism />
				</Box>
			</ContainerFluid>
		</>
	);
};
