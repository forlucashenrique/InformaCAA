import Home from "@/pages/DrawerMenu/Home";
import { Link, useNavigation } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
    return (
        // <Home navigation={navigation} />
        <View>
            <Text>Home</Text>
            <Link href='/details'>
                <Text>Go to Menu</Text>
            </Link>
        </View>
        
    )
}