import { Restriction } from "@/app/domain/entities/Restriction";
import { SafeFoodRestrictionModel } from "../models/SafeFoodRestriction";


export class SafeFoodRestrictionMapper {
    static of(model: SafeFoodRestrictionModel, isActive: boolean = false): Restriction {
        return new Restriction({
            descricao: model.descricao,
            id: model.id,
            restricao: model.restricao,
            tipoRestricao: model.tipoRestricao,
            isActive
        }
        )
    }
    static ofEntity({params}: Restriction): SafeFoodRestrictionModel {
        return {
            ...params,
        }
    }
}
