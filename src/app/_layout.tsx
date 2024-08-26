import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from "expo-router/drawer"
import { usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {
    Montserrat_800ExtraBold, 
    Montserrat_700Bold, 
    Montserrat_400Regular, 
    Montserrat_500Medium, 
    Montserrat_600SemiBold, 
    Montserrat_300Light, 
    useFonts} from '@expo-google-fonts/montserrat';
import { useEffect } from 'react';
import { CustomDrawerContent } from '@/componentes/screens/layout/DrawerContent';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync()

const pathPattern = /^\/[0-9]{1,7}$/


export default function RootLayout () {

    const [fontsLoaded, error] = useFonts({
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
    })

    const pathname = usePathname()

    function showHeader(path: string) {
        switch (path) {
            case '/sigaa': 
                return false
            case '/pergamum':
                return false
            case pathPattern.test(path) ? path : '':
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

        <SafeAreaView style={{
            flex: 1,
        }}>
            <StatusBar style='light'/>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#0B3472'
                        },
                        headerTitle: '',
                        headerTintColor: 'white',
                        }}

                    drawerContent={(props) => <CustomDrawerContent {...props} />}
                >
                    <Drawer.Screen name='(tabs)' options={({route}) => ({
                        headerShown: showHeader(pathname)
                    }) }/>


                </Drawer>
            </GestureHandlerRootView>
        </SafeAreaView>
    )
}