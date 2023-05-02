import {SafeFoodAddressModel, SafeFoodCreateAddressRequest} from "./SafeFoodAddress";
import {SafeFoodCreateUserRequest, SafeFoodUpdateUserRequest, SafeFoodUsuarioModel} from "./SafeFoodUser";
import {SafeFoodGenericDataResponse} from "./SafeFoodResponse";
import {SafeFoodRestrictionModel} from "./SafeFoodRestriction";

// request
export type SafeFoodUpdateConsumerRequest = {
    telefone: string,
    restricoes: number[]
} & SafeFoodUpdateUserRequest;


export type SafeFoodCreateConsumerRequest = {
    enderecos: SafeFoodCreateAddressRequest[],
} & SafeFoodCreateUserRequest & SafeFoodUpdateConsumerRequest;


// response
export type SafeFoodConsumerResponse = SafeFoodGenericDataResponse<
  {
    "telefone": string,
    "restricoes": SafeFoodRestrictionModel[],
    "enderecos": SafeFoodAddressModel[]
  } & SafeFoodUsuarioModel
>;