import { TypeProduct } from "@/app/domain/entities/TypeProduct";

export class SafeFoodTypeProductMapper {
    static of(model: SafeFoodTypeProductMapper): TypeProduct {
        return new TypeProduct({
            ...model
        })
    }
}
