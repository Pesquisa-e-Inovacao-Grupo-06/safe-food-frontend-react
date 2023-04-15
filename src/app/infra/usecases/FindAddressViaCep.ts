import { Address } from "@/app/domain/entities/Address";
import {HttpClient} from "@/app/domain/services/HttpClient";
import {FindAddress} from "@/app/domain/usecases/FindAddress";
import {AddressModel} from "../models/AddressModelViaCep";
import {AddressMapper} from "../mapper/AddressMapper";

export class FindAddressViaCep implements FindAddress {
    constructor(private http: HttpClient){}
    async execute(cep: string): Promise<Address> {
        const {data} = await this.http.execute<AddressModel>({
            url: `https://viacep.com.br/ws/${cep}/json/`
        })
        if(!data || data.erro){
            throw new Error("Ocorreu algum erro na requisicao");
        }
        return AddressMapper.viaCepToEntity(data);
    }
    
}