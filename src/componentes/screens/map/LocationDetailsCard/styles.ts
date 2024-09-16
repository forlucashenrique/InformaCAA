import { StyleSheet } from "react-native";

export const LocationDetailsCardStyles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#fff',
        height: 85,
    },

    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    expandedContentContainer: {
        width: '100%',
        padding: 10,
        gap: 15,
    },
    
    titleText: {
        color: '#0B3472',
        fontSize: 14,
        fontFamily: 'Montserrat_600SemiBold', 
    },

    descriptionText: {
        color: '#0B3472',
        fontSize: 14,
        fontFamily: 'Montserrat_400Regular',
    },

    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 10,
    }
})