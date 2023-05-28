

export type SafeFoodTypeProductRequest = {
    id: string,
    nome: string,
    descricao: string,
}

export type SafeFoodTypeProductResponse = {} & SafeFoodTypeProductModel;

export type SafeFoodTypeProductModel = {
    id: number,
    nome: string,
    descricao: string,
}
