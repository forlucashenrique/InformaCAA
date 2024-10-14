import { Text } from "react-native";
import { View } from "react-native";
import * as Linking from 'expo-linking';
import { MaterialCommunityIcons, FontAwesome, Feather, Entypo} from '@expo/vector-icons';
import { ItemCardStyles } from "./styles";


type ItemCardProps = {
    item: {
        sectorText: string;
        tel: string;
        email: string;
    }
}

export default function ItemCard ({ item }: ItemCardProps) {
    return (
      <View style={ItemCardStyles.itemContainer}>
        <Text style={ItemCardStyles.sectorText}>{item.sectorText}</Text>
        
        <View style={ItemCardStyles.iconsContainer}>
        
            {
                item.tel ?  
                    <Entypo name="phone" size={24} color="#0B3472" onPress={() => Linking.openURL(`tel:${item.tel}`)} /> : 
                (
                    <Entypo name="phone" size={24} color="#B3B3B3" />
                ) 
            }
        

            {item.email ? 
                <MaterialCommunityIcons 
                    name="email" 
                    size={24}
                    color="#0B3472" 
                    onPress={() => Linking.openURL(`mailto:${item.email}`)} 
                /> : 
                <MaterialCommunityIcons 
                    name="email" 
                    size={24}
                    color="#B3B3B3" 
                />
            }

        </View>
        
        
      </View>
    )
  }
  