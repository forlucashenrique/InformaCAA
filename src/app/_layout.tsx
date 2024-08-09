import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from "expo-router/drawer"
import { usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Montserrat_700Bold, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_300Light, useFonts } from '@expo-google-fonts/montserrat';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync()


export default function RootLayout () {

    const [fontsLoaded, error] = useFonts({
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    })

    const pathname = usePathname()

    function showHeader(path: string) {
        switch (path) {
            case '/details': 
                return false
        }
    }

    useEffect(() => {
        if (fontsLoaded || error) {
            SplashScreen.hideAsync()
          
        }

    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) {
        return null
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