import {HttpClient} from "@/app/domain/protocols/HttpClient";
import {SafeFoodAddressResponse, SafeFoodCreateAddressRequest} from "./models/SafeFoodAddress";
import {SafeFoodConsumerResponse, SafeFoodCreateConsumerRequest, SafeFoodUpdateConsumerRequest} from "./models/SafeFoodConsumer";
import {SafeFoodResponse} from "./models/SafeFoodResponse";


export class SafeFoodConsumerGateway {

    constructor (private readonly http: HttpClient){}
    
    async findConsumerById(id: number): Promise<SafeFoodConsumerResponse> {
        const res = await this.http.execute<SafeFoodConsumerResponse>({
            url: `/consumidores/${id}`,
            method: 'GET',
        })
        if(!res.data){
            throw new Error("Erro ao realizar requisicao de pegar por id")
        }
        return res.data;    
    }
    
    async updateConsumer(id: number, data: SafeFoodUpdateConsumerRequest): Promise<SafeFoodConsumerResponse> {
        const res = await this.http.execute<SafeFoodConsumerResponse>({
            url: `/consumidores/${id}`,
            method: 'PUT',
            body: data
        })
        if(!res.data){
            throw new Error("Erro ao realizar requisicao de atualizar")
        }
        return res.data;   
    }

    async removeConsumer(id: number): Promise<SafeFoodResponse>{
        const res = await this.http.execute<SafeFoodResponse>({
            url: `/consumidores/${id}`,
            method: 'DELETE',
        })
        if(!res.data){
            throw new Error("Erro ao realizar requisicao de remover consumidor")
        }
        return res.data;   
    }

    async createConsumer(data: SafeFoodCreateConsumerRequest): Promise<SafeFoodConsumerResponse>{
        const res = await this.http.execute<SafeFoodConsumerResponse>({
            url: `/consumidores`,
            method: 'POST',
            body: data
        })
        if(!res.data){
            throw new Error("Erro ao realizar requisicao de adicionar consumidor")
        }
        return res.data; 
    }

    async addAddressConsumer(id: number, address: SafeFoodCreateAddressRequest): Promise<SafeFoodAddressResponse>{
        const res = await this.http.execute<SafeFoodAddressResponse>({
            url: `/consumidores/${id}/endereco`,
            method: 'POST',
            body: address
        })
        if(!res.data){
            throw new Error("Erro ao realizar requisicao de adicionar endereco do consumidor")
        }
        return res.data;    
    }
   
    async updateAddressConsumer(id: number, idEndereco: number, address: SafeFoodCreateAddressRequest): Promise<SafeFoodAddressResponse>{
        const res = await this.http.execute<SafeFoodAddressResponse>({
            url: `/consumidores/${id}/endereco/${idEndereco}`,
            method: 'PUT',
            body: address
        })
        if(!res.data){
            throw new Error("Erro ao realizar requisicao de atualizar endereco do consumidor")
        }
        return res.data;      }

    async removeAddressConsumer(id: number, idEndereco: number): Promise<SafeFoodResponse>{
        const res = await this.http.execute<SafeFoodAddressResponse>({
            url: `/consumidores/${id}/endereco/${idEndereco}`,
            method: 'POST',
        })
        if(!res.data){
            throw new Error("Erro ao realizar requisicao de remover endereco do consumidor")
        }
        return res.data;  
    }
}
