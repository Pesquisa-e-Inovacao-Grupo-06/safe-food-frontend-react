import { Product } from "@/app/domain/entities/Product";
import { SafeFoodProductModel } from "../models/SafeFoodProduct";

export class SafeFoodProductMapper {
    static of(model: SafeFoodProductModel): Product {
        return new Product({
            ...model,
        });
    }
}

