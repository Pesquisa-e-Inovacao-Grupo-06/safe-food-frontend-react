import { Restriction } from "@/app/domain/entities/Restriction";
import { SafeFoodGenericDataResponse } from "./SafeFoodResponse";
import { SafeFoodRestrictionModel } from "./SafeFoodRestriction";
import {
	SafeFoodEstablishmentModel,
	SafeFoodGetProductEstablishmentRequest,
} from "./SafeFoodEstablishment";
import { SafeFoodConsumerModel } from "./SafeFoodConsumer";

//produtos/{id}
export type SafeFoodProductModel = {
	id: string;
	titulo: string;
	descricao: string;
	preco: number;
	imagem?: string;
	ingredientes: string[];
	unidadeDeVenda: string;
	dataCadastro: string;
	estabelecimento: SafeFoodEstablishmentModel;
	horarioFuncionamentoSemana: string;
	horarioFuncionamentoFimDeSemana: string;
	isDelivery: boolean;
	isRetireNoLocal: boolean;
	isFreteGratis: boolean;
	tempoEsperaMedio: string;
	categoria: TypeProductModal;
	restricoes: SafeFoodRestrictionModel[];
	avaliacoes: SafeFoodAvaliationModel[];
	tipoProduto: string;
};

export type SafeFoodAvaliationModel = {
	id: string;
	rate: number;
	comentario: string;
	dataCadastro: string;
	consumidor: SafeFoodConsumerModel;
};

export type TypeProductModal = {
	id: number;
	nome: string;
	descricao: string;
};

export type SafeFoodAvaliationRequest = {
	rate: number;
	comentario: string;
	idConsumidor: number;
};

export type SafeFoodProductsModel = {
	content: SafeFoodProductModel[];
};

export type SafeFoodProductResponse =
	SafeFoodGenericDataResponse<SafeFoodProductModel>;

export type SafeFoodProductEstablishmentResponse = SafeFoodGenericDataResponse<
	SafeFoodProductModel[]
>;

export type SafeFoodProductsResponse = SafeFoodPage<SafeFoodProductModel>;

export type SafeFoodPostCommentsProductEstablishmentRequest =
	SafeFoodAvaliationRequest;

export type SafeFoodSort = {
	empty: boolean;
	sorted: boolean;
	unsorted: boolean;
};

export type SafeFoodPage<T> = {
	pageable: string;
	totalPages: number;
	totalElements: number;
	last: boolean;
	size: number;
	number: number;
	sort: SafeFoodSort;
	numberOfElements: number;
	first: boolean;
	empty: boolean;
	content: T[];
};

export type OrderSelect = "TODOS" | "QTD_AVALIACOES" | "LANCAMENTOS" | "PRECO"
export type directionSelect = "asc" | "desc";
export type SafeFoodProductFilterRequest = {
    ids_restricoes?: string[];
    ids_categorias?: string[];
    ids_tipos_restricao?: string[];
    pesquisa?: string;
    page?: number;
    itensPorPagina?: number;
    sort?: SafeFoodSort;
    direction?: directionSelect;
    cep?: string;
    numero?: string;
    distanceRadio?: number;
    select: OrderSelect;
    // totalPages: number;
    // totalElements: number;
    // last: boolean;
    // size: number;
    // numberOfElements: number;
    // first: boolean;
    // empty: boolean;
    // content: T[];
}

export type SafeFoodProductFilterResponse = SafeFoodProductsResponse;

// export type SafeFoodProductRequest = {
//     id: string,
//     titulo: string,
//     descricao: string,
//     preco: number,
//     imagem?: string,
//     ingredientes: string[],
//     unidadeDeVenda: string,
//     tipoProduto: string,
//     restricoes: Restriction[]
// }

export type SafeFoodCreateProductRequest = {
	id: number;
	titulo: string;
	descricao: string;
	preco: number;
	imagem?: string;
	ingredientes: string[];
	unidadeDeVenda: string;
	categoria: number;
	restricoes: number[];
};

// export type SafeFoodProductFilterRequest = {
//     IDSRestrictions?: string[];
//     IDSCategories?: string[];
//     IDSTypeRestrictions?: string[];
//     search?: string[];
//     page?: string[];
//     itensForPage?: string[];
//     sort?: string[];
//     direction?: string[];
//     cep?: string[];
//     Number?: string[];
//     distanceRadio?: string[];
// }
