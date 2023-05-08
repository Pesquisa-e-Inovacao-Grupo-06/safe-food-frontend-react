import { SafeFoodAddressModel, SafeFoodAddressResponse, SafeFoodCreateAddressRequest } from "./SafeFoodAddress";
import { SafeFoodGenericDataResponse } from "./SafeFoodResponse";
import { SafeFoodUsuarioModel } from "./SafeFoodUser";
import { SafeFoodCreateUserRequest } from "./SafeFoodUser";

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

export type SafeFoodEstablishmentModel =
  {
    nome: string,
    email: string,
    cnpj: string,
    nomeEmpresa: string,
    celular: string,
    contatoCliente: string,
    descricao: string,
    endereco: SafeFoodAddressModel
  } & SafeFoodUsuarioModel


export type SafeFoodEstablishmentResponse = SafeFoodGenericDataResponse<SafeFoodEstablishmentModel>

export type SafeFoodUpdateEstablishmentRequest = {
  imagem: string | null,
  email: string,
  nomeEmpresa: string,
  celular: string,
  contatoCliente: string,
  descricao: string,
  endereco: SafeFoodAddressModel
}

export type SafeFoodGetProductEstablishmentRequest = {

}

