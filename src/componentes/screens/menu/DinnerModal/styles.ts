import { StyleSheet } from "react-native";

export const DinnerModalStyles = StyleSheet.create({
    shadowContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
     modalContainer: {
        width: 310,
        backgroundColor: '#DFEFFF',
        borderRadius: 10,
        padding: 20,
    },

    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    
    },

    dinnerTitle: {
        color: '#0B3472',
        fontSize: 24,
        fontFamily: 'Montserrat_700Bold',
    },

    menuItemContainer: {
        width: '100%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    containerItem: {
        width: '100%',
        justifyContent: 'center',
        gap: 2,
        marginBottom: 8,
    },


    menuItem: {
        color: '#0B3472',
        fontSize: 12,
        fontFamily: 'Montserrat_500Medium',
        borderRadius: 10,
        width: '100%',
    }
})