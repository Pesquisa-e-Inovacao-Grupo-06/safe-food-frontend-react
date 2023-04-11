import { Subtitle } from "@/styles/components/text/Subtitle";
import { CardCarrouselFoodOrganism } from "../organisms/card-establishment-food/card-establishment-food-organism";
import { Carousel } from "../molecules/carousel";

export const CardEstablishmentFoodOTemplate = ({}) => {
	return (
		<>
			<Subtitle
				large
				style={{
					margin: "30px",
					width: "fit-content",
					borderBottom: "0.18em solid orange",
				}}
			>
				Pertos de Você
			</Subtitle>
			<Carousel
				items={[
					<CardCarrouselFoodOrganism></CardCarrouselFoodOrganism>,
					<CardCarrouselFoodOrganism></CardCarrouselFoodOrganism>,
					<CardCarrouselFoodOrganism></CardCarrouselFoodOrganism>,
					<CardCarrouselFoodOrganism></CardCarrouselFoodOrganism>,
					<CardCarrouselFoodOrganism></CardCarrouselFoodOrganism>,
					<CardCarrouselFoodOrganism></CardCarrouselFoodOrganism>,
					<CardCarrouselFoodOrganism></CardCarrouselFoodOrganism>,
				]}
				itemSize={4}
				itemHeight={258}
			></Carousel>
		</>
	);
};
