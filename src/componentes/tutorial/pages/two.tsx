import { Animated, Dimensions, StyleSheet, Text, View, useWindowDimensions} from "react-native"
import HouseSVG from "./assets/HouseSVG"
import { useRef } from "react";
import PlaneSVG from "./assets/PlaneSVG";
import PlateSVG from "./assets/PlateSVG";
import BurguerSVG from "./assets/BurguerSVG";

const {width, height} = Dimensions.get('window');


export default function TutorialTwoPage () {

    return (
        <View style={styles.container}>
            <View style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 80,
            }}>
                <PlateSVG />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>Confira o cardápio do Restaurante Universitário.  </Text>
                <Text style={styles.subtitle}>Avalie sua refeição diretamente pelo app. Sua opinião ajuda a melhorar o Restaurante Universitário!</Text>
            </View>
            <View style={styles.containerBottonImage}>
                <BurguerSVG style={styles.bottonImage} />
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