import {WebViewProps, WebView} from "react-native-webview"
import { CustomWebViewStyles } from "./style"
import { Pressable, View } from "react-native"
import { ActivityIndicator } from "react-native"
import { useNetInfo } from '@react-native-community/netinfo';
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import * as WebBrowser from 'expo-web-browser';



function LoadingView() {
    return (
        <View 
            style={CustomWebViewStyles.loading}>
            <ActivityIndicator size="large" color="#0B3472" />
        </View>
    )
}

function OpenUrlError() {
    return (
        <View style={CustomWebViewStyles.openUrlError}>
            <View style={CustomWebViewStyles.openUrlErrorMessageContainer}>
                <Entypo name="emoji-sad" size={48} color="black" />
                <Text style={CustomWebViewStyles.openUrlErrorText}>
                    Erro ao abrir a URL do site, tente pelo seu navegador padrão.
                </Text>
            </View>
        </View>
    )
}


function OpenBrowserButton () {
    return (
        <Pressable>
            <Text>Abrir no Browser</Text>
        </Pressable>
    )
}


export default function CustomWebView({...props}: WebViewProps) {
    const netInfo = useNetInfo()

    const [resultBrowser, setResultBrowser] = useState<WebBrowser.WebBrowserResult | null>(null)
    const [appConnected, setAppConnected] = useState(true)

    const _handleOpenWithWebBrowser = async () => {
        let result = await WebBrowser.openBrowserAsync('https://www.google.com');
        setResultBrowser(result)
    }


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
                        renderError={() => <OpenUrlError />}
                    />
                ) : (
                    <View style={CustomWebViewStyles.netWorkErrorContainer}>
                        <View style={CustomWebViewStyles.networkMessageContainer}>
                            <Feather name="wifi-off" size={32} color="#0A3472" />
                            <Text style={CustomWebViewStyles.netWorkErrorText}>
                                Sem conexão com a internet
                            </Text>
                            <OpenBrowserButton />
                        </View>
                    </View>
                )
            }
        </>

       
        
    )
}