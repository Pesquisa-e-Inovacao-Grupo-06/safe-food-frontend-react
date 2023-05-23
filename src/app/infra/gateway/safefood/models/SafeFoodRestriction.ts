export type SafeFoodRestrictionModel = {
    id: number
    tipoRestricao: SafeFoodTipoRestricaoModel,
    name: string,
    descricao: string,
}

export type SafeFoodTipoRestricaoModel = {
    tipoRestricao: string,
    id: number
}
