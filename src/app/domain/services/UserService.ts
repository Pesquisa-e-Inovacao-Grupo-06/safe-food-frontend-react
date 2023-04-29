import { User } from "../entities/User";

export interface UserService {
    SignIn(): Promise<User>;
}