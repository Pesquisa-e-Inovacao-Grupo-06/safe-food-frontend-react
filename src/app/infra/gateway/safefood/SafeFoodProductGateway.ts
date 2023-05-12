import { HttpClient } from "@/app/domain/protocols/HttpClient";

export class SafeFoodProductGateway {
    constructor(private readonly http: HttpClient, private readonly cache: Cache) {
    }

    // GET /produtos/{id}
    // PUT /produtos/{id}
    // DELETE /produtos/{id}
    // POST /produtos
    // POST /produtos/{id}/avaliacoes
    // DELETE /produtos/{id}/avaliacoes
    // GET /produtos/filtro
    // GET /produtos/estabelecimento/{id}

}

