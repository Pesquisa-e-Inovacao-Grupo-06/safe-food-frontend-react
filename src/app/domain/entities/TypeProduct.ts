export type SafeFoodTypeProductParams = {
    id: number,
    nome: string,
    descricao: string,
    imagem: string
};

export class TypeProduct {
    constructor(public params: Partial<SafeFoodTypeProductParams>) { }
}
