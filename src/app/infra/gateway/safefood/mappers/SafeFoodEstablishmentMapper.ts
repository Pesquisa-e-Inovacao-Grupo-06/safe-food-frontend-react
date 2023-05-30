
import { Establishment } from "@/app/domain/entities/Establishment";
import { SafeFoodEstablishmentModel } from "../models/SafeFoodEstablishment";


export class SafeFoodEstablishmentMapper {
    static of(model: SafeFoodEstablishmentModel): Establishment {
        return new Establishment({
            id: model.id,
            imagem: model.imagem,
            nome: model.nome,
            email: model.email,
            tipoUsuario: model.tipoUsuario,
            dataCriacao: model.dataCriacao,
            cnpj: model.cnpj,
            nomeEmpresa: model.nomeEmpresa,
            celular: model.celular,
            contatoCliente: model.contatoCliente,
            descricao: model.descricao,
            endereco: model.endereco,
            horarioFuncionamentoSemana: model.horarioFuncionamentoSemana,
            horarioFuncionamentoFimDeSemana: model.horarioFuncionamentoFimDeSemana,
            isDelivery: model.isDelivery,
            isRetireNoLocal: model.isRetireNoLocal,
            isFreteGratis: model.isFreteGratis,
            tempoEsperaMedio: model.tempoEsperaMedio,
            quantidadeDeProdutos: model.quantidadeDeProdutos,
        })
    }
}
