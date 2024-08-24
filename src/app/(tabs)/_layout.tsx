import BusFill from '@/componentes/icons/Filled/BusFill';
import BusOutline from '@/componentes/icons/Outline/BusOutline';
import HomeFill from '@/componentes/icons/Filled/HomeFill';
import HomeOutline from '@/componentes/icons/Outline/HomeOutline';
import MapFill from '@/componentes/icons/Filled/MapFill';
import MapOutline from '@/componentes/icons/Outline/MapOutline';
import MenuFill from '@/componentes/icons/Filled/MenuFill';
import MenuOutline from '@/componentes/icons/Outline/MenuOutline';
import { Tabs } from 'expo-router';

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
                name='(bus)/bus' 
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