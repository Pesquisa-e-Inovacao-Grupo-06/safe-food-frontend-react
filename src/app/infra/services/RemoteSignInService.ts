import { User } from "@/app/domain/entities/User";
import { HttpClient } from "@/app/domain/services/HttpClient";
import { UserService } from "@/app/domain/services/UserService";

export type RemoteSignInResponse = {
    token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleGFtcGxlQGRvbWFpbi5jb20iLCJleHAiOjE2ODI3ODkxNDd9.Xh9MuHnT0EusJurRCw3J5lCBbHQLNWx_8cNRq9pjrd8",
    usuario: {
        id: 1,
        imagem: null,
        nome: "Nome de Exemplo",
        email: "example@domain.com",
        tipoUsuario: "CONSUMIDOR",
        dataCriacao: null
    },
}

export class RemoteSignInService implements UserService {
    constructor(private httpClient: HttpClient) { }
    async SignIn(): Promise<User> {
        const res = await this.httpClient.execute<RemoteSignInResponse>({
            url: '/usuarios',
            method: 'GET',
        });

        if (res.statusCode == 404) {
            throw new Error("login ou senha incorreto!");
        }

        if (res.statusCode != 200) {
            throw new Error("Erro inesperado!");
        }

        const user: User = new User(
            res.data!.usuario.email,
            res.data!.usuario.nome,
            res.data!.token,

        );

        return user;

    }

}