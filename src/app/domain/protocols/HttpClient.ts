export type HTTP_METHOD = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
export type HttpResponse<M> = {
    data?: M,
    headers: any,
    statusCode: number,
    statusMessage: string
}
export type HttpBasicAuth = {
    username: string,
    password: string
}
export type ContentTypeDefaults = "application/json" | "multipart/form-data";
export type HttpClientMethodParams<T, H> = {
    method?: HTTP_METHOD,
    body?: T,
    headers?: H,
    jwt?: string,
    url: string,
    basicAuth?: HttpBasicAuth,
    contentType?: ContentTypeDefaults
    paramsURL?: any
}
export interface HttpClient<H = any> {
    execute<M = unknown, T = any>(params: HttpClientMethodParams<T, H>): Promise<HttpResponse<M>>
}