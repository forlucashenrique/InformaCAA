import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import WebView from "react-native-webview"
import { Feather } from '@expo/vector-icons';
import styles from './styles'

import { useNetInfo } from '@react-native-community/netinfo';

const ActivityIndicatorElement = () => {
  return (
    <View style={styles.viewLoading}>
      <ActivityIndicator size="large" color="#0A3472" />
    </View>
  )
}

export default function MyWebView(props) {

  const netInfo = useNetInfo();
  const [isConnected, setIsConnectd] = useState(true);
  
  useEffect(() => {
    if (netInfo.isConnected) {
      setIsConnectd(true);
    } else {
      setIsConnectd(false);
    }
  }, [netInfo])

  return (
    <>
      {isConnected ? (
        <>

          <WebView
            source={{ uri: props.uri }}

            startInLoadingState={true}
            renderLoading={ActivityIndicatorElement}
          />

        </>
      )
        : (
          <View style={styles.NetworkErrorContainer}>
            <Text style={styles.textNetworkError}>Não foi possível carregar</Text>
            <Feather name="wifi-off" size={32} color="#0A3472" />
          </View>
        )}

    </>

  )
}
