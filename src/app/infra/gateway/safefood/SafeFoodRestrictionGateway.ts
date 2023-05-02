import {HttpClient} from "@/app/domain/protocols/HttpClient";
import {SafeFoodTipoRestricaoModel} from "./models/SafeFoodRestriction";

export class SafeFoodRestrictionGateway {

    constructor (private readonly http: HttpClient){}

    async getById(id: number): Promise<SafeFoodTipoRestricaoModel>{
        const res = await this.http.execute<SafeFoodTipoRestricaoModel>({
            url: `/restricoes/${id}`,
            method: 'POST',
        })
        if(!res.data){
            throw new Error("Erro ao realizar requisicao de Login")
        }
        return res.data;    
    
    }
    async getAll(): Promise<SafeFoodTipoRestricaoModel[]>{
        const res = await this.http.execute<SafeFoodTipoRestricaoModel[]>({
            url: `/restricoes`,
            method: 'POST',
        })
        if(!res.data){
            throw new Error("Erro ao realizar requisicao de Login")
        }
        return res.data;    
    }
}