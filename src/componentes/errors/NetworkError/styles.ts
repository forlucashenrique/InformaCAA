import { StyleSheet } from "react-native";

export const NetworkErrorStyles = StyleSheet.create({
    netWorkErrorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    networkMessageContainer: {
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

    netWorkErrorText: {
        fontSize: 20,
        fontFamily: 'Montserrat_700Bold',
    },
})