import { TypeProduct } from "@/app/domain/entities/TypeProduct";
import { TypeProductModal } from "../models/SafeFoodProduct";


export class SafeFoodTypeProductMapper {
    static of(model: TypeProductModal): TypeProduct {
        return new TypeProduct(model.id, model.nome, model.descricao);
    }
}
