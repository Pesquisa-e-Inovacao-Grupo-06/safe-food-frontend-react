import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { SafeFoodProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper";
import { SafeFoodProductModel } from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
import { HomeTemplate } from "@/components/templates/home-template";
import { ReactNode, useEffect, useState } from "react";

export type HomeProps = {
	cache: Cache;
	productGateway: SafeFoodProductGateway;
};

function Home({ cache, productGateway }: HomeProps) {
	const [nearbyProducts, setNearbyProducts] = useState<SafeFoodProductModel[]>(
		[]
	);
	const [listOfFavoriteProducts, setListOfFavoriteProducts] = useState<
		SafeFoodProductModel[]
	>([]);

	async function fetchProduct() {
		try {
			const res = (await productGateway.findAll()).content;
			console.log(res);
			setNearbyProducts(res);
			setListOfFavoriteProducts(res);
		} catch (error) {
			// faça algo com o erro
		}
	}
	fetchProduct();

	return (
		<HomeTemplate
			nearbyProducts={nearbyProducts.map(SafeFoodProductMapper.of)}
			listOfFavoriteProducts={listOfFavoriteProducts.map(SafeFoodProductMapper.of)}
		></HomeTemplate>
	);
}

export default Home;
