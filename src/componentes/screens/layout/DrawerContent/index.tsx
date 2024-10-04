import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { DrawerContentStyles } from "./styles";
import GraduationOutline from "@/componentes/icons/Outline/GraduationOutline";
import BooksOutline from "@/componentes/icons/Outline/BooksOutline";

import ContactsOutline from "@/componentes/icons/Outline/ContactsOutline";
import ConfigOutline from "@/componentes/icons/Outline/ConfigOutline";
import InfoOutline from "@/componentes/icons/Outline/InfoOutline";
import CloseOutline from "@/componentes/icons/Outline/CloseOutline";

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();
  //const routeNames = props.state.routes.map((route) => route.name);

  const firstNavigationOptions = [
    {
      title: 'SIGAA',
      icon: <GraduationOutline />,
      router: "/sigaa",
    },

    {
      title: 'Pergamum',
      icon: <BooksOutline />,
      router: "/pergamum",
    },
    {
        title: 'Contatos',
        icon: <ContactsOutline />,
        router: "/contacts",
    },
 
  ];

  const secondNavigationOptions = [
    // {
    //     title: 'Configurações',
    //     icon: <ConfigOutline />,
    //     router: "/settings",
    // },
    {
        title: 'Sobre',
        icon: <InfoOutline />,
        router: "/about",
    }
  ];

  return (
    <DrawerContentScrollView
      {...props}
      style={{padding: 20, backgroundColor: "white"}}
    >
      <View style={DrawerContentStyles.drawerHeader}>
        <View style={{
            width: '100%',
            alignItems: 'flex-end',
            marginBottom: 12,
        }}>
            <CloseOutline onPress={() => props.navigation.closeDrawer()}/>
        </View>
        <Text style={DrawerContentStyles.drawerHeaderTitle}>Menu</Text>
      </View>

      <View style={{ flex: 1, marginBottom: 75}}>
        {firstNavigationOptions.map((option, index) => (
            
          <DrawerItem
            key={index}
            labelStyle={DrawerContentStyles.drawerItemLabel}
            style={DrawerContentStyles.drawerItem}
            label={option.title}
            icon={() => option.icon}
            onPress={() => {
              router.push(`${option.router}` as any);
              props.navigation.closeDrawer();
            }}
          />
        ))}
      </View>

      <View style={{
        flex: 1,
        paddingTop: 20,
      }}>
        <View style={{
             marginHorizontal: 12,
             marginBottom: 20,
             borderBottomWidth: 2,
             borderColor: '#0B3472'
        }}/>
        {secondNavigationOptions.map((option, index) => (
          <DrawerItem
            key={index}
            labelStyle={DrawerContentStyles.drawerItemLabel}
            style={DrawerContentStyles.drawerItem}
            label={option.title}
            icon={() => option.icon}
            onPress={() => {
              router.push(`${option.router}` as any);
              props.navigation.closeDrawer();
            }}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
}
