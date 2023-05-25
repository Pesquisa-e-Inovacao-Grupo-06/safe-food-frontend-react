import { SafeFoodEstablishmentModel } from "@/app/infra/gateway/safefood/models/SafeFoodEstablishment";
import { SafeFoodAvaliationModel, SafeFoodCategoryProductModel } from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
import { SafeFoodRestrictionModel } from "@/app/infra/gateway/safefood/models/SafeFoodRestriction";

export type SafeFoodProductParams = {
    id: string,
    titulo?: string,
    descricao?: string,
    preco?: number,
    imagem?: string,
    ingredientes?: string[],
    unidadeDeVenda?: string,
    dataCadastro?: string,
    estabelecimento: SafeFoodEstablishmentModel,
    horarioFuncionamentoSemana?: string,
    horarioFuncionamentoFimDeSemana?: string,
    isDelivery?: boolean,
    isRetireNoLocal?: boolean,
    isFreteGratis?: boolean,
    tempoEsperaMedio?: string,
    categoria: SafeFoodCategoryProductModel,
    restricoes?: SafeFoodRestrictionModel[],
    avaliacoes?: SafeFoodAvaliationModel[],
    tipoProduto?: string,
};

export class Product {
    constructor(public params: SafeFoodProductParams) { }
}
