import { StyleSheet } from "react-native";

export const CustomWebViewStyles = StyleSheet.create({
    container: {
        flex: 1,
       // marginTop: Constants.statusBarHeight,
    },

    loading: {
        width: '100%', 
        height: '100%',
        justifyContent: 'center', 
        alignItems: 'center', 
    },

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

    openUrlError: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    openUrlErrorText: {
        fontSize: 20,
        color: "0B3472",
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
    },

    openUrlErrorMessageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 10,
    },

    openBrowserButton: {
        backgroundColor: '#0B3472',
        padding: 10,
        borderRadius: 5,
    },

    openBrowserButtonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Montserrat_700Bold',
    }
    
})