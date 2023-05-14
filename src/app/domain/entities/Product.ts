import { CategoryProductModel } from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
import { SafeFoodRestrictionModel } from "@/app/infra/gateway/safefood/models/SafeFoodRestriction";

export type SafeFoodProductParams = {
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

export class Product {
    constructor(public params: Partial<SafeFoodProductParams>) { }
}
