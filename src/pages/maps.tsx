import {Establishment} from "@/app/domain/entities/Establishment";
import {Cache} from "@/app/domain/protocols/Cache";
import {GetLatLongFromAddress, LatLong} from "@/app/domain/usecases/GetLatLongFromAddress";
import {SafeFoodEstablishmentMapper} from "@/app/infra/gateway/safefood/mappers/SafeFoodEstablishmentMapper";
import {SafeFoodEstablishmentModel} from "@/app/infra/gateway/safefood/models/SafeFoodEstablishment";
import {Box} from "@/components/atoms/box";
import {ImageAtom} from "@/components/atoms/img";
import {Loading} from "@/components/atoms/loading";
import {Text} from "@/components/atoms/text";
import {Subtitle} from "@/styles/components/text/Subtitle";
import {GoogleMap, LoadScript, Marker, MarkerF, OverlayView, OverlayViewF} from "@react-google-maps/api";
import React, {useEffect, useState} from "react";

const containerStyle={
    width: '80vw',
    height: '60vh'
};

export type MapsProps={
    getLatLongFromAddress: GetLatLongFromAddress;
    establishment: Establishment;
};

export const MapsPage: React.FC<MapsProps>=({establishment, getLatLongFromAddress}) => {

    const GOOGLE_API_KEY=import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const [center, setCenter]=useState<LatLong>({} as LatLong);

    useEffect(() => {
        getLatLongFromAddress.execute({
            number: establishment.params.endereco!.numero,
            zipCode: establishment.params.endereco!.cep
        })
            .then(res => {
                setCenter(res);
            }).catch();
    }, []);

    return center&&establishment? (
        <LoadScript
            googleMapsApiKey={GOOGLE_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
                id="map-establishment"
            >

                <OverlayViewF
                    key={"item"}
                    position={center}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                    <Box background="#099110" shadow="md" display="flex" flexDirection='column' padding="10px" width="20vh" height="auto" borderRadius='lg' alignItems="center" justify="center" gap="4px">
                        <ImageAtom style={{
                            borderRadius: "4px",
                            marginBottom: 12
                        }} src={establishment!.params.imagem||"https://via.placeholder.com/300"} width={100} />
                        <Subtitle color="white" center>{establishment!.params.nome}</Subtitle>
                        <br />
                        <Text typeText="text-md" color="white" style={{
                            textAlign: 'center'
                        }}>{establishment.params.endereco?.formatado}</Text>
                    </Box>
                    <MarkerF position={center} label={establishment.params.nome} title={establishment.params.endereco?.formatado} />
                </OverlayViewF>

            </GoogleMap>
        </LoadScript>
    ):<Box><Loading size={40} /></Box>;
};
export default MapsPage;