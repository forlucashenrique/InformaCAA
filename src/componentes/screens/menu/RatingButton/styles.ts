import { StyleSheet } from "react-native";

export const RatingButtonStyles = StyleSheet.create({
    container: {
        width: 350,
        height: 50,
        borderWidth: 2,
        borderColor: '#0B3472',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 8,
        alignItems: 'center',
        
    },

    text: {
        color: '#0B3472',
        fontSize: 16,
        lineHeight: 18,
        fontFamily: 'Montserrat_700Bold'
    }
})