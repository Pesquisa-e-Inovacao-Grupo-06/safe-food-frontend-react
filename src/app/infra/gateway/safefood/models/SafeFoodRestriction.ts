export type SafeFoodRestrictionModel = {
    tipoRestricao: SafeFoodTipoRestricaoModel,
    restricao: string,
    descricao: string,
    id: number
}

export type SafeFoodTipoRestricaoModel = {
    tipoRestricao: string,
    id: number
}