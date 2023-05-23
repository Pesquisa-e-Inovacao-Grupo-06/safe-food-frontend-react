import { HttpClient } from "@/app/domain/protocols/HttpClient";
import { SafeFoodLoginResponse, SafeFoodLoginUserRequest } from "./models/SafeFoodUser";

export class SafeFoodUserGateway {

    constructor(private readonly http: HttpClient) { }


    async login(data: SafeFoodLoginUserRequest): Promise<SafeFoodLoginResponse> {
        const res = await this.http.execute<SafeFoodLoginResponse>({
            url: '/usuarios',
            method: 'POST',
            body: data,
        })
        if (!res.data) {
            return {
                status: res.statusCode,
                statusMessage: res.statusMessage,
            } as SafeFoodLoginResponse
        }
        console.log("resposta:", res.data.usuario)
        return res.data;
    }
    async emailExists(email: string): Promise<boolean> {
        const res = await this.http.execute<boolean>({
            url: `/usuarios/${email}/exists`,
            method: 'GET',
        })
        
        if(res.statusCode != 200){
            throw new Error('Impossível fazer a requisição')
        }
        if(!res.data){
            return false;
        }
        return true;
    }

    //sendMailToRecoveryPassword(email: string): void,
}
