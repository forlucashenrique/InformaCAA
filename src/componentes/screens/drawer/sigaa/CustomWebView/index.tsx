import {WebViewProps, WebView} from "react-native-webview"
import { CustomWebViewStyles } from "./style"
import { Pressable, View } from "react-native"
import { ActivityIndicator } from "react-native"
import { useNetInfo } from '@react-native-community/netinfo';
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
//import * as WebBrowser from 'expo-web-browser';

import * as Linking from 'expo-linking';
import NetworkError from "@/componentes/errors/NetworkError";



type CustomWebViewProps = {
    url?: string
} & WebViewProps


function LoadingView() {
    return (
        <View 
            style={CustomWebViewStyles.loading}>
            <ActivityIndicator size="large" color="#0B3472" />
        </View>
    )
}

function OpenUrlError({url}: {url: string | undefined}) {
    return (
        <View style={CustomWebViewStyles.openUrlError}>
            <View style={CustomWebViewStyles.openUrlErrorMessageContainer}>
                <Entypo name="emoji-sad" size={48} color="black" />
                <Text style={CustomWebViewStyles.openUrlErrorText}>
                    Erro ao abrir a URL do site, tente pelo seu navegador padrão.
                </Text>
                <Pressable 
                    style={CustomWebViewStyles.openBrowserButton}
                    onPress={() => {
                        if (url) {
                            Linking.openURL(url)
                        } else {
                            Linking.openURL('https://www.google.com')
                        }
                    }}>
                    <Text 
                        style={CustomWebViewStyles.openBrowserButtonText}
                    >
                        Abrir no Browser
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}


export default function CustomWebView({ url, ...props}: CustomWebViewProps) {

    const netInfo = useNetInfo()
    const [appConnected, setAppConnected] = useState(true)

    useEffect(() => {
        if (netInfo.isConnected) {
            setAppConnected(true)
        } else {
            setAppConnected(false)
        }
    }, [netInfo])


    return (
        <>
            {
                appConnected ? (
                    <WebView 
                        {...props}
                        startInLoadingState={true}
                        renderLoading={() => <LoadingView />}
                        renderError={() => <OpenUrlError url={url}/>}
                    />
                ) : (
                    <NetworkError />
                )
            }
        </>

       
        
    )
}