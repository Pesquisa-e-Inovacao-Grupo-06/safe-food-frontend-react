import {AxiosHttpClient} from "../infra/services/AxiosHttpClient";

export const makeHttpClient = (baseURL?: string) => new AxiosHttpClient(baseURL);