import { Product } from "@/app/domain/entities/Product";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { SafeFoodEstablishmentMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodEstablishmentMapper";
import { SafeFoodProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper";
import { SafeFoodEstablishmentModel } from "@/app/infra/gateway/safefood/models/SafeFoodEstablishment";
import { SafeFoodAvaliationModel } from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
import { AvaliationProgressBarProps } from "@/components/molecules/avaliation-progress-bar";
import { ProductEstablishmentTemplate } from "@/components/templates/product-establishment/product-establishment-template";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export type ProductEstablishmentProps = {
    cache: Cache;
    productGateway: SafeFoodProductGateway;
}
function ProductsEstablishment({ cache, productGateway }: ProductEstablishmentProps) {
    const { idEstablishment, idProduct } = useParams();
    const [product, setProduct] = useState<Product>();
    const [products, setProducts] = useState<Product[]>();
    const [avaliationBar, setAvaliationBar] = useState<AvaliationProgressBarProps>(
        {}
    );
    const [avaliationsParams, setAvaliationsParams] = useState<
        SafeFoodAvaliationModel[]
    >([]);

    async function fetchProduct() {
        if (!idProduct) {
            return;
        }
        if (!idEstablishment) {
            return;
        }
        try {
            const res = await productGateway.findById(idProduct);
            const resAll = await productGateway.findByEstablishmentId(idEstablishment);
            if (!res.data.estabelecimento) {
                return;
            }
            if (!res.data) {
                return;
            }
            setProduct(SafeFoodProductMapper.of(res.data));
            setAvaliationsParams(res.data.avaliacoes);
            const shuffledProducts = resAll.data.map(SafeFoodProductMapper.of).sort(() => Math.random() - 0.5);
            const selectedProducts = shuffledProducts.slice(0, 5);
            console.log("select", { selectedProducts });
            setProducts(selectedProducts);
            setAvaliationBar({
                average: res.data.average,
                reviews: res.data.avaliacoes.length.toString(),
                values: [0, 1, 2, 3, 4].map((_, i) => res.data.avaliacoes.filter(item => item.rate === i + 1).length),

            })

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProduct(); // Chama a função fetchProduct imediatamente

    }, []);



    const establishment: SafeFoodEstablishmentModel =
        cache.getItem("establishment") !== null
            ? JSON.parse(cache.getItem("establishment")!)
            : {};



    return product ? (
        <ProductEstablishmentTemplate
            establishment={SafeFoodEstablishmentMapper.of(establishment)}
            product={product}
            isLoadingOnClickAddComments={false}
            isVisibleAlert={false}
            typeAlert={"success"}
            textAlert={""}
            avaliationBar={avaliationBar}
            avaliationsProps={avaliationsParams}
            cache={cache}
            onClickAddComments={() => { }}
            onClickTrashDelete={() => { }}
            products={products ? products : []}
        />
    ) : <div>ERRO</div>;
}

export default ProductsEstablishment;