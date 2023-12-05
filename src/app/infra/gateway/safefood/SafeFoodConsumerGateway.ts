import { HttpClient } from "@/app/domain/protocols/HttpClient";
import { SafeFoodAddressResponse, SafeFoodCreateAddressRequest } from "./models/SafeFoodAddress";
import { SafeFoodConsumerResponse, SafeFoodCreateConsumerRequest, SafeFoodUpdateConsumerRequest } from "./models/SafeFoodConsumer";
import { SafeFoodGenericDataResponse, SafeFoodResponse } from "./models/SafeFoodResponse";
import { Cache } from '@/app/domain/protocols/Cache';


export class SafeFoodConsumerGateway {

    private token: string = '';

    constructor(private readonly http: HttpClient, private readonly cache: Cache) {
        this.token = cache.getItem('token') || '';
    }

    async findById(id: number): Promise<SafeFoodConsumerResponse> {
        const res = await this.http.execute<SafeFoodConsumerResponse>({
            url: `/consumidores/${id}`,
            method: 'GET',
            jwt: this.token,
        })
        if (!res.data) {
            throw new Error("Erro ao realizar requisicao de pegar por id");
        }
        // console.log("RESPOSTA", res.data);
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
        if (data.file && res.data.data.id) {
            let requestImage = new FormData();
            requestImage.append("image", data.file);
            const responseImage = await this.http.execute<SafeFoodGenericDataResponse<string>>({
                url: `/consumidores/${id}/foto-perfil`,
                method: 'POST',
                contentType: "multipart/form-data",
                body: requestImage
            })
            if (responseImage.data) {
                res.data.data.imagem = responseImage.data.data;
            } else {
                throw new Error("Erro ao realizar requisicao de adicionar foto do consumidor")
            }
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
        if (data.file && res.data.data.id) {
            let requestImage = new FormData();
            requestImage.append("image", data.file);
            const responseImage = await this.http.execute<SafeFoodGenericDataResponse<string>>({
                url: `/consumidores/${res.data.data.id}/foto-perfil`,
                method: 'POST',
                contentType: "multipart/form-data",
                body: requestImage
            })
            if (responseImage.data) {
                res.data.data.imagem = responseImage.data.data;
            } else {
                throw new Error("Erro ao realizar requisicao de adicionar foto do consumidor")
            }
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

    async removeAddress(id: number, idEndereco: number): Promise<number> {
        const res = await this.http.execute<SafeFoodAddressResponse>({
            url: `/consumidores/${id}/endereco/${idEndereco}`,
            method: 'DELETE',
        })
        // console.log("delete", res);
        // if (!res.data) {
        //     throw new Error("Erro ao realizar requisicao de remover endereco do consumidor")
        // }
        return res.statusCode;
    }
}
