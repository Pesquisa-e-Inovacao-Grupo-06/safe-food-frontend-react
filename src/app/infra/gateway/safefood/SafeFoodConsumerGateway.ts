import { HttpClient } from "@/app/domain/protocols/HttpClient";
import { SafeFoodAddressResponse, SafeFoodCreateAddressRequest } from "./models/SafeFoodAddress";
import { SafeFoodConsumerResponse, SafeFoodCreateConsumerRequest, SafeFoodUpdateConsumerRequest } from "./models/SafeFoodConsumer";
import { SafeFoodResponse } from "./models/SafeFoodResponse";


export class SafeFoodConsumerGateway {

    constructor(private readonly http: HttpClient) { }

    async findById(id: number): Promise<SafeFoodConsumerResponse> {
        const res = await this.http.execute<SafeFoodConsumerResponse>({
            url: `/consumidores/${id}`,
            method: 'GET',
        })
        if (!res.data) {
            throw new Error("Erro ao realizar requisicao de pegar por id")
        }
        return res.data;
    }

    async update(id: number, data: SafeFoodUpdateConsumerRequest): Promise<SafeFoodConsumerResponse> {
        const res = await this.http.execute<SafeFoodConsumerResponse>({
            url: `/consumidores/${id}`,
            method: 'PUT',
            body: data
        })
        if (!res.data) {
            throw new Error("Erro ao realizar requisicao de atualizar")
        }
        return res.data;
    }

    async remove(id: number): Promise<SafeFoodResponse> {
        const res = await this.http.execute<SafeFoodResponse>({
            url: `/consumidores/${id}`,
            method: 'DELETE',
        })
        if (!res.data) {
            throw new Error("Erro ao realizar requisicao de remover consumidor")
        }
        return res.data;
    }

    async create(data: SafeFoodCreateConsumerRequest): Promise<SafeFoodConsumerResponse> {
        // TODO: Colocar data de nascimento apos backend arrumar
        // TODO: Salvar imagem
        let body: {
            "nome": string,
            "email": string,
            "senha": string,
            "telefone"?: string,
            "enderecos"?: SafeFoodCreateAddressRequest[],
            "restricoes": number[]
        } = {
            "nome": data.nome,
            "email": data.email,
            "senha": data.senha,
            "restricoes": data.restricoes
        }
        if (data.telefone) {
            body.telefone = data.telefone;
        }
        if (data.cep) {
            const enderecos: SafeFoodCreateAddressRequest[] = [{
                "apelido": data.apelido || "Endereco Principal",
                "numero": data.numero,
                "logradouro": data.logradouro,
                "bairro": data.bairro,
                "cidade": data.cidade,
                "estado": data.estado,
                "cep": data.cep,
                "complemento": data.complemento || ""
            }]
            body.enderecos = enderecos;
        }
        const res = await this.http.execute<SafeFoodConsumerResponse>({
            url: `/consumidores`,
            method: 'POST',
            body: body
        })
        if (!res.data) {
            throw new Error("Erro ao realizar requisicao de adicionar consumidor")
        }
        return res.data;
    }

    async addAddress(id: number, address: SafeFoodCreateAddressRequest): Promise<SafeFoodAddressResponse> {
        const res = await this.http.execute<SafeFoodAddressResponse>({
            url: `/consumidores/${id}/endereco`,
            method: 'POST',
            body: address
        })
        if (!res.data) {
            throw new Error("Erro ao realizar requisicao de adicionar endereco do consumidor")
        }
        return res.data;
    }

    async updateAddress(id: number, idEndereco: number, address: SafeFoodCreateAddressRequest): Promise<SafeFoodAddressResponse> {
        const res = await this.http.execute<SafeFoodAddressResponse>({
            url: `/consumidores/${id}/endereco/${idEndereco}`,
            method: 'PUT',
            body: address
        })
        if (!res.data) {
            throw new Error("Erro ao realizar requisicao de atualizar endereco do consumidor")
        }
        return res.data;
    }

    async removeAddress(id: number, idEndereco: number): Promise<SafeFoodResponse> {
        const res = await this.http.execute<SafeFoodAddressResponse>({
            url: `/consumidores/${id}/endereco/${idEndereco}`,
            method: 'POST',
        })
        if (!res.data) {
            throw new Error("Erro ao realizar requisicao de remover endereco do consumidor")
        }
        return res.data;
    }
}
