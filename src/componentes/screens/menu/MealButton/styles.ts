import { StyleSheet } from "react-native";

export const MealButtonStyles = StyleSheet.create({
    buttonContainer: {
        width: 350,
        height: 65,
        borderRadius: 10,
        backgroundColor: '#0B3472',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        elevation: 12,
    },

    mealTextContainer: {
        gap: 4,
    },

    iconContainer: {
        width: 40,
     
    },

    mealTitle: {
        color: '#FFF',
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'Montserrat_600SemiBold',
    },

    mealHour: {
        color: '#FFF',
        fontSize: 14,
        lineHeight: 14,
        fontFamily: 'Montserrat_300Light',
    }
})