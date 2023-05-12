import { Cache } from "@/app/domain/protocols/Cache";
import { ProductConsumerTemplate } from "@/components/templates/product-consumer-template";

interface ProductProps {
	cache: Cache;
}

function ProductConsumer({ cache }: ProductProps) {
	return (
		<ProductConsumerTemplate
		// imageUrl={""}
		// productName={""}
		// productDescription={""}
		// averageRating={0}
		// totalRatings={0}
		// category={[]}
		// price={0}
		// address={""}
		// waitTime={""}
		// operationHours={""}
		// phone={""}
		// storeImage={""}
		// storeName={""}
		// storeProducts={0}
		/>
	);
}

export default ProductConsumer;
