enum UserType {
    CONSUMIDOR = "CONSUMIDOR",
    ESTABELECIMENTO = "ESTABELECIMENTO",
}

export class User {
    constructor(public email: string, public name: string, public token: string, public imagem?: any, public userType?: UserType) { }
}


export class SignIn {
    constructor(public email: string, public password: string) {

    }
}


// type ResponseLoginExample = {
//     name: string;
//     token: string;
// };
// type RequestLoginExample = {
//     email: string;
//     password: string;
// };