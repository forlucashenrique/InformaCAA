import { View, Text, Pressable } from 'react-native';
import styles from './styles'

export default function ViewError(props){
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{props.TextError}</Text>
      <Pressable 
        onPress={() => props.handleReload()}
        style={styles.reloadButton}>
        <Text style={styles.textReloadButton}>Reload</Text>
      </Pressable>
    </View>
  )
} 