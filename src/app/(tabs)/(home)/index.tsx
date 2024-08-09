
import Home from "@/componentes/screens/home";
import { Link, useNavigation } from "expo-router";
import { ScrollView, Text, View } from "react-native";


export default function HomeScreen() {
    return (
        <ScrollView 
            style={{
                flex: 1,
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        > 
            <Home />
        </ScrollView>
    )
}