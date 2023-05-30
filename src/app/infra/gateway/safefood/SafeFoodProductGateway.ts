import { HttpClient } from "@/app/domain/protocols/HttpClient";
import {
	SafeFoodProductResponse,
	SafeFoodProductsResponse,
	SafeFoodProductFilterRequest,
	SafeFoodProductFilterResponse,
	SafeFoodAvaliationRequest,
	SafeFoodCreateProductRequest,
	SafeFoodProductEstablishmentResponse,
	SafeFoodCreateProductWithNoImageRequest,
	SafeFoodProductLocationRequest
} from "./models/SafeFoodProduct";
import queryString from "../../../../../node_modules/query-string/index.d";
import { SafeFoodGenericDataResponse } from "./models/SafeFoodResponse";

export class SafeFoodProductGateway {
	constructor(private readonly http: HttpClient) { }

	// GET /produtos/{id}
	async findById(id: string): Promise<SafeFoodProductResponse> {
		const res = await this.http.execute<SafeFoodProductResponse>({
			url: `/produtos/${id}`,
			method: "GET",
		});

		if (!res.data) {
			throw new Error("Erro ao tentar buscar todos os produtos");
		}
		return res.data;
	}

	//
	async findAll(): Promise<SafeFoodProductsResponse> {
		const res = await this.http.execute<SafeFoodProductsResponse>({
			url: `/produtos`,
			method: "GET",
		});

		if (!res.data) {
			throw new Error("Erro ao tentar buscar todos os produtos");
		}
		return res.data;
	}

	async createComments(
		id: string,
		avaliationRequest: SafeFoodAvaliationRequest
	): Promise<SafeFoodProductResponse> {
		const res = await this.http.execute<SafeFoodProductResponse>({
			url: `/produtos/${id}/avaliacoes`,
			method: "POST",
			body: avaliationRequest,
		});

		if (!res.data) {
			throw new Error("Erro ao tentar adicionar comentário.");
		}
		return res.data;
	}
	async deleteComments(idProduct: number, idComment: number): Promise<any> {
		const res = await this.http.execute<SafeFoodProductResponse>({
			url: `/produtos/${idProduct}/avaliacoes/${idComment}`,
			method: "DELETE",
		});

		if (!res.data) {
			throw new Error("Erro ao deletar comentário.");
		}
		return res.data;
	}

	// PUT /produtos/{id}
	async create(
		id: number,
		product: SafeFoodCreateProductRequest
	): Promise<SafeFoodProductResponse> {
		const body = {
			...product,

		};
		delete body.imagem
		const res = await this.http.execute<SafeFoodProductResponse>({
			url: `/produtos/estabelecimento/${id}`,
			method: "POST",
			body: body,
		});
		if (!res.data) {
			throw new Error("Erro ao tentar buscar todos os produtos");
		}
		if (product.imagem && res.data.data.estabelecimento.id) {
			let requestImage = new FormData();
			requestImage.append("image", product.imagem);
			const responseImage = await this.http.execute<SafeFoodGenericDataResponse<string>>({
				url: `/produtos/${res.data.data.id}/imagem`,
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

	// DELETE /produtos/{id}
	async update(
		id: string,
		product: SafeFoodCreateProductRequest
	): Promise<SafeFoodProductResponse> {
		const body = {
			...product,
		};
		delete body.imagem
		const res = await this.http.execute<SafeFoodProductResponse>({
			url: `/produtos/${id}`,
			method: "PUT",
			body: body,
		});

		if (!res.data) {
			throw new Error("Erro ao tentar buscar todos os produtos");
		}

		if (product.imagem && res.data.data.estabelecimento.id) {
			let requestImage = new FormData();
			requestImage.append("image", product.imagem);
			const responseImage = await this.http.execute<SafeFoodGenericDataResponse<string>>({
				url: `/produtos/${res.data.data.id}/imagem`,
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

	// POST /produtos
	async delete(id: string): Promise<SafeFoodProductResponse> {
		const res = await this.http.execute<SafeFoodProductResponse>({
			url: `/produtos/${id}`,
			method: "DELETE",
		});

		if (!res.data) {
			throw new Error("Erro ao tentar buscar todos os produtos");
		}

		return res.data;
	}

	// async productFilter(
	// 	safeFoodProductFilterRequest?: SafeFoodProductFilterRequest
	// ): Promise<SafeFoodProductFilterResponse> {
	// 	const queryStringParams = queryString.stringify(
	// 		safeFoodProductFilterRequest ?? ({} as SafeFoodProductFilterRequest)
	// 	);

	// 	const res = await this.http.execute<SafeFoodProductFilterResponse>({
	// 		url: `/produtos/filtrar?${queryStringParams}`,
	// 		method: "GET",
	// 	});

	// 	if (!res.data) {
	// 		throw new Error("Erro ao tentar filtrar os produtos");
	// 	}

	// 	return res.data;
	// }

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

	// async deleteProductRating(id: string): Promise<SafeFoodProductResponse> {
	// 	const res = await this.http.execute<SafeFoodProductResponse>({
	// 		url: `/produtos/${id}/avaliacoes/`,
	// 		method: "DELETE",
	// 	});

	// 	if (!res.data) {
	// 		throw new Error("Erro ao tentar buscar todos os produtos");
	// 	}

	// 	return res.data;
	// }
	// GET /produtos/filtro
	async productFilter(safeFoodProductFilterRequest?: SafeFoodProductFilterRequest): Promise<SafeFoodProductFilterResponse> {
		const queryStringParams = queryString.stringify(safeFoodProductFilterRequest ?? {} as SafeFoodProductFilterRequest);


		const res = await this.http.execute<SafeFoodProductFilterResponse>({
			url: `/produtos/filtrar?${queryStringParams}`,
			method: 'GET',
		});
		if (!res.data) {
			throw new Error("Erro ao tentar filtrar os produtos");
		}
		if (res.statusCode == 204) {
			return { ...res.data, size: 0 }
		}

		return res.data;
	}
	async productsCloser(safeFoodProductFilterRequest?: SafeFoodProductLocationRequest): Promise<SafeFoodProductFilterResponse> {
		const queryStringParams = queryString.stringify(safeFoodProductFilterRequest ?? {} as SafeFoodProductLocationRequest);


		const res = await this.http.execute<SafeFoodProductFilterResponse>({
			url: `/produtos/maisProximos?${queryStringParams}`,
			method: 'GET',
		});

		if (!res.data) {
			throw new Error("Erro ao tentar filtrar os produtos");
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

	// async findByEstablishmentId(establishmentId: string): Promise<SafeFoodProductResponse[]> {
	//     const res = await this.http.execute<SafeFoodProductResponse[]>({
	//         url: `/produtos/estabelecimento/${establishmentId}`,
	//         method: 'GET',
	//     });

	//     if (!res.data) {
	//         return [];
	//     }

	//     return res.data;
	// }

	async findByEstablishmentId(
		establishmentId: string
	): Promise<SafeFoodProductEstablishmentResponse> {
		const res = await this.http.execute<SafeFoodProductEstablishmentResponse>({
			url: `/produtos/estabelecimento/${establishmentId}`,
			method: "GET",
		});

		if (!res.data) {
			throw new Error("Erro ao tentar buscar todos os produtos");
		}
		return res.data;
	}
}
