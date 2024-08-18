import BusFill from '@/componentes/icons/BusFill';
import BusOutline from '@/componentes/icons/BusOutline';
import HomeFill from '@/componentes/icons/HomeFill';
import HomeOutline from '@/componentes/icons/HomeOutline';
import MapFill from '@/componentes/icons/MapFill';
import MapOutline from '@/componentes/icons/MapOutline';
import MenuFill from '@/componentes/icons/MenuFill';
import MenuOutline from '@/componentes/icons/MenuOutline';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'blue',
                tabBarStyle: {
                    backgroundColor: '#0B3472',
                },
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen 
                name='(home)' 
                options={{
                    tabBarIcon: ({ focused }) => focused ? <HomeFill />  : <HomeOutline />,
                }}
            />
            <Tabs.Screen 
                name='(menu)/index' 
                options={{
                    tabBarIcon: ({ focused }) => focused ? <MenuFill /> :<MenuOutline />
                }} 
            />
            <Tabs.Screen 
                
                name='bus' 
                options={{
                    tabBarIcon: ({ focused }) => focused ? <BusFill /> : <BusOutline />
                }}
            />

            <Tabs.Screen 
                name='map' 
                options={{
                    tabBarIcon: ({ focused }) => focused ? <MapFill /> : <MapOutline />
                }}
            />
        </Tabs>
    )
}