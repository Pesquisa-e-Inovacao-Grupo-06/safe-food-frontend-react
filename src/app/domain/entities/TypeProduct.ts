export type SafeFoodTypeProductParams = {
    id: number,
    nome: string,
    descricao: string,
};

export class TypeProduct {
    constructor(public id: number, public nome: string, public descricao: string) { }
}
