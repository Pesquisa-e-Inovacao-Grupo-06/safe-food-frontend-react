import {HttpClient} from "@/app/domain/protocols/HttpClient";
import {SafeFoodLoginResponse, SafeFoodLoginUserRequest } from "./models/SafeFoodUser";

export class SafeFoodUserGateway {

    constructor (private readonly http: HttpClient){}


    async login(data: SafeFoodLoginUserRequest): Promise<SafeFoodLoginResponse> {
        const res = await this.http.execute<SafeFoodLoginResponse>({
            url: '/usuarios',
            method: 'POST',
            body: data,
        })
        if(!res.data){
            throw new Error("Erro ao realizar requisicao de Login")
        }
        return res.data;
    }
    //sendMailToRecoveryPassword(email: string): void,
}