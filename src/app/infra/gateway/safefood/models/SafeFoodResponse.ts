export type SafeFoodResponse = {
    messages: string[],
    status: number,
    statusMessage: string
}

export type SafeFoodGenericDataResponse<T> = {
    data: T
} & SafeFoodResponse;