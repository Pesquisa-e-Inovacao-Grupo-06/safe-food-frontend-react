import { Subtitle } from "@/styles/components/text/Subtitle";
import { CardCarrouselFoodOrganism } from "../organisms/card-establishment-food/card-establishment-food-organism";
import { Carousel } from "../molecules/carousel";
import { getFoodEstablishmentListMock } from "@/app/domain/entities/FoodEstablishment";

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
				items={getFoodEstablishmentListMock.map((i, index) => (
					<CardCarrouselFoodOrganism
						establishemntFood={i.params}
						key={i.params.img + index}
					/>
				))}
				itemSize={4}
				itemHeight={258}
			></Carousel>
		</>
	);
};
