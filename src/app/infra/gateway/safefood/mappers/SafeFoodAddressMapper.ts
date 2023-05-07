import {Address} from "@/app/domain/entities/Address";
import {SafeFoodAddressModel} from "../models/SafeFoodAddress";

export class SafeFoodAddressMapper {
    static of(model: SafeFoodAddressModel): Address{
        return new Address({
            ...model
        })
    }
}