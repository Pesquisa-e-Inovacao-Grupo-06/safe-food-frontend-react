import { SafeFoodAddressModel } from "./SafeFoodAddress";
import { SafeFoodGenericDataResponse } from "./SafeFoodResponse";
import { SafeFoodUsuarioModel } from "./SafeFoodUser";

export type SafeFoodEstablishmentResponse = SafeFoodGenericDataResponse<{
    nome: string,
    email: string,
    cnpj: string,
    nomeEmpresa: string,
    celular: string,
    contatoCliente: string,
    descricao: string,
    endereco: SafeFoodAddressModel
} & SafeFoodUsuarioModel
>

export type SafeFoodUpdateEstablishmentRequest = {
    imagem: string | null,
    email: string,
    nomeEmpresa: string,
    celular: string,
    contatoCliente: string,
    descricao: string,
    endereco: SafeFoodAddressModel
}

//created:
// {
//     "messages": [
//         "[201 CREATED] - Usuário cadastrado com sucesso.."
//     ],
//         "status": 201,
//             "data": {
//         "id": 1,
//             "imagem": null,
//                 "nome": "João e Maria Padaria",
//                     "email": "estabelecimento@exemplo.com",
//                         "tipoUsuario": "ESTABELECIMENTO",
//                             "dataCriacao": "2023-05-06T00:35:16.838678269",
//                                 "cnpj": "88632505000110",
//                                     "nomeEmpresa": "João e Maria Padaria",
//                                         "celular": "(11) 90990-9999",
//                                             "contatoCliente": "(11) 90990-9999",
//                                                 "descricao": "Restaurante com foco em carnes de soja...",
//                                                     "endereco": {
//             "id": 1,
//                 "apelido": "Casa",
//                     "numero": "2000",
//                         "logradouro": "Avenida Paulista",
//                             "bairro": "Jardins",
//                                 "cidade": "São Paulo",
//                                     "estado": "SP",
//                                         "cep": "08290-210",
//                                             "formatado": "2000 Avenida Paulista, Jardins, São Paulo\n"
//         }
//     },
//     "statusMessage": "Created"
// }