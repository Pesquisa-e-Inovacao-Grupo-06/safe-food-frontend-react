import {Address} from "@/app/domain/entities/Address";
import {SafeFoodAddressModel} from "../models/SafeFoodAddress";

export class SafeFoodAddressMapper {
    static of(model: SafeFoodAddressModel): Address{
        return new Address({
            ...model
        })
    }
    static ofEntity({
        params: {
            apelido,cep,
            bairro, cidade, complemento, estado, id, logradouro, numero
        }
    }: Address): SafeFoodAddressModel{
        return {
            apelido : apelido || "",
            bairro: bairro || "",
            cep: cep || "",
            cidade: cidade || "",
            complemento: complemento || "",
            estado: estado || "",
            id: id || -1,
            numero: numero || "",
            logradouro: logradouro || "",
            formatado: ""
            }
    }
}