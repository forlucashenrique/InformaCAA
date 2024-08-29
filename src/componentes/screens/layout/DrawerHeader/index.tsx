import Logo from "@/assets/logo";
import { Text, View } from "react-native";
import { DrawerHeaderStyles } from "./styles";
import DrawerOutline from "@/componentes/icons/Outline/DrawerOutline";
import { useRouter } from "expo-router";
import { DrawerHeaderProps } from "@react-navigation/drawer";

export default function CustomDrawerHeader (props: DrawerHeaderProps) {
   

    return (
        <View style={DrawerHeaderStyles.container}>
            <DrawerOutline 
                style={{
                    marginTop: 20,
                }}
                onPress={() => props.navigation.openDrawer()}
            />
            <Logo style={{
                marginTop: 15,
            }}/>
            <View />
        </View>
    )
}