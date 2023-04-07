import { MoreFavoriteOrganism } from "../organisms/more-favorite/more-favorite-organism";
import { Divider } from "../../pages/home";
import { Subtitle } from "@/styles/components/text/Subtitle";
export const MoreFavoritesTemplate = ({}) => {
	return (
		<div style={{ marginTop: "40px" }}>
			<Subtitle
				large
				style={{
					marginBottom: "30px",
					width: "fit-content",
					borderBottom: "0.18em solid orange",
				}}
			>
				Mais favoritados
			</Subtitle>
			<MoreFavoriteOrganism
				nameFoodTitle={""}
				descriptionFood={""}
				ingredients={[]}
				priceFood={""}
				nameEstablishment={""}
				workingPlaceEstablishment={false}
				locationEstablishment={""}
			/>
			<Divider
				marginAll="10px"
				color="transparent"
			/>
			<MoreFavoriteOrganism
				nameFoodTitle={""}
				descriptionFood={""}
				ingredients={["asdasd", "123123", "12321"]}
				priceFood={""}
				nameEstablishment={""}
				workingPlaceEstablishment={false}
				locationEstablishment={""}
			/>
		</div>
	);
};
