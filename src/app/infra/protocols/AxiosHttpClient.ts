import { HttpClient, HttpClientMethodParams, HttpResponse } from "@/app/domain/protocols/HttpClient";
import axios, { RawAxiosResponseHeaders, AxiosResponseHeaders } from 'axios'

type AxiosAllHeaders = RawAxiosResponseHeaders | AxiosResponseHeaders;

export class AxiosHttpClient implements HttpClient<AxiosAllHeaders>{
    constructor(private readonly baseURL?: string) { }
    async execute<M = unknown, T = any>(params: HttpClientMethodParams<T, AxiosAllHeaders>): Promise<HttpResponse<M>> {
        let { headers, method, url, body, basicAuth, contentType, paramsURL, jwt } = params;
        if (contentType) {
            headers = {
                ...headers,
                "Content-Type": contentType,
            };
        }
        if (jwt) {

            headers = {
                ...headers,
                "Authorization": `Bearer ${jwt}`,
            };

        }

        let data = await axios<M>({
            method: method ? method.toLowerCase() : "get",
            baseURL: this.baseURL,
            headers: headers,
            data: body,
            url: url,
            auth: basicAuth,
            params: paramsURL,
            validateStatus: () => true
        });

        const response: HttpResponse<M> = {
            headers: data.headers,
            statusCode: data.status,
            data: data.data,
            statusMessage: data.statusText
        }

        return response;
    }

}