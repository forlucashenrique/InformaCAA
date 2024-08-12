import { StyleSheet } from "react-native";

export const MenuStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 20,
        gap: 174,
    },

    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#0B3472',
    },

    dayButton: {
        padding: 10,
        borderRadius: 5,
    },

    dayText: {
        color: '#0B3472',
        fontSize: 16,
        lineHeight: 18,
        fontFamily: 'Montserrat_600SemiBold'
    },

    buttonsContainer: {
        gap: 20,
        marginBottom: 90
    },

    ratingButtonContainer: {
        marginTop: 90,
    }
})