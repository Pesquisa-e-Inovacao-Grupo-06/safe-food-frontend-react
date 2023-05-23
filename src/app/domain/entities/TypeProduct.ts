export type SafeFoodTypeProductParams = {
    id: number,
    nome: string,
    descricao: string,
};

export class TypeProduct {
    constructor(public params: Partial<SafeFoodTypeProductParams>) { }
}
