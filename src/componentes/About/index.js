import { View, Text } from "react-native";

import styles from "./styles";


export default function About(props){

  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.aboutTitle}>{props.aboutTitle}</Text>
      <View style={styles.aboutContentContainer}>
        <Text style={styles.aboutContentText}>
           {props.aboutText}
        </Text>
      </View>
      {props.children}
    
    </View>
  )
}