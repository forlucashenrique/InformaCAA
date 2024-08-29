import { Text, View } from "react-native";
import MapView, { UrlTile, PROVIDER_GOOGLE } from "react-native-maps";


export default function SettingsScreen () {
    return (
        <View>
            <MapView
                provider={PROVIDER_GOOGLE}
            >

               

            </MapView>
        </View>
    )
}