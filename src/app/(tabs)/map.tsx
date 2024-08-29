import { Text, View } from "react-native";
import MapView, { UrlTile } from "react-native-maps";

export default function SettingsScreen () {
    return (
        <View>
            <MapView 
            
            >
                <UrlTile urlTemplate="https://api.maptiler.com/maps/4727213f-c0cb-4cc9-91db-a21acb678f2a/style.json?key=pUYYvwuqRAzZuxfmqfP9"/>
            </MapView>
        </View>
    )
}