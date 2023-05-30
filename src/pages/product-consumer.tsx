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
import { AlertType } from "@/components/atoms/alert";
import { AvaliationProgressBarProps } from "@/components/molecules/avaliation-progress-bar";
import {
	SafeFoodAvaliationModel,
	TypeProductModal,
} from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
import { SafeFoodEstablishmentModel } from "@/app/infra/gateway/safefood/models/SafeFoodEstablishment";
import { Modal } from "@/components/molecules/modal";
import MapsPage from "./maps";
import { GetLatLongFromAddress } from "@/app/domain/usecases/GetLatLongFromAddress";

type ProductProps = {
	cache: Cache;
	productGateway: SafeFoodProductGateway;
	getLatLongFromAddress: GetLatLongFromAddress;
};

function ProductConsumer({ cache, productGateway, getLatLongFromAddress }: ProductProps) {
	const { id } = useParams();
	const consumer: SafeFoodConsumerModel =
		cache.getItem("consumer") !== null
			? JSON.parse(cache.getItem("consumer")!)
			: {};
	const [valueStar, setValueStar] = useState<number>(0);
	const [commentText, setCommentText] = useState<string>("");
	const [isLoadingOnClickAddComments, setIsLoadingOnClickAddComments] =
		useState<boolean>(false);
	const [isVisibleAlert, setIsVisibleAlert] = useState(false);
	const [typeAlert, setTypeAlert] = useState<AlertType>("success");
	const [textAlert, setTextAlert] = useState("Agradecemos por seu feedback!");
	const [isMapVisible, setMapVisible] = useState<boolean>(false);
	const [avaliationBar, setAvaliationBar] = useState<AvaliationProgressBarProps>(
		{}
	);
	const [avaliationsParams, setAvaliationsParams] = useState<
		SafeFoodAvaliationModel[]
	>([]);

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
	const [categorias, setCategorias] = useState<TypeProduct>();
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
			categoria: {} as TypeProductModal,
			estabelecimento: {} as SafeFoodEstablishmentModel,
		})
	);
	const onClickAddComments = async () => {
		console.log("comentário dados: ", commentText, valueStar);
		setAvaliationsParams([
			...avaliationsParams,
			{
				comentario: commentText,
				consumidor: consumer,
				dataCadastro: new Date().toString(),
				id: consumer.id.toString(),
				rate: valueStar,
			},
		]);
		setIsLoadingOnClickAddComments(true);
		setIsVisibleAlert(true);
		try {
			if (id) {
				const res = await productGateway.createComments(id.toString(), {
					comentario: commentText,
					rate: valueStar,
					idConsumidor: consumer.id,
				});
			}
		} catch (error) {
			setIsVisibleAlert(true);
			setTextAlert("Aconteceu algum erro, tente mais tarde!");
			setTypeAlert("danger");
		}
		setIsLoadingOnClickAddComments(false);
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
				setEstablishment(SafeFoodEstablishmentMapper.of(res.data.estabelecimento));
				setProduct(SafeFoodProductMapper.of(res.data));
				setCategorias(SafeFoodTypeProductMapper.of(res.data.categoria));
				setAvaliationsParams(res.data.avaliacoes);
				setAvaliationBar({
					average: res.data.average,
					reviews: res.data.avaliacoes.length.toString(),
					values: [0, 1, 2, 3, 4].map((_, i) => res.data.avaliacoes.filter(item => item.rate === i + 1).length),

				});
			} catch (error) {
				// faça algo com o erro
			}
		}
		fetchProduct();
	}, [id]);

	const onClickDeleteComment = async (idComment: number) => {
		console.log("comentário dados de remoção: ", id, idComment);
		try {
			if (id) {
				const res = await productGateway.deleteComments(parseInt(id), idComment);
				if (res.status == 200 || res.status == 201 || res.status == 204) {
					setTypeAlert("success");
					setTextAlert("Endereço excluído com sucesso!");
					setIsVisibleAlert(true);
				}
			}
		} catch (e) {
			setTypeAlert("danger");
			setTextAlert("Endereço não excluído!");
			setIsVisibleAlert(true);
		}
	};
	const toggleModal = () => {
		setMapVisible(!isMapVisible);
	};
	return (
		<>
			{establishment.params.endereco && establishment.params.endereco.cep && <Modal
				size="md"
				height="md"
				padding="20px 20px 40px 20px"
				responsive
				isOpen={isMapVisible}
				onClickForeground={toggleModal}
			>
				<MapsPage getLatLongFromAddress={getLatLongFromAddress} establishment={establishment} />
			</Modal>}
			<ProductConsumerTemplate
				establishment={establishment}
				product={product}
				category={categorias}
				onClickAddComments={onClickAddComments}
				isLoadingOnClickAddComments={isLoadingOnClickAddComments}
				isVisibleAlert={isVisibleAlert}
				typeAlert={typeAlert}
				textAlert={textAlert}
				avaliationBar={avaliationBar}
				avaliationsProps={avaliationsParams}
				onClickShowMap={toggleModal}
				cache={cache}
				onClickStar={e => {
					setValueStar(e);
				}}
				onTextChange={e => {
					setCommentText(e);
				}}
				onClickTrashDelete={onClickDeleteComment}
			/>
		</>
	);
}

export default ProductConsumer;
