import { Restriction } from "../entities/Restriction";

export interface RestrictionService {
    findAllRestriction(): Promise<Restriction[]>;
}