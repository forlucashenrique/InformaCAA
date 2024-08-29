import MarkerPoint from "@/componentes/icons/Filled/MarkerPoint";
import SearchLocation from "@/componentes/screens/map/search";
import MapLibreGL, { CameraBounds } from "@maplibre/maplibre-react-native";
import { StyleSheet} from "react-native";
import { useWindowDimensions } from "react-native";
import { View as MotiView } from 'moti';
import { useState } from "react";
import ListSearch from "@/componentes/screens/map/ListSearch";



const apiKey = '45213a8e-0145-4f0f-ae46-c6e933501eb1'
MapLibreGL.setAccessToken(apiKey);
const styleUrl = `https://tiles.stadiamaps.com/styles/alidade_smooth.json?api_key=${apiKey}`;


const bounds: CameraBounds = {
    ne: [ -35.97836004818691, -8.226336048879412],
    sw: [-35.98890222889023, -8.224892334544853],
}


export default function SettingsScreen () {

    const { width, height } = useWindowDimensions();

    const [showLocationsList, setShowLocationsList] = useState<boolean>(false);

    const openListSearch = () => setShowLocationsList(true);
    const closeListSearch = () => setShowLocationsList(false);

    return (
        <MotiView style={styles.page}>
            <MapLibreGL.MapView 
                style={styles.map} 
                styleURL={styleUrl}            
            >
              <MapLibreGL.Camera 
               zoomLevel={15} 
               centerCoordinate={[-35.98413839613072, -8.22554021909894]} 
               maxZoomLevel={18} 
                minZoomLevel={15} 
                followZoomLevel={15} 
                maxBounds={bounds}
              />

                <MapLibreGL.PointAnnotation
                        id="caruaru-marker"
                        title="Quadra"
                        coordinate={[-35.98444742136666, -8.224546993293114]}
                        onSelected={() => alert('Você clicou na Quadra')}
                    >
                        <MarkerPoint />
                </MapLibreGL.PointAnnotation>
                
            </MapLibreGL.MapView>

            {
                showLocationsList ? <ListSearch onClose={closeListSearch} visible={showLocationsList}/> : <SearchLocation handleOpenListSearch={openListSearch} />
            }

            
        </MotiView>
    )
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        flex: 1,
        alignSelf: 'stretch',
    },
});
