import { Pressable, Text, View, PressableProps } from "react-native";
import { MealButtonStyles } from "./styles";
import { ReactNode, } from "react";

type MealButtonProps = {
    mealTitle: string
    openHour: string
    closeHour: string
    icon: ReactNode
} & PressableProps;

export default function MealButton({ mealTitle, openHour, closeHour, icon, ...props}: MealButtonProps) {
    return (
        <Pressable style={MealButtonStyles.buttonContainer} {...props} >
            <View style={MealButtonStyles.iconContainer}>
                {icon}
            </View>
            <View style={MealButtonStyles.mealTextContainer}>
                <Text style={MealButtonStyles.mealTitle}>{mealTitle}</Text>
                <Text style={MealButtonStyles.mealHour}>{openHour} - {closeHour} hrs</Text>
            </View>
        </Pressable>
    )
}