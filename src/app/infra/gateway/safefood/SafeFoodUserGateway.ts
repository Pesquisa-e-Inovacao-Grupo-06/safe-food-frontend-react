import {HttpClient} from "@/app/domain/protocols/HttpClient";
import {SafeFoodLoginResponse, SafeFoodLoginUserRequest} from "./models/SafeFoodUser";
import {SafeFoodResponse} from "./models/SafeFoodResponse";

export class SafeFoodUserGateway {


    constructor(private readonly http: HttpClient) { }


    async login(data: SafeFoodLoginUserRequest): Promise<SafeFoodLoginResponse> {
        const res=await this.http.execute<SafeFoodLoginResponse>({
            url: '/usuarios',
            method: 'POST',
            body: data,
        });
        if(!res.data) {
            return {
                status: res.statusCode,
                statusMessage: res.statusMessage,
            } as SafeFoodLoginResponse;
        }
        console.log("resposta:", res.data.usuario);
        return res.data;
    }
    async emailExists(email: string): Promise<boolean> {
        const res=await this.http.execute<boolean>({
            url: `/usuarios/${email}/exists`,
            method: 'GET',
        });

        if(res.statusCode!=200) {
            throw new Error('Impossível fazer a requisição');
        }
        if(!res.data) {
            return false;
        }
        return true;
    }

    async enviarEmailRecuperarSenha(email: string): Promise<SafeFoodResponse> {
        const res=await this.http.execute<SafeFoodResponse>({
            url: `/usuarios/${email}/recuperar`,
            method: 'GET',
        });

        if(res.statusCode!=200||!res.data) {
            throw new Error('Impossível fazer a requisição');
        }

        return res.data;
    }

    async atualizarSenha(senha: string, auth: string): Promise<SafeFoodResponse> {
        const res=await this.http.execute<SafeFoodResponse>({
            url: `/usuarios/senha?auth=${auth}`,
            body: {
                senhaNova: senha
            },
            method: 'PATCH',
        });

        if(res.statusCode!=200||!res.data) {
            throw new Error('Impossível fazer a requisição');
        }
        return res.data;
    }

}
