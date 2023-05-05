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
            return {
                status: res.statusCode,
                statusMessage: res.statusMessage,
            } as SafeFoodLoginResponse
        }
        return res.data;
    }
    //sendMailToRecoveryPassword(email: string): void,
}