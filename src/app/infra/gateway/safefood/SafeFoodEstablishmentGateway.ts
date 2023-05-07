import { HttpClient } from "@/app/domain/protocols/HttpClient";
import { SafeFoodEstablishmentResponse, SafeFoodUpdateEstablishmentRequest } from "./models/SafeFoodEstablishment";

export class SafeFoodEstablishmentGateway {
    constructor(private readonly http: HttpClient) { }

    async findById(id: number): Promise<SafeFoodEstablishmentResponse> {
        const res = await this.http.execute<SafeFoodEstablishmentResponse>({
            url: `/estabelecimento/${id}`,
            method: "GET"
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
            body: data,
        })
        if (!res.data) {
            throw new Error("Erro ao realizar atualização de estabelecimento")
        }
        return res.data;
    }


}