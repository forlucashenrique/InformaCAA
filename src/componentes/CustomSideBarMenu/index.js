import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
 
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import SideBarImage from '../../../assets/side-bar-logo.png'
import styles from './styles'

export default function CustomSideBarMenu(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
       <View style={styles.headerSideBar}>
        <Image 
          source={SideBarImage}
          resizeMode="center"
          style={{width: '100%', height: '100%'}}
        />

       </View>
      
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
       
      </DrawerContentScrollView>
    </SafeAreaView>
  )
}