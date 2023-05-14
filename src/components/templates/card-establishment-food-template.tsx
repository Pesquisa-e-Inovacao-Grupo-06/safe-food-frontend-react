import { Subtitle } from "@/styles/components/text/Subtitle";
import { NearbyFoodsCard } from "../organisms/card-establishment-food/card-establishment-food-organism";
import { Carousel } from "../molecules/carousel";
import { getFoodEstablishmentListMock } from "@/app/domain/entities/FoodEstablishment";
import { Product } from "@/app/domain/entities/Product";

export type CardNearbyFoods = {
	nearbyFoodsItems: Product[];
};

export const CardEstablishmentFoodOTemplate: React.FC<CardNearbyFoods> = ({
	nearbyFoodsItems,
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
				items={nearbyFoodsItems.map((nearbyFoodsItem, index) => (
					<NearbyFoodsCard
						NearbyFoodsItem={nearbyFoodsItem}
						key={nearbyFoodsItem.params.titulo}
					/>
				))}
				itemSize={nearbyFoodsItems.length}
				itemHeight={258}
			></Carousel>
		</>
	);
};
