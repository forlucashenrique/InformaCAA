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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
        fontFamily: 'Montserrat_700Bold',
    },

    openUrlErrorMessageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    }
    
})