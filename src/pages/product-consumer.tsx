import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { ProductConsumerTemplate } from "@/components/templates/product-consumer-template";
import { useEffect, useState } from "react";
import { SafeFoodEstablishmentMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodEstablishmentMapper";
import { Establishment } from "@/app/domain/entities/Establishment";
import { SafeFoodProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper";
import { Product } from "@/app/domain/entities/Product";
import { useParams } from "react-router-dom";

type ProductProps = {
	cache: Cache;
	productGateway: SafeFoodProductGateway;
};

function ProductConsumer({ cache, productGateway }: ProductProps) {
	const { id } = useParams();
	const [establishment, setEstablishment] = useState<Establishment>(
		new Establishment({
			id: 0,
			imagem: undefined,
			nome: "",
			email: "",
			tipoUsuario: "",
			dataCriacao: null,
			cnpj: "",
			nomeEmpresa: "",
			celular: "",
			contatoCliente: "",
			descricao: "",
			endereco: {
				apelido: "",
				bairro: "",
				cep: "",
				cidade: "",
				complemento: "",
				estado: "",
				formatado: "",
				id: 0,
				logradouro: "",
				numero: "",
			},
			horarioFuncionamentoSemana: "",
			horarioFuncionamentoFimDeSemana: "",
			isDelivery: false,
			isRetireNoLocal: false,
			isFreteGratis: false,
			tempoEsperaMedio: "",
		})
	);

	const [product, setProduct] = useState<Product>(
		new Product({
			categoria: [{ id: "1", descricao: "", nome: "" }],
			descricao: "",
			id: "",
			imagem: "",
			ingredientes: [],
			preco: 0,
			restricoes: [],
			tipoProduto: "",
			titulo: "",
			unidadeDeVenda: "",
		})
	);
	useEffect(() => {
		async function fetchProduct() {
			try {
				const res = await productGateway.findById(id ?? "1");
				if (!res.data.estabelecimento) {
					return;
				}
				if (!res.data) {
					return;
				}
				console.log("TESTE", res.data);
				setEstablishment(SafeFoodEstablishmentMapper.of(res.data.estabelecimento));
				setProduct(SafeFoodProductMapper.of(res.data));
			} catch (error) {
				// faça algo com o erro
			}
		}
		fetchProduct();
	}, [id]);

	useEffect(() => {
		console.log("establishment", establishment);
	}, [establishment]);

	useEffect(() => {
		console.log("product", product);
		console.log("product", product.params.categoria);
	}, [product]);

	return (
		<ProductConsumerTemplate
			establishment={establishment}
			product={product}
		/>
	);
}

export default ProductConsumer;
