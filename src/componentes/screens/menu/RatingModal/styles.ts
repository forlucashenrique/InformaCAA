import { StyleSheet } from "react-native";

export const RatingModalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        
    },

    headerContainer: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0B3472',
        paddingHorizontal: 15,
        paddingVertical: 12,
    },

    contentContainer: {
        width: '100%',
        height: '100%',
        padding: 20,
    },

    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Montserrat_700Bold',
    },

    mealSelectContainer: {
        width: '100%',
    },

    selectLabelText: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Montserrat_400Regular',
        marginBottom: 4,
    },

    itemsSelectContainer: {
        borderRadius: 12,
        backgroundColor: '#D9D9D9',
       
    },

    itemSelect: {
        color: 'black',
        fontSize: 12,
        paddingVertical: 12,
        paddingHorizontal: 12,
        fontFamily: 'Montserrat_500Regular',
    },

    selectedText: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'Montserrat_500Regular',
       
    },

    selectContainer: {
        width: '100%',
        backgroundColor: '#D9D9D9',
        borderRadius: 12,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },

    placeholderSelect: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'Montserrat_400Regular',
    },

    ratingContainer: {
        marginTop: 30,
        width: '100%',
        gap: 20,
        marginBottom: 25,
    },

    ratingItemContainer: {
        gap: 14,
    },

    starsContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    ratingTitleText: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Montserrat_400Regular',
    },

    commentInput: {
        width: '100%',
        //height: 130,
        borderColor: '#D9D9D9',
        borderRadius: 12,
        marginTop: 8,
        padding: 12,
        backgroundColor: '#D9D9D9',
        fontFamily: 'Montserrat_400Regular',
    },

    commentText: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Montserrat_400Regular',
    },

    sendButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#0B3472',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Montserrat_600SemiBold',
    }
    
})