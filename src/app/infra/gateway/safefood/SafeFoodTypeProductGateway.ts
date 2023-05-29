import { HttpClient } from "@/app/domain/protocols/HttpClient";
import { SafeFoodTypeProductRequest, SafeFoodTypeProductResponse } from "./models/SafeFoodTypeProduct";

export class SafeFoodTypeProductGateway {
    constructor(private readonly http: HttpClient) {
    }
    async findAll(): Promise<SafeFoodTypeProductResponse[]> {
        const res = await this.http.execute<SafeFoodTypeProductResponse[]>({
            url: `/produtos/categorias`,
            method: 'GET',
        });

        if (!res.data) {
            throw new Error("Erro ao tentar buscar todas as categorias");
        }
        return res.data;
    }
}

