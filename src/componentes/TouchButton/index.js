import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles'

export default function TouchButton({ legend, Icon, handleOnPress }) {
  return (
    <View style={styles.touchContainer}>
      <TouchableOpacity
        style={styles.touchButton}
        onPress={handleOnPress}
      >
        {Icon}
      </TouchableOpacity>
      <Text style={styles.touchText}>{legend}</Text>
    </View>
  )
}