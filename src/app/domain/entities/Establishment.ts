import { SafeFoodAddressModel } from "@/app/infra/gateway/safefood/models/SafeFoodAddress";

export type EstablishmentParams = {
    id: number;
    imagem: string;
    nome: string;
    email: string;
    tipoUsuario: string;
    dataCriacao: string | Date | null;
    cnpj: string;
    nomeEmpresa: string;
    celular: string;
    contatoCliente: string;
    descricao: string;
    endereco: SafeFoodAddressModel;
    horarioFuncionamentoSemana: string;
    horarioFuncionamentoFimDeSemana: string;
    isDelivery: boolean;
    isRetireNoLocal: boolean;
    isFreteGratis: boolean;
    tempoEsperaMedio: string;
    quantidadeDeProdutos: number
}

export class Establishment {
    constructor(public params: Partial<EstablishmentParams>) { }
}
