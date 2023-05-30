import {HttpClient} from "@/app/domain/protocols/HttpClient";
import {GetLatLongFromAddress, GetLatLongFromAddressParams, LatLong} from "@/app/domain/usecases/GetLatLongFromAddress";

type AddressComponent={
    long_name: string;
    short_name: string;
    types: string[];
};

type Bounds={
    northeast: {
        lat: number;
        lng: number;
    };
    southwest: {
        lat: number;
        lng: number;
    };
};

type Location={
    lat: number;
    lng: number;
};

type Geometry={
    bounds: Bounds;
    location: Location;
    location_type: string;
    viewport: Bounds;
};

type Result={
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: Geometry;
    partial_match: boolean;
    place_id: string;
    types: string[];
};

type GeocodingResponse={
    results: Result[];
    status: string;
};

export class GetLatLongFromAddressGoogleGeocode implements GetLatLongFromAddress {
    private API_KEY=import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    private BASE_URL_GEOCODE='https://maps.googleapis.com/maps/api/geocode/';

    constructor(private readonly client: HttpClient) { }

    async execute({
        number,
        zipCode
    }: GetLatLongFromAddressParams): Promise<LatLong> {
        const completeAddress=`${number} ${zipCode}`;
        const response=await this.client.execute<GeocodingResponse>({
            url: `${this.BASE_URL_GEOCODE}json?address=${encodeURIComponent(completeAddress)}&key=${this.API_KEY}`,
            method: 'GET'
        });

        console.log(response);

        if(response.statusCode!=200||response.data?.status!='OK'||!response.data?.results[0].geometry.location) {
            throw new Error("Nao foi possivel carregar a latitude de longitude do endereco");
        }

        return {
            lat: response.data?.results[0].geometry.location.lat,
            lng: response.data?.results[0].geometry.location.lng
        };
    }

}