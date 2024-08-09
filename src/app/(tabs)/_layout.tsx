import BusOutline from '@/componentes/icons/BusOutline';
import HomeOutline from '@/componentes/icons/HomeOutline';
import MapOutline from '@/componentes/icons/MapOutline';
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
                    tabBarIcon: () => <HomeOutline />
                }}
            />
            <Tabs.Screen 
                name='menu' 
                options={{
                    tabBarIcon: () => <MenuOutline />
                }}
            />
            <Tabs.Screen 
                name='bus' 
                options={{
                    tabBarIcon: () => <BusOutline />
                }}
            />

            <Tabs.Screen 
                name='map' 
                options={{
                    tabBarIcon: () => <MapOutline />
                }}
            />
        </Tabs>
    )
}