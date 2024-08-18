import StarOutline from "@/componentes/icons/StarOutline";
import { Pressable, Text, PressableProps } from "react-native";
import { RatingButtonStyles } from "./styles";

export default function RatingButton ({...props}: PressableProps) {
    return (
        <Pressable style={RatingButtonStyles.container} {...props}>
            <Text style={RatingButtonStyles.text}>Avalie aqui a refeição!</Text>
            <StarOutline />
        </Pressable>
    )
}