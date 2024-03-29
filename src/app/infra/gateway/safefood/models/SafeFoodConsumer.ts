import { SafeFoodAddressModel, SafeFoodCreateAddressRequest } from "./SafeFoodAddress";
import { SafeFoodCreateUserRequest, SafeFoodUpdateUserRequest, SafeFoodUsuarioModel } from "./SafeFoodUser";
import { SafeFoodGenericDataResponse } from "./SafeFoodResponse";
import { SafeFoodRestrictionModel } from "./SafeFoodRestriction";

// request
export type SafeFoodUpdateConsumerRequest = {
  telefone: string,
  restricoes: number[]
} & SafeFoodUpdateUserRequest & SafeFoodSaveProfileImage;

export type SafeFoodSaveProfileImage = {
  file?: File
}
export type SafeFoodCreateConsumerRequest = {
  dataNascimento: string
} & SafeFoodCreateUserRequest & SafeFoodUpdateConsumerRequest & SafeFoodCreateAddressRequest & SafeFoodSaveProfileImage;

// response
export type SafeFoodConsumerResponse = SafeFoodGenericDataResponse<
  SafeFoodConsumerModel
>;

export type SafeFoodConsumerModel = {
  "telefone": string,
  "restricoes": SafeFoodRestrictionModel[],
  "enderecos": SafeFoodAddressModel[],
  "totalDeAvaliacoes": number,
} & SafeFoodUsuarioModel
