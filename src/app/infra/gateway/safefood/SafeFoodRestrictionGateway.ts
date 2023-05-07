import {HttpClient} from "@/app/domain/protocols/HttpClient";
import {SafeFoodRestrictionModel, SafeFoodTipoRestricaoModel} from "./models/SafeFoodRestriction";

export class SafeFoodRestrictionGateway {

    constructor (private readonly http: HttpClient){}

    async getById(id: number): Promise<SafeFoodTipoRestricaoModel>{
        const res = await this.http.execute<SafeFoodTipoRestricaoModel>({
            url: `/restricoes/${id}`,
            method: 'GET',
        })
        if(!res.data){
            throw new Error("Erro ao realizar requisicao de pegar restricao por id")
        }
        return res.data;    
    
    }
    async getAll(): Promise<SafeFoodRestrictionModel[]>{
        const res = await this.http.execute<SafeFoodRestrictionModel[]>({
            url: `/restricoes`,
            method: 'GET',
        })
        if(!res.data){
            throw new Error("Erro ao realizar requisicao de pegar restricoes")
        }
        return res.data;    
    }
}