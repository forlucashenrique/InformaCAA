import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Articles from './src/pages/Home/Articles'
import ArticleContent from './src/pages/Home/Articles/ArticleContent'

import EventContent from './src/pages/Home/Events/EventContent'
import NewsContent from './src/pages/Home/News/NewsContent'
import Restaurant from './src/pages/Home/Restaurant'
import AboutCAA from './src/pages/DrawerMenu/AboutCAA';
import AboutAPP from './src/pages/DrawerMenu/AboutAPP';
import Pergamum from './src/pages/DrawerMenu/Pergamum';
import Events from './src/pages/Home/Events';
import Home from './src/pages/DrawerMenu/Home';
import News from './src/pages/Home/News'
import Siga from './src/pages/DrawerMenu/Sigaa'
import Bus from './src/pages/Home/Bus';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CustomSideBarMenu from './src/componentes/CustomSideBarMenu';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Contacts from './src/pages/Home/Contacts';



function getRouteName(route: any) {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeApp';

  switch (routeName) {
    case 'Restaurant':
      return false;
    case 'Bus':
      return false;
    case 'News':
      return false;
    case 'NewsContent':
      return false;
    case 'Events':
        return false;
    case 'EventContent':
      return false;
    case 'Articles':
      return false;
    case 'ArticleContent':
      return false;
    case 'Contacts':
      return false;
  }
}


function HomeScreenStack() {
  

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeApp"  
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0A3472',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
       }}>
        
      <Stack.Screen name='HomeApp' options={{headerShown: false}} component={Home} />
      <Stack.Screen name='Restaurant' options={{title: 'Restaurante' }} component={Restaurant} />
      <Stack.Screen name='Bus' options={{title: 'Horários' }} component={Bus} />
      <Stack.Screen name='News' options={{title: 'Notícias' }} component={News} />
      <Stack.Screen name='NewsContent' options={{title: 'Notícias' }} component={NewsContent} />
      <Stack.Screen name='Events' options={{title: 'Eventos' }} component={Events} />
      <Stack.Screen name='EventContent' options={{title: 'Evento' }} component={EventContent} />
      <Stack.Screen name='Articles' options={{title: 'Artigos' }} component={Articles} />
      <Stack.Screen name='ArticleContent' options={{title: 'Artigo' }} component={ArticleContent} />
      <Stack.Screen name='Contacts' options={{title: 'Contatos' }} component={Contacts} />

    </Stack.Navigator>
  )
}



export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        screenOptions={{
            headerStyle: {
              backgroundColor: '#0A3472',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            drawerStyle: {
              backgroundColor: '#fff',
              width: 240,
            },
            drawerItemStyle: {
              borderWidth: .2,
              borderColor: '#0A3472',
              borderRadius: 5,
            }
        }}
        drawerContent={(props) => <CustomSideBarMenu {...props}/>}
        
      >
        <Drawer.Screen 
          name="Início" 
          component={HomeScreenStack}
          options={({ route }) => ({
            headerShown: getRouteName(route),
            drawerLabelStyle: {
              color: '#0A3472',
            },
            drawerIcon: ({focused, size}) => <Entypo name="home" size={24} color="#0A3472" />,
          })} />
          <Drawer.Screen 
            name="SIGAA" 
            component={Siga}
            options={{
              drawerLabel: 'SIGAA UFPE',
              drawerIcon: ({focused, size}) => <FontAwesome name="graduation-cap" size={18} color="#0A3472" />,
              drawerLabelStyle: {
                color: '#0A3472',
              }
            }}
          />
          <Drawer.Screen 
            name="Pergamum" 
            component={Pergamum}
            options={{
              drawerIcon: ({focused, size}) => <MaterialCommunityIcons name="bookshelf" size={24} color="#0A3472" />,
              drawerLabel: 'Pergamum UFPE',

              drawerLabelStyle: {
                color: '#0A3472',

              }
            }}
          
          />
          <Drawer.Screen 
            name="O Campus" 
            component={AboutCAA}
            options={{
              drawerIcon: ({focused, size}) => <FontAwesome name="university" size={20} color="#0A3472" />,
              drawerLabelStyle: {
                color: '#0A3472',
    
              }
            }}
          />
          <Drawer.Screen 
            name="Sobre " 
            component={AboutAPP}
            options={{
              drawerIcon: ({focused, size}) => <Ionicons name="information-circle" size={24} color="#0A3472" />,
              drawerLabelStyle: {
                color: '#0A3472',
    
              }
            }}
          />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
