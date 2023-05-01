import { User } from "@/app/domain/entities/User";
import { HttpClient } from "@/app/domain/services/HttpClient";
import { UserService } from "@/app/domain/services/UserService";
import {RemoteModelSignIn} from "../models/RemoteModelSignin";
import {resolveConfigFile} from "prettier";


export class RemoteSignInService implements UserService {
    constructor(private httpClient: HttpClient) { }
    async SignIn(email: string, password: string): Promise<RemoteModelSignIn|null> {
        return this.httpClient.execute<RemoteModelSignIn>({
            url: '/usuarios',
            method: 'POST',
            body: {
                email: email,
                senha: password
            }
        }).then(data=>data.data || null);
    }

}