import { StyleSheet } from "react-native";

export const CampusListHoursStyles = StyleSheet.create({
    container: {
        flex: 1,
        
    },

    hourContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: '#DFEFFF',
        borderRadius: 10,
    },

    hourText: {
        color: '#0B3472',
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium',
    },

    nextBusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    
    nextBusText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Montserrat_600SemiBold',
    }
})