export type GetLatLongFromAddressParams={
    number: string,
    zipCode: string;
};

export type LatLong={
    lat: number,
    lng: number;
};
export interface GetLatLongFromAddress {
    execute(params: GetLatLongFromAddressParams): Promise<LatLong>;
}