import { SafeFoodAddressModel, SafeFoodAddressResponse, SafeFoodCreateAddressRequest } from "./SafeFoodAddress";
import { SafeFoodGenericDataResponse } from "./SafeFoodResponse";
import { SafeFoodUsuarioModel } from "./SafeFoodUser";
import { SafeFoodCreateUserRequest } from "./SafeFoodUser";

export type SafeFoodSaveProfileImage = {
  file?: File
}
export type SafeFoodCreateEstablishmentRequest = {
  "nomeEmpresa": string,
  "celular": string,
  "contatoCliente": string,
  "cnpj": string,
  "descricao": string,
  "endereco": SafeFoodCreateAddressRequest
} & SafeFoodCreateUserRequest & SafeFoodSaveProfileImage

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
    endereco?: SafeFoodAddressModel,
    horarioFuncionamentoSemana: string,
    horarioFuncionamentoFimDeSemana: string,
    isDelivery: boolean,
    isRetireNoLocal: boolean,
    isFreteGratis: boolean,
    tempoEsperaMedio: string,
  } & SafeFoodUsuarioModel


export type SafeFoodEstablishmentResponse = SafeFoodGenericDataResponse<SafeFoodEstablishmentModel>

export type SafeFoodUpdateEstablishmentRequest = {
  nome: string,
  email: string,
  nomeEmpresa: string,
  cnpj: string,
  descricao: string,
  celular: string,
  contatoCliente: string,
}

export type SafeFoodGetProductEstablishmentRequest = {

}

