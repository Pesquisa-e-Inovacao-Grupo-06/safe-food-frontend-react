import { TypeProduct } from "@/app/domain/entities/TypeProduct";
import { SafeFoodCategoryProductModel } from "../models/SafeFoodProduct";

export class SafeFoodTypeProductMapper {
    static of(model: SafeFoodCategoryProductModel): TypeProduct {
        return new TypeProduct({ id: parseInt(model.id), descricao: model.descricao, nome: model.nome })
    }
}
