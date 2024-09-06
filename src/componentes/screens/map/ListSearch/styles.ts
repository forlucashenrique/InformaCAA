import { StyleSheet } from "react-native";


export const ListSearchStyles = StyleSheet.create({
    contentContainer: {
        width: '100%',
        height: "60%",
        backgroundColor: "#0B3472",
        gap: 20,
       // alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
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
    },

    topView: {
        width: 48,
        height: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    inputContainer: {
        width: '100%',
        position: 'relative',
        alignItems: 'center',
        gap: 20,
    },

    textInputContainer: {
        width: '100%',
        position: 'relative',
    },

    textInput: {
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 10,
        color: '#0B3472',
    }
})