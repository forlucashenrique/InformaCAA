import { Animated, Dimensions, StyleSheet, Text, View, useWindowDimensions} from "react-native"
import HouseSVG from "./assets/HouseSVG"
import { useRef } from "react";
import PlaneSVG from "./assets/PlaneSVG";
import PlateSVG from "./assets/PlateSVG";
import BurguerSVG from "./assets/BurguerSVG";
import BusStopSVG from "./assets/BusStopSVG";
import BusSVG from "./assets/BusSVG";
import MapWideSVG from "./assets/MapWideSVG";
import MapLineSVG from "./assets/MapLineSVG";
import PhoneTouchSVG from "./assets/PhoneTouchSVG";
import NetworkingSVG from "./assets/NetworkingSVG";

const {width, height} = Dimensions.get('window');


export default function TutorialFivePage () {

    return (
        <View style={styles.container}>
            <View style={{
                width: '100%',
                height: '60%',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
            }}>
                <PhoneTouchSVG />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>Acesse o SigaA e o Pergamum sem complicações. </Text>
                <Text style={styles.subtitle}>Tenha as principais ferramentas da UFPE direto no aplicativo.</Text>
            </View>
            <View style={styles.containerBottonImage}>
                <NetworkingSVG style={styles.bottonImage} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'relative',
    
    },

    containerText: {
        width: '100%',
        zIndex: 10,
        marginTop: 10,
        position: 'absolute',
    
        top: (height / 2),
    },

    title: {
        fontSize: 20,
        fontFamily: 'Montserrat_700Bold'
    },

    subtitle: {
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
    },

    description: {
        fontSize: 16,
    },

    containerBottonImage: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: -40,
    },

    bottonImage: {}
})