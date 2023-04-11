export type ConsumerParams = {
    id?: number;
    name: string;
    email: string;
    password: string;
    birthday?: Date;
    address_cep?: string;
    address_logradouro?: string;
    address_number?: string;
    address_complement?: string;
    address_state?: string;
    createdAt?: Date;
    image?: string;
    restrictions?: string[];
}
export class Consumer {
    constructor(public params?: Partial<ConsumerParams>){}
}