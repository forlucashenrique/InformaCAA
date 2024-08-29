import { StyleSheet } from "react-native";

export const ItemCardStyles = StyleSheet.create({
    container: {
        
    },

    sectorText: {
        fontSize: 14,
        width: "70%",
        color: '#000',
        fontFamily: 'Montserrat_400Regular',
      },
    
    
      itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        paddingHorizontal: "5%",
        paddingVertical: "1%",
      },

      iconsContainer: {
        gap: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }
})