import HomeOutline from '@/componentes/icons/HomeOutline';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'blue',
            }}
        >
            <Tabs.Screen name='(home)' options={{
                headerShown: false,
                tabBarIcon: () => <HomeOutline />
  
            }}/>
            <Tabs.Screen name='menu' />
            <Tabs.Screen name='bus' />
            <Tabs.Screen name='map' />
        </Tabs>
    )
}