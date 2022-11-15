import { View } from "react-native";
import TouchButton from "../../../componentes/TouchButton";
import { Ionicons, FontAwesome5, FontAwesome, MaterialIcons   } from '@expo/vector-icons';

import styles from './styles'

const restaurantIcon = <Ionicons name="restaurant" size={48} color="white" />
const busIcon = <FontAwesome5 name="bus-alt" size={48} color="white" />
const newsIcon = <FontAwesome name="newspaper-o" size={48} color="white" />
const eventIcon = <MaterialIcons name="event-note" size={52} color="white" />
const articleIcon = <FontAwesome name="paste" size={48} color="white" />
const contactIcon = <MaterialIcons name="contacts" size={48} color="white" />

export default function Home({navigation}){


  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonContainer}>
        <TouchButton 
          legend='Restaurante'
          handleOnPress={() => navigation.navigate('Restaurant')}
          Icon={restaurantIcon}
        />
        <TouchButton 
          legend='Ônibus'
          Icon={busIcon}
          handleOnPress={() => navigation.navigate('Bus')}
        />
      </View>
      <View style={styles.buttonContainer}>
      <TouchButton 
          legend='Notícias'
          Icon={newsIcon}
          handleOnPress={() => navigation.navigate('News')}
        />
        <TouchButton 
          legend='Eventos'
          Icon={eventIcon}
          handleOnPress={() => navigation.navigate('Events')}
        />
      </View>
      <View style={styles.buttonContainer}>
      <TouchButton 
          legend='Artigos'
          Icon={articleIcon}
          handleOnPress={() => navigation.navigate('Articles')}
        />
        <TouchButton 
          legend='Contatos'
          Icon={contactIcon}
          handleOnPress={() => navigation.navigate('Contacts')}
        />
      </View>
    </View>
  )
}