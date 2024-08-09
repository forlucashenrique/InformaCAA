import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from "expo-router/drawer"
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { usePathname } from 'expo-router';

export default function RootLayout () {
    const pathname = usePathname()

    function showHeader(path: string) {
        switch (path) {
            case '/details': 
                return false
        }
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#0B3472'
                    },
                    headerTitle: '',
                    headerTintColor: 'white'
                }}
            >
                <Drawer.Screen name='(tabs)' options={({route}) => ({
                    headerShown: showHeader(pathname)
                }) }/>
            </Drawer>
        </GestureHandlerRootView>
    )
}