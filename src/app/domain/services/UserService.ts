import {RemoteModelSignIn} from "@/app/infra/models/RemoteModelSignin";

export interface UserService {
    SignIn(email: string, password: string): Promise<RemoteModelSignIn|null>;
}