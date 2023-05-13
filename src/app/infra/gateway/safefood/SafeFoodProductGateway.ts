import { HttpClient } from "@/app/domain/protocols/HttpClient";
import { SafeFoodProductResponse, SafeFoodProductRequest, SafeFoodProductsResponse } from "./models/SafeFoodProduct";

export class SafeFoodProductGateway {
    constructor(private readonly http: HttpClient) {
    }


    // GET /produtos/{id}
    async findById(id: string): Promise<SafeFoodProductResponse> {
        const res = await this.http.execute<SafeFoodProductResponse>({
            url: `/produtos/${id}`,
            method: 'GET',
        });

        if (!res.data) {
            throw new Error("Erro ao tentar buscar todos os produtos");
        }
        return res.data;
    }

    //
    async findByAll(): Promise<SafeFoodProductsResponse> {
        const res = await this.http.execute<SafeFoodProductsResponse>({
            url: `/produtos`,
            method: 'GET',
        });

        if (!res.data) {
            throw new Error("Erro ao tentar buscar todos os produtos");
        }
        return res.data;

    }


    // PUT /produtos/{id}
    async create(product: SafeFoodProductRequest): Promise<SafeFoodProductResponse> {
        const res = await this.http.execute<SafeFoodProductResponse>({
            url: `/produtos`,
            method: 'POST',
            body: product,
        });

        if (!res.data) {
            throw new Error("Erro ao tentar buscar todos os produtos");
        }


        return res.data;
    }

    // DELETE /produtos/{id}
    async update(id: string, product: SafeFoodProductRequest): Promise<SafeFoodProductResponse> {
        const res = await this.http.execute<SafeFoodProductResponse>({
            url: `/produtos/${id}`,
            method: 'PUT',
            body: product,
        });

        if (!res.data) {
            throw new Error("Erro ao tentar buscar todos os produtos");
        }


        return res.data;
    }

    // POST /produtos
    async delete(id: string): Promise<SafeFoodProductResponse> {
        const res = await this.http.execute<SafeFoodProductResponse>({
            url: `/produtos/${id}`,
            method: 'DELETE',
        });

        if (!res.data) {
            throw new Error("Erro ao tentar buscar todos os produtos");
        }


        return res.data;
    }

    // POST /produtos/{id}/avaliacoes
    // async createProductRating(
    //     id: string
    // ): Promise<SafeFoodProductRequest> {
    //     const res = await this.http.execute<SafeFoodProductResponse>({
    //         url: `/produtos/${id}/avaliacoes`,
    //         method: 'POST',
    //     });
    //     if (!res.data) {
    //         throw new Error("Erro ao tentar buscar todos os produtos");
    //     }

    //     return res.data;
    // }
    // DELETE /produtos/{id}/avaliacoes

    async deleteProductRating(id: string): Promise<SafeFoodProductResponse> {
        const res = await this.http.execute<SafeFoodProductResponse>({
            url: `/produtos/${id}/avaliacoes/`,
            method: 'DELETE',
        });

        if (!res.data) {
            throw new Error("Erro ao tentar buscar todos os produtos");
        }

        return res.data;
    }
    // GET /produtos/filtro

    async findByEstablishmentId(establishmentId: string): Promise<SafeFoodProductResponse[]> {
        const res = await this.http.execute<SafeFoodProductResponse[]>({
            url: `/produtos/estabelecimento/${establishmentId}`,
            method: 'GET',
        });

        if (!res.data) {
            return [];
        }

        return res.data;
    }


}
