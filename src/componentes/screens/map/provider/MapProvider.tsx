import { createContext, useContext, useMemo, useState } from "react";

type MapContextType = {
    centerCoordinate: [number, number];
    selectedLocation: string | null;
    zoomValue: number;
    showLocationsList: boolean;
    scrollToIndex: number;
    dataSourceCords: number[];
    setCenterCoordinate: (coordinate: [number, number]) => void;
    setZoomValue: (zoom: number) => void;
    openListSearch: () => void;
    closeListSearch: () => void;
    setSelectedLocation: (location: string | null) => void;
    setDataSourceCords: (cords: number[]) => void;
    setScrollToIndex: (index: number) => void;
}

type MapProviderProps = {
    children: React.ReactNode;
}

type DataSourceCords = {
    [key: string]: number;
}

const MapContext = createContext({} as MapContextType);

export default function MapProvider({children}: MapProviderProps) {
    const [centerCoordinate, setCenterCoordinate] = useState<[number, number]>([-35.98413839613072, -8.22554021909894]);
    const [showLocationsList, setShowLocationsList] = useState<boolean>(false);
    const openListSearch = () => setShowLocationsList(true);
    const closeListSearch = () => setShowLocationsList(false);
    const [zoomValue, setZoomValue] = useState<number>(15);
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

    const [dataSourceCords, setDataSourceCords] = useState<number[]>([0, 1, 2, 3, 4, 5]);
    const [scrollToIndex, setScrollToIndex] = useState<number>(0);


    const contextValue = useMemo(() => ({
        centerCoordinate,
        showLocationsList,
        zoomValue,
        selectedLocation,
        dataSourceCords,
        scrollToIndex,
        setScrollToIndex,
        setDataSourceCords,
        setCenterCoordinate,
        setZoomValue,
        openListSearch,
        closeListSearch,
        setSelectedLocation,
    }), [
        centerCoordinate,
        zoomValue,
        showLocationsList,
        selectedLocation,
        dataSourceCords,
        scrollToIndex,
        setDataSourceCords,
        setScrollToIndex,
        setZoomValue,
        setSelectedLocation,
        setCenterCoordinate,
        openListSearch,
        closeListSearch,
    ] )

    return (
        <MapContext.Provider value={contextValue}>
            {children}
        </MapContext.Provider>
    )
}

export const useMap = () => {
    return useContext(MapContext);
}