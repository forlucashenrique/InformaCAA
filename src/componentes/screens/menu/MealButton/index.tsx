import { Pressable, Text, View } from "react-native";
import { MealButtonStyles } from "./styles";
import { ReactNode } from "react";

type MealButtonProps = {
    mealTitle: string
    openHour: string
    closeHour: string
    icon: ReactNode
}

export default function MealButton({ mealTitle, openHour, closeHour, icon }: MealButtonProps) {
    return (
        <Pressable style={MealButtonStyles.buttonContainer}>
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