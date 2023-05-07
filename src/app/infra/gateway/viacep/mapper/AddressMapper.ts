import {Address} from "@/app/domain/entities/Address";
import {AddressViaCepModel} from "../models/AddressModelViaCep";

export class AddressMapper {
    public static viaCepToEntity(add: AddressViaCepModel): Address {
        const { cep, complemento,localidade, logradouro, uf, bairro} = add;
        return new Address({
            bairro,
            cep,
            cidade: localidade,
            complemento,
            estado: uf,
            logradouro,
        })
    }
}