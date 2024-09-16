import { StyleSheet } from "react-native";
export const EventsButtonStyles = StyleSheet.create({
    shadowContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 52,
        height: 52,
        borderRadius: 30,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
    },

    container: {
        backgroundColor: '#0B3472',
        width: 52,
        height: 52,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})