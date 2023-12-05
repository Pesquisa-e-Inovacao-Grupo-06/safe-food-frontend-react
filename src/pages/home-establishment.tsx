import { useState, useEffect } from 'react';
import { Cache } from '@/app/domain/protocols/Cache';
import { SafeFoodProductGateway } from '@/app/infra/gateway/safefood/SafeFoodProductGateway';
import { SafeFoodTypeProductGateway } from '@/app/infra/gateway/safefood/SafeFoodTypeProductGateway';
import { SafeFoodRestrictionModel } from '@/app/infra/gateway/safefood/models/SafeFoodRestriction';
import { SafeFoodLoginResponse } from '@/app/infra/gateway/safefood/models/SafeFoodUser';
import { SafeFoodRestrictionMapper } from '@/app/infra/gateway/safefood/mappers/SafeFoodRestrictionMapper';
import HomeEstablishmentTemplate from '@/components/templates/home-establishment/home-establishment-template';
import { SafeFoodCreateProductRequest } from '@/app/infra/gateway/safefood/models/SafeFoodProduct';
import { TypeProduct } from '@/app/domain/entities/TypeProduct';
import { Product } from '@/app/domain/entities/Product';
import { SafeFoodProductMapper } from '@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper';
import { SafeFoodTypeProductMapper } from '@/app/infra/gateway/safefood/mappers/SafeFoodTypeProductMapper';
import { AlertType } from '@/components/atoms/alert';

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
	const [products, setProducts] = useState<Product[]>([]);
	const [typeProducts, setTypeProducts] = useState<TypeProduct[]>([]);
	const [renderListProduct, setRenderListProduct] = useState<boolean>(false);
	const [typeAlert, setTypeAlert] = useState<AlertType>();
	const [textAlert, setTextAlert] = useState<string>();

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
		cache.getItem('restrictions') !== null
			? JSON.parse(cache.getItem('restrictions')!)
			: {};

	const user: SafeFoodLoginResponse =
		cache.getItem('user') !== null ? JSON.parse(cache.getItem('user')!) : {};

	const renderList = () => {
		setRenderListProduct(!renderListProduct);
	};
	const clickToCreateProduct = async (data: SafeFoodCreateProductRequest) => {
		// try {
		const res = await gateway.create(user.usuario.id, data);
		// 	const validStatus = [200, 201];
		// 	if (!validStatus.includes(res.status)) {
		// 		setTypeAlert("warning");
		// 		setTextAlert("Erro ao cadastrar o produto");
		// 	} else {
		// 		setTypeAlert("success");
		// 		setTextAlert("Produto cadastrado com sucesso");
		// 	}
		// } catch (e) {
		// 	setTypeAlert("warning");
		// 	setTextAlert("Erro ao cadastrar o endereço");
		// }
	};

	useEffect(() => {
		async function fetchProducts() {
			try {
				const fetchedProductsById = await productGateway.findByEstablishmentId(
					user.usuario.id.toString()
				);
				const fetchedTypeProducts = await typeProductGateway.findAll();

				setProducts(fetchedProductsById.data.map(SafeFoodProductMapper.of));
				setTypeProducts(fetchedTypeProducts.map(SafeFoodTypeProductMapper.of));
			} catch (error) {
				console.log(error);
			}
		}
		fetchProducts();
	}, [renderListProduct]);

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
			renderListProduct={renderList}
		/>
	);
}

export default HomeEstablishment;
