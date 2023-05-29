import { Cache } from "@/app/domain/protocols/Cache";
import { ProductEstablishmentTemplate } from "@/components/templates/product-establishment/product-establishment-template";

export type ProductEstablishmentProps = {
    cache: Cache

}
function ProductsEstablishment({ cache }: ProductEstablishmentProps) {

    return (
        <ProductEstablishmentTemplate

        />
    );
}

export default ProductsEstablishment;