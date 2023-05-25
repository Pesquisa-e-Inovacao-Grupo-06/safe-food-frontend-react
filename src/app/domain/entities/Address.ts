export type AddressParams = {
  cep: string,
  logradouro: string,
  complemento: string,
  cidade: string,
  estado: string,
  numero: string,
  bairro: string,
  apelido: string,
  formatado?: string
}

export class Address {
  constructor(public params: Partial<AddressParams>) { }
}
