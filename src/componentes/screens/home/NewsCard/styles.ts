import { StyleSheet } from "react-native";

export const NewsCardStyles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomWidth: 1,
        paddingBottom: 12,
        borderBottomColor: '#D9D9D9',
    },

    newsTitle: {
        fontSize: 16,
        lineHeight: 18,
        fontFamily: 'Montserrat_600SemiBold',
        marginBottom: 20,
    },
     
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    footerLeftText: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Montserrat_500Medium',
        color: 'black'
    },

    footerRightText: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Montserrat_300Light',
        color: 'black'
    }
})