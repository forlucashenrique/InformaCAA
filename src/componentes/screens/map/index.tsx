import MarkerPoint from "@/componentes/icons/Filled/MarkerPoint";
import SearchLocation from "@/componentes/screens/map/search";
import MapLibreGL, { CameraBounds } from "@maplibre/maplibre-react-native";
import { StyleSheet, Text, View} from "react-native";
import { View as MotiView } from 'moti';
import { useEffect, useRef, useState } from "react";
import ListSearch from "@/componentes/screens/map/ListSearch";
import { locations } from "@/data/mapLocations";
import { useMap } from "./provider/MapProvider";
import { useNetInfo } from "@react-native-community/netinfo";
import NetworkError from "@/componentes/errors/NetworkError";


const apiKey = '45213a8e-0145-4f0f-ae46-c6e933501eb1'
MapLibreGL.setAccessToken(apiKey);
const styleUrl = `https://tiles.stadiamaps.com/styles/alidade_smooth.json?api_key=${apiKey}`;


const bounds: CameraBounds = {
    ne: [ -35.97836004818691, -8.226336048879412],
    sw: [-35.98890222889023, -8.224892334544853],
}

export const MapView = () => {
    
    const {
        centerCoordinate,
        zoomValue,
        setZoomValue,
        showLocationsList,
        openListSearch,
        setScrollToIndex,
        setSelectedLocation,
        selectedLocation,
    } = useMap()

    const netInfo = useNetInfo()
    const [appConnected, setAppConnected] = useState(true)

    const markerRef = useRef<MapLibreGL.PointAnnotationRef>(null);

    useEffect(() => {
        if(markerRef.current){
          markerRef.current.refresh();
        }
      }, [markerRef.current]);

    
    useEffect(() => {
        if (netInfo.isConnected) {
            setAppConnected(true)
        } else {
            setAppConnected(false)
        }
    }, [netInfo])
  
    return (

        <>
            {
                appConnected ? (
                    <MotiView style={styles.page}>
                        <MapLibreGL.MapView 
                            attributionEnabled={false}
                            style={styles.map} 
                            styleURL={styleUrl}            
                            onRegionDidChange={(event) => {
                                const { zoomLevel } = event.properties;

                                setZoomValue(zoomLevel);
                            }}
                        >
                        <MapLibreGL.Camera 
                            zoomLevel={zoomValue} 
                            centerCoordinate={centerCoordinate} 
                            maxZoomLevel={18} 
                            minZoomLevel={15} 
                            followZoomLevel={15} 
                            maxBounds={bounds}

                        />
                        
                            {
                                locations.map((location, index) => (
                                    <MapLibreGL.PointAnnotation
                                        key={index}
                                        id={`pointAnnotation-${index}`}
                                        coordinate={location.coordinates}
                                        title={location.title}
                                        selected={selectedLocation === location.title}
                                        
                                        onSelected={() => {
                                            setSelectedLocation(location.title);
                                            openListSearch();
                                            setZoomValue(15);
                                            setScrollToIndex(index);
                                        }}
                                        ref={markerRef}
                                    >
                                        <MapLibreGL.SymbolLayer
                                            id={`marker-${index}`}
                                            style={{
                                                iconImage: 'marker-15',
                                                textSize: 12,
                                                iconSize: 1.5,
                                                textAllowOverlap: true,
                                                iconKeepUpright: true,
                                                textIgnorePlacement: true,
                                                textAnchor: 'top',
                                            }}
                                            
                                        >
                                            <View style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: 8,
                                            }}>
                                                <>
                                                    {
                                                        zoomValue > 16 &&  <Text style={{
                                                            color: selectedLocation === location.title ? '#D61028' : '#0B3472',
                                                            fontSize: 12,
                                                        }} >{location.title}</Text>
                                                    }
                                                </>
                                                {
                                                    selectedLocation === location.title ? <MarkerPoint fillColor="#D61028" /> : <MarkerPoint fillColor="#0B3472" />
                                                }
                                                
                                            </View>
                                            
                                        </MapLibreGL.SymbolLayer>
                                    </MapLibreGL.PointAnnotation>
                                ))
                            }
                            
                            
                        </MapLibreGL.MapView>
                                {
                                    showLocationsList ? <ListSearch /> : <SearchLocation />
                                }
                    </MotiView>
                ) : (
                    <NetworkError />
                )
            }
        </>
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