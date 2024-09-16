import Logo from "@/assets/logo";
import { Pressable, Text, View } from "react-native";
import { DrawerHeaderStyles } from "./styles";
import DrawerOutline from "@/componentes/icons/Outline/DrawerOutline";
import { useRouter } from "expo-router";
import { DrawerHeaderProps } from "@react-navigation/drawer";

export default function CustomDrawerHeader (props: DrawerHeaderProps) {
   

    return (
        <View style={DrawerHeaderStyles.container}>
            <Pressable
                style={{
                    marginTop: 20,
                    width: 80,
                    alignItems: 'center',
                }}
                onPress={() => props.navigation.openDrawer()}
            >
                <DrawerOutline />
            </Pressable>
            
            <Logo style={{
                marginTop: 12,
                flex: 1,
            }}/>
            <View  style={{
                width: 80,
            }}/>
        </View>
    )
}