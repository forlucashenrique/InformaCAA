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
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

import { useEffect, useState } from 'react';
import { CustomDrawerContent } from '@/componentes/screens/layout/DrawerContent';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import CustomDrawerHeader from '@/componentes/screens/layout/DrawerHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TutorialScreens from '@/componentes/tutorial';
import HourBusProvider from '@/providers/HourBusProvider';

SplashScreen.preventAutoHideAsync()

const pathPattern = /^\/[0-9]{1,7}$/

export default function RootLayout () {
    
    const [showTutorial, setShowTutorial] = useState(false)

    const [fontsLoaded, error] = useFonts({
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
        Roboto_400Regular   
    })
    
    const pathname = usePathname()

    function showHeader(path: string) {
        switch (path) {
            case '/sigaa': 
                return false
            case '/pergamum':
                return false
            case '/about': 
                return false
            case '/contacts':
                return false
            case '/events':
                return false
            case pathPattern.test(path) ? path : '':
                return false
        }
    }

    const handleFinishTutorial = async () => {
        await AsyncStorage.setItem('@tutorial_seen', 'true');
        setShowTutorial(false);
    };

    useEffect(() => {
        if (fontsLoaded || error) {
            SplashScreen.hideAsync()
        }

    }, [fontsLoaded, error])


    useEffect(() => {
        const checkIfTutorialSeen = async () => {
          const tutorialSeen = Boolean(await AsyncStorage.getItem('@tutorial_seen'));
          if (!tutorialSeen) {
            setShowTutorial(true);
          }
        };
        checkIfTutorialSeen();
    }, []);

    if (showTutorial) {
        return <TutorialScreens onFinish={handleFinishTutorial} />;
    }

    if (!fontsLoaded && !error) {
        return null
    }

    return (

        <SafeAreaView style={{
            flex: 1,
        }}>
            <StatusBar style='light'/>
            <HourBusProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <Drawer
                        screenOptions={{
                            // headerStyle: {
                            //     backgroundColor: '#0B3472'
                            // },
                            // headerTitle: '',
                            // headerTintColor: 'white',
                                header: (props) => <CustomDrawerHeader {...props}/>
                            }}
                        
                        drawerContent={(props) => <CustomDrawerContent {...props} />}
                    >
                        <Drawer.Screen name='(tabs)' options={({route}) => ({
                            headerShown: showHeader(pathname)
                        }) }/>


                    </Drawer>
                </GestureHandlerRootView>
            </HourBusProvider>
        </SafeAreaView>
    )
}