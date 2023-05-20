import { Restriction } from "@/app/domain/entities/Restriction";
import { SafeFoodGenericDataResponse } from "./SafeFoodResponse";
import { SafeFoodRestrictionModel } from "./SafeFoodRestriction";
import { SafeFoodEstablishmentModel } from "./SafeFoodEstablishment";


//produtos/{id}
export type SafeFoodProductModel = {
    id: string,
    titulo: string,
    descricao: string,
    preco: number,
    imagem?: string,
    ingredientes: string[],
    unidadeDeVenda: string,
    dataCadastro: string,
    estabelecimento: SafeFoodEstablishmentModel,
    horarioFuncionamentoSemana: string,
    horarioFuncionamentoFimDeSemana: string,
    isDelivery: boolean,
    isRetireNoLocal: boolean,
    isFreteGratis: boolean,
    tempoEsperaMedio: string,
    categoria: SafeFoodCategoryProductModel,
    restricoes: SafeFoodRestrictionModel[],
    avaliacoes: SafeFoodAvaliationModel,
    tipoProduto: string,

};

export type SafeFoodAvaliationModel = {
    id: string,
    rate: number,
    comentario: string,
    dataCadastro: string
}

export type SafeFoodCategoryProductModel = {
    id: string,
    nome: string,
    descricao: string,
}

export type SafeFoodProductsModel = {
    content: SafeFoodProductModel[];
};

export type SafeFoodProductResponse = SafeFoodGenericDataResponse<SafeFoodProductModel>;

export type SafeFoodProductsResponse = SafeFoodPage<SafeFoodProductModel>;

export type SafeFoodSort = {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

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
}
export type SafeFoodProductFilterRequest = {
    ids_restricoes?: string[];
    ids_categorias?: string[];
    ids_tipos_restricao?: string[];
    pesquisa?: string;
    page?: number;
    itensPorPagina?: number;
    sort?: SafeFoodSort;
    direction?: string;
    cep?: string;
    numero?: string;
    distanceRadio?: number;
    // totalPages: number;
    // totalElements: number;
    // last: boolean;
    // size: number;
    // numberOfElements: number;
    // first: boolean;
    // empty: boolean;
    // content: T[];
}

export type SafeFoodProductFilterResponse = & SafeFoodProductsResponse;

export type SafeFoodProductRequest = {
    id: string,
    titulo: string,
    descricao: string,
    preco: number,
    imagem?: string,
    ingredientes: string[],
    unidadeDeVenda: string,
    tipoProduto: string,
    restricoes: Restriction[]
}

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
