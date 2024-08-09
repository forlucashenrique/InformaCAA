import Home from "@/pages/DrawerMenu/Home";
import { Link, useNavigation } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
    const navigation = useNavigation();

    
    return (
        <Home navigation={navigation} />
    )
}