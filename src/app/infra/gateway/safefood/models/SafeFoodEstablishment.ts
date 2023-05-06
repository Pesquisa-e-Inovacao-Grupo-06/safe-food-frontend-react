import {SafeFoodAddressResponse, SafeFoodCreateAddressRequest} from "./SafeFoodAddress";
import {SafeFoodGenericDataResponse} from "./SafeFoodResponse";
import {SafeFoodUsuarioModel} from "./SafeFoodUser";
import {SafeFoodCreateUserRequest} from "./SafeFoodUser";

export type SafeFoodCreateEstablishmentRequest = {
    "nomeEmpresa": string,
    "celular": string,
    "contatoCliente": string,
    "cnpj": string,
    "descricao": string,
    "endereco": SafeFoodCreateAddressRequest
  } & SafeFoodCreateUserRequest

export type SafeFoodCreateEstablishmentModel = {
    "nomeEmpresa": string,
    "celular": string,
    "contatoCliente": string,
    "cnpj": string,
    "descricao": string,
    "endereco": SafeFoodAddressResponse
} & SafeFoodUsuarioModel;

export type SafeFoodCreateEstablishmentResponse = 
SafeFoodGenericDataResponse<SafeFoodCreateEstablishmentModel>