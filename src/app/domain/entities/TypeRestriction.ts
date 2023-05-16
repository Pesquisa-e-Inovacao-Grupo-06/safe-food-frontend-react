export class SafeFoodTypeRestrictionParams {

    constructor(
        tipoRestricao: string,
        id: string
    ) { }

}


export class TypeRestriction {
    constructor(public params: Partial<SafeFoodTypeRestrictionParams>) { }
}
