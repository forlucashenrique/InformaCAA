import ItemCard from "@/componentes/screens/contacts/ItemCard";
import { SafeAreaView, StyleSheet } from "react-native";
import { SectionList } from "react-native";
import { Text, View } from "react-native";

import { contacts } from "@/data/contacts";

export default function ContactsScreen () {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList 
                sections={contacts.data}
                renderItem={({item}) => <ItemCard item={item}/>}
                keyExtractor={(item, index) => `${item}${index}`}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} 
                renderSectionHeader={({ section: { sectorTitle } }) => (
                    <Text style={styles.sectionTitle} >{sectorTitle}</Text>
                )}
            />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: "5%"
    },

    sectionTitle: {
        fontSize: 15,
        paddingVertical: 5,
        marginBottom: 10,
        color: '#000',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderColor: '#000',
        fontFamily: 'Montserrat_700Bold',
      },
})