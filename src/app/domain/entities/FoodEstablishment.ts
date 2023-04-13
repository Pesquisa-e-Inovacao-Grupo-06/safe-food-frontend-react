import { EstablishmentFoodProps } from "@/components/organisms/card-establishment-food/card-establishment-food-organism";

export type EstablishmentFoodType = {
    name: string;
    description: string;
    price: string;
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
            price: "R$" + 29.00,
            currentDistance: 500,
            avegareRate: 3,
            img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-comida-vegana.jpg"

        }), new FoodEstablishment({
            name: "Macarrão com cogumelos",
            description: "Um delicioso prato de macarrão vegano com cogumelos frescos",
            price: "R$" + 29.00,
            currentDistance: 500,
            avegareRate: 3,
            img: "https://www.montarumnegocio.com/wp-content/uploads/2019/11/Receitas-de-comidas-veganas-para-vender.jpg"

        }), new FoodEstablishment({
            name: "Macarrão com cogumelos",
            description: "Um delicioso prato de macarrão vegano com cogumelos frescos",
            price: "R$" + 29.00,
            currentDistance: 500,
            avegareRate: 3,
            img: "https://s2.glbimg.com/hWW1b5fTDT59diIbBsaKZoiBSJE=/0x0:1177x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/c/l/ANT8n6S122VIhUrhCT9A/prato-de-comida-vegana-eu-atleta.jpg"

        }), new FoodEstablishment({
            name: "Macarrão com cogumelos",
            description: "Um delicioso prato de macarrão vegano com cogumelos frescos",
            price: "R$" + 29.00,
            currentDistance: 500,
            avegareRate: 3,
            img: "https://i.blogs.es/e78f73/recetas-vegans/1366_2000.jpg"

        }),
    ]
}

export const getFoodEstablishmentListMock: FoodEstablishment[] = establishmentListMock();