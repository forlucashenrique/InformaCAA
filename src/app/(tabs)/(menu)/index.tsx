import NetworkError from "@/componentes/errors/NetworkError";
import Menu from "@/componentes/screens/menu";
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function MenuScreen () {
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
                    <Menu />
                ) : (
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        <NetworkError  />
                    </View>
                )
            }
        </>
    )
}