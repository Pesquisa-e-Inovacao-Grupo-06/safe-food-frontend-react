import {Address} from "@/app/domain/entities/Address";
import {HttpClient} from "@/app/domain/protocols/HttpClient";
import {AddressViaCepModel} from "./models/AddressModelViaCep";
import {FindAddress} from "@/app/domain/usecases/FindAddress";
import {AddressMapper} from "./mapper/AddressMapper";

export class ViaCepGateway implements FindAddress{
    constructor(private http: HttpClient){}
    async execute(cep: string): Promise<Address> {
        const {data} = await this.http.execute<AddressViaCepModel>({
            url: `https://viacep.com.br/ws/${cep}/json/`
        })
        if(!data || data.erro){
            throw new Error("Ocorreu algum erro na requisicao");
        }
        return AddressMapper.viaCepToEntity(data);
    }
}