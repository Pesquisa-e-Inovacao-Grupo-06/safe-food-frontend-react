import { Restriction } from "@/app/domain/entities/Restriction"

export type SafeFoodProductResponse = {
    titulo: string,
    descricao: string,
    preco: number,
    imagem: string,
    tipoProduto: string,
    restricoes: Restriction[]
}

export type SafeFoodProductRequest = {
    titulo: string,
    descricao: string,
    preco: number,
    imagem: string,
    tipoProduto: string,
    restricoes: Restriction[]
}
