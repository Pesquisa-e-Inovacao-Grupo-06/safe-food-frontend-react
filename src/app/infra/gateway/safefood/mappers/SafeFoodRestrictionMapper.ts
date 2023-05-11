import { Restriction } from "@/app/domain/entities/Restriction";
import { SafeFoodRestrictionModel } from "../models/SafeFoodRestriction";

// export const of = (model: SafeFoodRestrictionModel) => new Restriction(model.id, model.restricao, model.descricao);

export class SafeFoodRestrictionMapper {
    static of(model: SafeFoodRestrictionModel): Restriction {
        return new Restriction(
            model.id, model.restricao, model.descricao
        )
    }
}