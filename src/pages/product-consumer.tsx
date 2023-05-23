import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { ProductConsumerTemplate } from "@/components/templates/product-consumer-template";
import { useEffect, useState } from "react";
import { SafeFoodEstablishmentMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodEstablishmentMapper";
import { Establishment } from "@/app/domain/entities/Establishment";
import { SafeFoodProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper";
import { Product } from "@/app/domain/entities/Product";
import { useParams } from "react-router-dom";
import { SafeFoodConsumerModel } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import { SafeFoodTypeProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodTypeProductMapper";
import { TypeProduct } from "@/app/domain/entities/TypeProduct";

type ProductProps = {
	cache: Cache;
	productGateway: SafeFoodProductGateway;
};

function ProductConsumer({ cache, productGateway }: ProductProps) {
	const { id } = useParams();
	const consumer: SafeFoodConsumerModel =
		cache.getItem("consumer") !== null
			? JSON.parse(cache.getItem("consumer")!)
			: {};

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
	const [categorias, setCategorias] = useState<TypeProduct[]>();
	const [product, setProduct] = useState<Product>(
		new Product({
			descricao: "",
			id: "",
			imagem: "",
			ingredientes: [],
			preco: 0,
			restricoes: [],
			tipoProduto: "",
			titulo: "",
			unidadeDeVenda: "",
			// categoria: ,
			avaliacoes: [],
			dataCadastro: "",
			horarioFuncionamentoFimDeSemana: "",
			horarioFuncionamentoSemana: "",
			isDelivery: false,
			isFreteGratis: false,
			isRetireNoLocal: false,
			tempoEsperaMedio: "",
		})
	);
	const onClickAddComments = async () => {
		try {
			//TODO: TIRAR MOCK
			if (id) {
				const res = await productGateway.createComments(id.toString(), {
					comentario: "NOSSA MEU!",
					rate: 5,
					idConsumidor: consumer.id,
				});
			}
		} catch (error) {
			// faça algo com o erro
		}
	};
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
				// setCategorias(res.data.categoria.map(SafeFoodTypeProductMapper.of));
				setCategorias(
					res.data.categoria.map(item => SafeFoodTypeProductMapper.of(item))
				);
			} catch (error) {
				// faça algo com o erro
			}
		}
		fetchProduct();
	}, [id]);
	console.log(product.params.avaliacoes);
	useEffect(() => {
		console.log("establishment", establishment);
	}, [establishment]);

	useEffect(() => {
		console.log("product", product);
		console.log("product", product.params.categoria);
	}, [product]);

	useEffect(() => {
		console.log("product", product);
		console.log("product", product.params.categoria);
	}, [product.params.avaliacoes]);
	useEffect(() => {
		console.log("product", product);
		console.log("product", product.params.categoria);
	}, [categorias]);
	return (
		<ProductConsumerTemplate
			establishment={establishment}
			product={product}
			category={categorias}
			onClickAddComments={onClickAddComments}
		/>
	);
}

export default ProductConsumer;
