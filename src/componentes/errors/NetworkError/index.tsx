import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { NetworkErrorStyles } from "./styles";

export default function NetworkError() {
    return (
        <View style={NetworkErrorStyles.netWorkErrorContainer}>
            <View style={NetworkErrorStyles.networkMessageContainer}>
                <Feather name="wifi-off" size={32} color="#0A3472" />
                <Text style={NetworkErrorStyles.netWorkErrorText}>
                    Sem conexão com a internet
                </Text>
            </View>
        </View>
    )
}