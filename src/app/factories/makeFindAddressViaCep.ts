import {FindAddressViaCep} from "../infra/usecases/FindAddressViaCep";
import {makeHttpClient} from "./makeAxiosHttpClient";

export const makeFindAddress = () => new FindAddressViaCep(makeHttpClient());