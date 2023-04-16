import {Address} from "@/app/domain/entities/Address";
import {AddressModel} from "../models/AddressModelViaCep";

export class AddressMapper {
    public static viaCepToEntity(add: AddressModel): Address {
        const { cep, complemento,localidade, logradouro, uf} = add;
        return new Address({
            cep,
            cidade: localidade,
            complemento,
            estado: uf,
            logradouro,
        })
    }
}