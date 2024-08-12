import StarOutline from "@/componentes/icons/StarOutline";
import { Pressable, Text, View } from "react-native";
import { RatingButtonStyles } from "./styles";

export default function RatingButton () {
    return (
        <Pressable style={RatingButtonStyles.container}>
            <Text style={RatingButtonStyles.text}>Avalie aqui a refeição!</Text>
            <StarOutline />
        </Pressable>
    )
}