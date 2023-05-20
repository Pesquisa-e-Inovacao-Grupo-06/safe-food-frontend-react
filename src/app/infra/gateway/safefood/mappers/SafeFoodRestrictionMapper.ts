import { Restriction } from "@/app/domain/entities/Restriction";
import { SafeFoodRestrictionModel } from "../models/SafeFoodRestriction";


export class SafeFoodRestrictionMapper {
    static of(model: SafeFoodRestrictionModel, isActive: boolean = false): Restriction {
        return new Restriction({
            ...model, isActive
        }
        )
    }
}
