import { useState, useEffect } from "react";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { SafeFoodTypeProductGateway } from "@/app/infra/gateway/safefood/SafeFoodTypeProductGateway";
import { SafeFoodEstablishmentModel } from "@/app/infra/gateway/safefood/models/SafeFoodEstablishment";
import { SafeFoodRestrictionModel } from "@/app/infra/gateway/safefood/models/SafeFoodRestriction";
import { SafeFoodLoginResponse } from "@/app/infra/gateway/safefood/models/SafeFoodUser";
import { SafeFoodRestrictionMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodRestrictionMapper";
import HomeEstablishmentTemplate from "@/components/templates/home-establishment-template";
import {
	SafeFoodProductFilterRequest,
	SafeFoodProductRequest,
} from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
import { TypeProduct } from "@/app/domain/entities/TypeProduct";
import { Product } from "@/app/domain/entities/Product";
import { SafeFoodProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper";
import { SafeFoodTypeProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodTypeProductMapper";

type HomeEstablishmentProps = {
	cache: Cache;
	productGateway: SafeFoodProductGateway;
	typeProductGateway: SafeFoodTypeProductGateway;
	gateway: SafeFoodProductGateway;
};

function HomeEstablishment({
	cache,
	productGateway,
	typeProductGateway,
	gateway,
}: HomeEstablishmentProps) {
	const clickToCreateProduct = async (data: SafeFoodProductRequest) => {
		const res = await gateway.create(data);
	};

	const restrictions: SafeFoodRestrictionModel[] =
		cache.getItem("restrictions") !== null
			? JSON.parse(cache.getItem("restrictions")!)
			: {};

	const user: SafeFoodLoginResponse =
		cache.getItem("user") !== null ? JSON.parse(cache.getItem("user")!) : {};

	const [products, setProducts] = useState<Product[]>([]);
	const [typeProducts, setTypeProducts] = useState<TypeProduct[]>([]);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const fetchedProducts = await productGateway.findAll();
				const fetchedTypeProducts = await typeProductGateway.findAll();
				setProducts(fetchedProducts.content.map(SafeFoodProductMapper.of));
				setTypeProducts(fetchedTypeProducts.map(SafeFoodTypeProductMapper.of));
				console.log("fetch" + JSON.stringify(fetchedProducts));
			} catch (error) {}
		}
		fetchProducts();
	}, []);

	return (
		<HomeEstablishmentTemplate
			cache={cache}
			productRestriction={restrictions.map(item =>
				SafeFoodRestrictionMapper.of(item, false)
			)}
			typeProduct={typeProducts}
			products={products}
			user={user.usuario}
			productGateway={productGateway}
			onClickCreate={clickToCreateProduct}
		/>
	);
}

export default HomeEstablishment;
