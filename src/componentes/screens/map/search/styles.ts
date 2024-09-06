import { StyleSheet } from "react-native";

export const SearchLocationStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        margin: 20,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        height: 125,
        backgroundColor: "#0B3472",
        gap: 20,
        alignItems: 'center',
        borderRadius: 20,
        padding: 20,
      
    },

    topView: {
        width: 48,
        height: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    textInputContainer: {
        width: '100%',
        position: 'relative',
        
    },

    textInput: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        color: '#0B3472',
    }
})