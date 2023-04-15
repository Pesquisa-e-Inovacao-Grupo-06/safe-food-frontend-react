import { MoreFavoriteOrganism } from "../organisms/more-favorite/more-favorite-organism";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { getMoreFavoriteListMock } from "@/app/domain/entities/MoreFavorite";
import { Divider } from "../atoms/divider";
export const MoreFavoritesTemplate = ({ }) => {
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
			{getMoreFavoriteListMock.map((i, index) => (
				<>
					<MoreFavoriteOrganism moreFavoriteType={i.params} />
					<Divider marginAll="10px" />
				</>
			))}
		</div>
	);
};
