import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { ProductConsumerTemplate } from "@/components/templates/product-consumer-template";
import { useState } from "react";

type ProductProps = {
	cache: Cache;
	productGateway: SafeFoodProductGateway;
};

function ProductConsumer({ cache, productGateway }: ProductProps) {
	async function fetchProduct() {
		try {
			const res = (await productGateway.findAll()).content[0];
			res.imagem ? setImageUrl(res.imagem) : null;
			setProductName(res.titulo);
			setProductDescription(res.descricao);
			setCategory(res.tipoProduto);
			setPrice(res.preco);
		} catch (error) {
			// faça algo com o erro
		}
	}
	fetchProduct();
	const [imageUrl, setImageUrl] = useState<string>();
	const [productName, setProductName] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [averageRating, setAverageRating] = useState(0);
	const [totalRatings, setTotalRatings] = useState(0);
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState(0);
	const [address, setAddress] = useState("");
	const [waitTime, setWaitTime] = useState("");
	const [operationHours, setOperationHours] = useState("");
	const [phone, setPhone] = useState("");
	const [storeImage, setStoreImage] = useState("");
	const [storeName, setStoreName] = useState("");
	const [storeProducts, setStoreProducts] = useState(0);

	return (
		<ProductConsumerTemplate
			imageUrl={imageUrl}
			productName={productName}
			productDescription={productDescription}
			averageRating={averageRating}
			totalRatings={totalRatings}
			// category={category}
			price={price}
			address={address}
			waitTime={waitTime}
			operationHours={operationHours}
			phone={phone}
			storeImage={storeImage}
			storeName={storeName}
			storeProducts={storeProducts}
		/>
	);
}

export default ProductConsumer;
