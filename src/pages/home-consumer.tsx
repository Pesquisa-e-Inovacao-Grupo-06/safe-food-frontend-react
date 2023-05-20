import { Product } from "@/app/domain/entities/Product";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { SafeFoodProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper";
import HomeConsumerTemplate from "@/components/templates/home-consumer-template";
import { useState } from "react";

type HomeConsumer = {
	cache: Cache;
	productGateway: SafeFoodProductGateway;
};

function HomeConsumer({ cache, productGateway }: HomeConsumer) {
	const [product, setProduct] = useState<Product[]>([]);

	async function fetchProduct() {
		try {
			const res = await productGateway.findAll();
			setProduct(res.content.map(SafeFoodProductMapper.of));
		} catch (error) {
			// faça algo com o erro
		}
	}

	fetchProduct();

	return <HomeConsumerTemplate products={product} />;
}

export default HomeConsumer;
