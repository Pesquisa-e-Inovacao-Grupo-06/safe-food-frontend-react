import { useState, useEffect } from "react";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { SafeFoodTypeProductGateway } from "@/app/infra/gateway/safefood/SafeFoodTypeProductGateway";
import { SafeFoodRestrictionModel } from "@/app/infra/gateway/safefood/models/SafeFoodRestriction";
import { SafeFoodLoginResponse } from "@/app/infra/gateway/safefood/models/SafeFoodUser";
import { SafeFoodRestrictionMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodRestrictionMapper";
import HomeEstablishmentTemplate from "@/components/templates/home-establishment-template";
import { SafeFoodCreateProductRequest } from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
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
	const clickToCreateProduct = async (data: SafeFoodCreateProductRequest) => {
		const res = await gateway.create(user.usuario.id, data);
	};

	const clickToUpdateProduct = async (
		id: string,
		data: SafeFoodCreateProductRequest
	) => {
		const res = await gateway.update(id, data);
	};

	const clickToDeleteProduct = async (id: string) => {
		const res = await gateway.delete(id);
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
			onClickUpdate={clickToUpdateProduct}
			onClickDelete={clickToDeleteProduct}
		/>
	);
}

export default HomeEstablishment;
