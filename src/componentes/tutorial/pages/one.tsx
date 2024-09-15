import { Animated, Dimensions, StyleSheet, Text, View, useWindowDimensions} from "react-native"
import HouseSVG from "./assets/HouseSVG"
import { useRef } from "react";
import PlaneSVG from "./assets/PlaneSVG";

const {width, height} = Dimensions.get('window');


export default function TutorialOnePage () {

    return (
        <View style={styles.container}>
            <View style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
            }}>
                <PlaneSVG />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>Acompanhe as notícias e eventos do campus em um só lugar. </Text>
                <Text style={styles.subtitle}>Veja o que está rolando e planeje sua participação nos próximos eventos usando o calendário. </Text>
            </View>
            <View style={styles.containerBottonImage}>
                <HouseSVG style={styles.bottonImage} />
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
    
        top: (height / 2) - 80,
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