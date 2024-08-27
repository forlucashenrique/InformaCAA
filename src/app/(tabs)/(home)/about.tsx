import Logo from "@/assets/screens/about/Logo";
import { StyleSheet, Text, View } from "react-native";
import * as Linking from 'expo-linking';
import InformaIcon from "@/assets/screens/about/InformaIcon";

export default function AboutScreen () {

    

    return (
        <View style={styles.container}>
            <Logo />

            <Text style={styles.text}>
                O aplicativo InformaCAA foi desenvolvido voluntariamente pelo aluno Lucas Henrique, discente de Licenciatura em Matemática. 
                O objetivo do aplicativo é centralizar as principais informações do Campus do Agreste da Universidade Federal de Pernambuco para facilitar o acesso à informações pelos estudantes do CAA.
            </Text>
            <View
                style={{
                    marginTop: 15,
                    gap: 4,
                }}
            >
                <Text style={styles.text}>
                    Encontrou algum bug/erro ou tem alguma sugestão? 
                </Text>
                <Text 
                    style={styles.textLinking}
                    onPress={() => Linking.openURL('https://www.instagram.com/lucashenriqi/')}
                >
                    Entre em contato via Instagram!
                </Text>
                <Text
                    style={styles.text}
                >
                    Gosta de programação e quer contribuir com o projeto?
                </Text>
                <Text
                    style={styles.textLinking}
                    onPress={() => Linking.openURL('https://github.com/forlucashenrique/InformaCAA')}
                >
                    Acesse o repositório do projeto no GitHub e faça sua contribuição!
                </Text>
            </View>

            <View style={{
                width: '100%',
                alignItems: 'center',
                gap: 20,
            }}>
                <Text style={styles.text}>Todas as informações são retiradas do site oficial da Universidade Federal de Pernambuco</Text>

                <InformaIcon 

                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    text: {
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'Montserrat_500Medium',
    },

    textLinking: {
        color: "#0B3472",
            fontSize: 14,
            textAlign: 'center',
            fontFamily: 'Montserrat_400Regular',
    }
})