import { MapView } from "@/componentes/screens/map";
import MapProvider from "@/componentes/screens/map/provider/MapProvider";

export default function MapScreen () {
    return (
        <MapProvider>
            <MapView />
        </MapProvider>
    )
}


