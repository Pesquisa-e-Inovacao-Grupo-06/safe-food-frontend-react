import {SafeFoodResponse} from "./SafeFoodResponse";

export type SafeFoodCreateUserRequest = {
    senha: string,
} & SafeFoodUpdateUserRequest;


export type SafeFoodUpdateUserRequest = {
    nome: string,
    email: string
}

export type SafeFoodUsuarioModel = {
    id: number,
    imagem: string | null,
    tipoUsuario: "CONSUMIDOR" | "ESTABELECIMENTO",
    dataCriacao: Date | string | null
} & SafeFoodUpdateUserRequest;

export type SafeFoodLoginResponse = {
    token: string,
    usuario: SafeFoodUsuarioModel
} & SafeFoodResponse;

export type SafeFoodLoginUserRequest = {
    email: string
    senha: string,
};