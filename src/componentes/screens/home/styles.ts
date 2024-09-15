import { StyleSheet} from "react-native";

export const HomeStyles = StyleSheet.create({
    scrollViewContainer: {
        width: '100%',
        height: '100%',
        padding: 20,
        alignItems: 'center',
    },

    newsTitles: {
        fontSize: 24,
        lineHeight: 30,
        fontFamily: 'Montserrat_700Bold',
    },
     
    newsSubTitle: {
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'Montserrat_700Bold',
        marginBottom: 24
    },

    newsContainer: {
        width: '100%',
        gap: 20,
    }

})