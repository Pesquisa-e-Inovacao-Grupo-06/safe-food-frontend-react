import { Cache } from "@/app/domain/protocols/Cache";
import { MapsTemplate } from "@/components/templates/maps/maps-template";

export type MapsProps = {
    cache: Cache
}
function MapsPage({ cache }: MapsProps) {

    return (
        <MapsTemplate

        />
    );
}
export default MapsPage;