import * as Linking from 'expo-linking';
import { SafeAreaView, View, Text, SectionList } from "react-native"
import contactsData from '../../../service/dados/contatos'
import styles from "./styles"

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Item = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.sectorText}>{item.sectorText}</Text>
      {item.tel ? <FontAwesome 
        name="phone-square" 
        size={24} color="#0A3472" 
        onPress={() => Linking.openURL(`tel:${item.tel}`)} /> : (
          <Feather name="phone-off" size={24} color="#0A3472" />
        ) }
      
      
      
      {item.email ? <MaterialCommunityIcons 
        name="email" 
        size={24}
        color="#0A3472" 
        onPress={() => Linking.openURL(`mailto:${item.email}`)} 
        /> : 
          <Feather name="slash" size={24} color="#0A3472" /> }
    </View>
  )
}


export default function Contacts() {


  return (
    <SafeAreaView style={styles.containerContacts}>
      <SectionList 
        sections={contactsData.DATA}
        renderItem={({item}) => <Item item={item}/>}
        keyExtractor={(item, index) => index}
        renderSectionHeader={({ section: { sectorTitle } }) => (
          <Text style={styles.sectionTitle} >{sectorTitle}</Text>
      )}
      />

    
    </SafeAreaView>
  )
}