export type EstablishmentFoodType = {
    name: string;
    description: string;
    price: number;
    currentDistance: number;
    avegareRate: 1 | 2 | 3 | 4 | 5;
    img: string;
};

export class FoodEstablishment {
    constructor(public params: EstablishmentFoodType) { }
};

function establishmentListMock(): FoodEstablishment[] {
    return [
        new FoodEstablishment({
            name: "Macarrão com cogumelos",
            description: "Um delicioso prato de macarrão vegano com cogumelos frescos",
            price: 29.00,
            currentDistance: 500,
            avegareRate: 3,
            img: "https://via.placeholder.com/300"

        }), new FoodEstablishment({
            name: "Macarrão com cogumelos",
            description: "Um delicioso prato de macarrão vegano com cogumelos frescos",
            price: 29.00,
            currentDistance: 500,
            avegareRate: 3,
            img: "https://via.placeholder.com/300"

        }), new FoodEstablishment({
            name: "Macarrão com cogumelos",
            description: "Um delicioso prato de macarrão vegano com cogumelos frescos",
            price: 29.00,
            currentDistance: 500,
            avegareRate: 3,
            img: "https://via.placeholder.com/300"

        }), new FoodEstablishment({
            name: "Macarrão com cogumelos",
            description: "Um delicioso prato de macarrão vegano com cogumelos frescos",
            price: 29.00,
            currentDistance: 500,
            avegareRate: 3,
            img: "https://via.placeholder.com/300"

        }),
    ]
}

export const getFoodEstablishmentListMock: FoodEstablishment[] = establishmentListMock();
