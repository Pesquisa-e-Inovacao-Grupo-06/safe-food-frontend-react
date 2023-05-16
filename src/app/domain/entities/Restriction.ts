import { SafeFoodTipoRestricaoModel } from "@/app/infra/gateway/safefood/models/SafeFoodRestriction";

export type SafeFoodRestrictionParams = {
    id: number,
    tipoRestricao: SafeFoodTipoRestricaoModel,
    restricao: string,
    descricao: string,
    isActive?: boolean

}


export class Restriction {
    constructor(public params: Partial<SafeFoodRestrictionParams>) { }
}
