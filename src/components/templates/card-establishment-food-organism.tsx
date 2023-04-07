import { Subtitle } from "@/styles/components/text/Subtitle";
import { CardEstablishmentFoodOrganism } from "../organisms/card-establishment-food/card-establishment-food-organism";
import { Carousel } from "../molecules/carousel";

export const CardEstablishmentFoodOTemplate = ({}) => {
	return (
		<>
			<Subtitle
				large
				style={{
					marginBottom: "30px",
					width: "fit-content",
					borderBottom: "0.18em solid orange",
				}}
			>
				Pertos de Você
			</Subtitle>
			<Carousel
				items={[
					<CardEstablishmentFoodOrganism></CardEstablishmentFoodOrganism>,
					<CardEstablishmentFoodOrganism></CardEstablishmentFoodOrganism>,
					<CardEstablishmentFoodOrganism></CardEstablishmentFoodOrganism>,
					<CardEstablishmentFoodOrganism></CardEstablishmentFoodOrganism>,
					<CardEstablishmentFoodOrganism></CardEstablishmentFoodOrganism>,
					<CardEstablishmentFoodOrganism></CardEstablishmentFoodOrganism>,
					<CardEstablishmentFoodOrganism></CardEstablishmentFoodOrganism>,
				]}
				itemSize={4}
				itemHeight={260}
			></Carousel>
		</>
	);
};
