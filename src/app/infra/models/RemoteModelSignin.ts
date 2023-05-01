import {ResponseSafeFood} from "./ResponseSafeFood";

export type RemoteModelSignIn = {
    token: string,
    usuario: {
        id: number,
        imagem: string | null,
        nome: string,
        email: string,
        tipoUsuario: string,
        dataCriacao: string | null
    },
} & ResponseSafeFood;