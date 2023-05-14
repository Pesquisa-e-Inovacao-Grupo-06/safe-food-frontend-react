import { Subtitle } from "@/styles/components/text/Subtitle";
import { CardCarrouselFoodOrganism } from "../organisms/card-establishment-food/card-establishment-food-organism";
import { Carousel } from "../molecules/carousel";
import { getFoodEstablishmentListMock } from "@/app/domain/entities/FoodEstablishment";
import { Product } from "@/app/domain/entities/Product";

export type NearbyFoodsCardParams = {
	nearbyFoods: Product[];
};

export const NearbyFoodsCard: React.FC<NearbyFoodsCardParams> = ({
	nearbyFoods,
}) => {
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
				items={nearbyFoods.map((i, index) => (
					<CardCarrouselFoodOrganism
						nearbyFood={i}
						key={i.params.titulo}
					/>
				))}
				itemSize={4}
				itemHeight={258}
			></Carousel>
		</>
	);
};
