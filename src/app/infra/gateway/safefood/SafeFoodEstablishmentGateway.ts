import { HttpClient } from "@/app/domain/protocols/HttpClient";
import { SafeFoodCreateEstablishmentRequest, SafeFoodEstablishmentResponse, SafeFoodUpdateEstablishmentRequest } from "./models/SafeFoodEstablishment";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodGenericDataResponse } from "./models/SafeFoodResponse";
import { SafeFoodAddressModel, SafeFoodAddressResponse, SafeFoodCreateAddressRequest } from "./models/SafeFoodAddress";

export class SafeFoodEstablishmentGateway {

    async changeAddress(idEstablishment: number, modal: SafeFoodAddressModel): Promise<SafeFoodAddressResponse> {
        const res = await this.http.execute<SafeFoodAddressResponse>({
            url: `/estabelecimentos/${idEstablishment}/endereco`,
            method: "PUT",
            jwt: this.token,
            body: modal,
        })
        if (!res.data) {
            throw new Error("Erro ao tentar encontrar usuário")
        }
        return res.data;

    }
    private token: string = '';
    constructor(private readonly http: HttpClient, private readonly cache: Cache) {
        this.token = cache.getItem('token') || '';
    }



    async findById(id: number): Promise<SafeFoodEstablishmentResponse> {
        const res = await this.http.execute<SafeFoodEstablishmentResponse>({
            url: `/estabelecimentos/${id}`,
            method: "GET",
            jwt: this.token,

        })
        if (!res.data) {
            throw new Error("Erro ao tentar encontrar usuário")
        }
        return res.data;
    }

    async update(id: number, data: SafeFoodUpdateEstablishmentRequest): Promise<SafeFoodEstablishmentResponse> {
        const res = await this.http.execute<SafeFoodEstablishmentResponse>({
            url: `/estabelecimentos/${id}`,
            method: "PUT",
            jwt: this.token,

            body: data,
        })
        if (!res.data) {
            throw new Error("Erro ao realizar atualização de estabelecimento")
        }
        return res.data;
    }

    async remove(id: number): Promise<SafeFoodEstablishmentResponse> {
        const res = await this.http.execute<SafeFoodEstablishmentResponse>({
            url: `/estabelecimentos/${id}`,
            method: "DELETE",
            jwt: this.token,

        })
        if (!res.data) {
            throw new Error("Erro ao tentar remover estabelecimento")
        }
        return res.data;
    }

    async create(data: SafeFoodCreateEstablishmentRequest): Promise<SafeFoodEstablishmentResponse> {
        const body: Partial<SafeFoodCreateEstablishmentRequest> = {
            ...data
        }
        if (!body.celular) delete body.celular;
        const res = await this.http.execute<SafeFoodEstablishmentResponse>({
            url: `/estabelecimentos`,
            method: "POST",
            body: body,
        })
        if (!res.data) {
            throw new Error("Erro ao tentar adicionar estabelecimento");
        }
        if (data.file && res.data.data.id) {
            let requestImage = new FormData();
            requestImage.append("image", data.file);
            const responseImage = await this.http.execute<SafeFoodGenericDataResponse<string>>({
                url: `/estabelecimentos/${res.data.data.id}/foto-perfil`,
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

    //TODO: AGUARDANDO RESPOSTA DE BACK-END
    async findByProductId(id: number): Promise<SafeFoodEstablishmentResponse> {
        const res = await this.http.execute<SafeFoodEstablishmentResponse>({
            url: `/estabelecimentos/${id}/produtos`,
            method: "GET"
        })
        if (!res.data) {
            throw new Error("Erro ao tentar encontrar produtos de estabelecimento")
        }
        return res.data;
    }

    async findByLocationId(id: number): Promise<SafeFoodEstablishmentResponse> {
        const res = await this.http.execute<SafeFoodEstablishmentResponse>({
            url: `/estabelecimentos/${id}/location`,
            method: "GET"
        })
        if (!res.data) {
            throw new Error("Erro ao tentar encontrar localização de estabelecimento")
        }
        return res.data;
    }

}
