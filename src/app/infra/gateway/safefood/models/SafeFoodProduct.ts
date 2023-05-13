import { Restriction } from "@/app/domain/entities/Restriction"
import { SafeFoodGenericDataResponse, SafeFoodResponse } from "./SafeFoodResponse";
import { SafeFoodRestrictionModel } from "./SafeFoodRestriction";

export type SafeFoodProductModel = {
    id: string,
    titulo: string,
    descricao: string,
    preco: number,
    imagem?: string,
    ingredientes: string[],
    unidadeDeVenda: string,
    tipoProduto: string,
    restricoes: SafeFoodRestrictionModel[]
    categoria: CategoryProductModel,
};

export type CategoryProductModel = {
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
