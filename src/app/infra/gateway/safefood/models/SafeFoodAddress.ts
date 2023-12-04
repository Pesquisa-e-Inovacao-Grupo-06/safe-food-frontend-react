import { SafeFoodGenericDataResponse } from "./SafeFoodResponse";

export type SafeFoodCreateAddressRequest = {
    apelido: string,
    numero: string,
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    complemento: string
}

export type SafeFoodAddressResponse = SafeFoodGenericDataResponse<SafeFoodAddressModel>

export type SafeFoodAddressModel = {
    id?: number,
    formatado?: string,
} & SafeFoodCreateAddressRequest;
