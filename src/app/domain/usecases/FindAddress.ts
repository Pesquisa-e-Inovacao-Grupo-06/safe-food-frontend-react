import {Address} from "../entities/Address";

export interface FindAddress{
    execute(cep: string): Promise<Address>;
}