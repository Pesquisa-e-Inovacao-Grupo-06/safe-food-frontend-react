import { faker } from "@faker-js/faker";
export type MoreFavoriteType = {
    name?: string;
    description?: string;
    ingredients?: string[];
    price: number;
    nameEstablishment?: string;
    workingPlaceEstablishment?: boolean;
    locationEstablishment?: string;
    img?: string;
}
export class MoreFavorite {
    constructor(public params: Partial<MoreFavoriteType>) { }


};

function moreFavoriteListMock(): MoreFavorite[] {
    return [
        new MoreFavorite({

            name: "Macarrão com cogumelos",
            description: "Um delicioso prato de macarrão vegano com cogumelos frescos",
            ingredients: ["macarrão", "cogumelos", "azeite", "alho", "ervas"],
            price: 25.90,
            nameEstablishment: "Restaurante Vegan Delight",
            locationEstablishment: "Rua das Flores, 123",
            workingPlaceEstablishment: true,
            img: "https://biancazapatka.com/wp-content/uploads/2019/04/mushroom-pasta-spinach-best-recipe-easy-vegan-healthy-pasta-spinat-rezept-einfach-champignons-tasty.jpg",
        }
        ),
        new MoreFavorite({
            name: "Hambúrguer de grão-de-bico",
            description: "Um saboroso sanduíche vegano com hambúrguer de grão-de-bico caseiro",
            ingredients: ["pão de hambúrguer", "hambúrguer de grão-de-bico", "cebola caramelizada", "alface", "tomate", "molho especial"],
            price: 19.90,
            nameEstablishment: "Lanchonete Veggie",
            locationEstablishment: "Avenida das Árvores, 456",
            workingPlaceEstablishment: true,
            img: "https://www.iped.com.br/_upload/content/2015/05/18/dicas-culinaria-vegana.jpg"
        })
    ];
}

export const getMoreFavoriteListMock: MoreFavorite[] = moreFavoriteListMock();