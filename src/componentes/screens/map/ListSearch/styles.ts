import { StyleSheet } from "react-native";


export const ListSearchStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: "60%",
        backgroundColor: "#0B3472",
        gap: 20,
        alignItems: 'center',
        borderRadius: 20,
        padding: 20,
        //marginBottom: -30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
     
    },

    blurContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    closeButton: {
        width: 48,
        height: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    }
})