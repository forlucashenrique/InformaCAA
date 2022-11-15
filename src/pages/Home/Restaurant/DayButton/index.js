import { TouchableOpacity, Text } from "react-native";
import {useState} from 'react';
import styles from './styles';

export default function Day({day, dateDay, handleOnPress, selectedStyle}) {

  const [selected, setSelected] = useState(1);

  const changeDay = () => {
    handleOnPress(day)
  }

  return (
      <TouchableOpacity 
        style={[selectedStyle, styles.touchContainer]}
        onPress={changeDay}
      >
      <Text style={styles.touchText}>{day}</Text>
      <Text style={styles.touchText}>{dateDay}</Text>
    </TouchableOpacity>
  )
}