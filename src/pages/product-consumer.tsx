import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { ProductConsumerTemplate } from "@/components/templates/product-consumer-template";
import { useEffect, useState } from "react";
import { SafeFoodEstablishmentMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodEstablishmentMapper";
import { Establishment } from "@/app/domain/entities/Establishment";
import { SafeFoodProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper";
import { Product } from "@/app/domain/entities/Product";

type ProductProps = {
	cache: Cache;
	productGateway: SafeFoodProductGateway;
};

function ProductConsumer({ cache, productGateway }: ProductProps) {
	const [establishment, setEstablishment] = useState<Establishment>();
	const [product, setProduct] = useState<Product>();
	useEffect(() => {
		async function fetchProduct() {
			try {
				const res = await productGateway.findById("1");
				if (res.data.estabelecimento) {
					setEstablishment(SafeFoodEstablishmentMapper.of(res.data.estabelecimento));
				}
				if (res.data) {
					setProduct(SafeFoodProductMapper.of(res.data));
				}
			} catch (error) {
				// faça algo com o erro
			}
		}
		fetchProduct();
	}, [establishment, product]);

	return (
		<ProductConsumerTemplate
			establishment={establishment!}
			product={product!}
		/>
	);
}

export default ProductConsumer;
