export type SafeFoodRestrictionModel = {
    id: number
    tipoRestricao: SafeFoodTipoRestricaoModel,
    restricao: string,
    descricao: string,
}

export type SafeFoodTipoRestricaoModel = {
    tipoRestricao: string,
    id: number
}
