import { StyleSheet } from "react-native";

export const BusHoursStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 28,
    },

    fromToContainer: {
        width: '100%',
    },

    fromToTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 12,
    },

    fromToText: {
        fontSize: 16,
        fontFamily: 'Montserrat_700Bold',
        color: '#0B3472',
    },

    fromTo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
    },

    fromToIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },

    textIcon: {
        fontSize: 10,
        color: '#0B3472',
        fontFamily: 'Montserrat_500Medium',
    },

    changeDirectionButton: {
        width: '100%',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#0B3472',
        borderRadius: 10,
        paddingVertical: 12,
    },

    changeDirectionButtonText: {
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#0B3472',
    },

    hourButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },

    hourRouteButton: {
        width: '48%',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#0B3472',
        borderRadius: 10,
        paddingVertical: 16,
    },

    hourRouteButtonText: {
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#0B3472',
    },

   
})