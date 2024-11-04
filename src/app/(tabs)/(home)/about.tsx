import Logo from "@/assets/screens/about/Logo";
import { StyleSheet, Text, View } from "react-native";
import * as Linking from 'expo-linking';
import InformaIcon from "@/assets/screens/about/InformaIcon";
import { Image } from "expo-image";
import GithubIcon from "@/componentes/icons/socials/github";
import GmailIcon from "@/componentes/icons/socials/mail";
import LinkedinIcon from "@/componentes/icons/socials/linkedin";
import BehanceIcon from "@/componentes/icons/socials/behance"
import { ScrollView } from "react-native-gesture-handler";

const images = {
    lucas: require('@/assets/screens/about/lucas.svg'),
    ravy: require('@/assets/screens/about/ravy.svg'),
    thiago: require('@/assets/screens/about/thiago.svg'),
}



export default function AboutScreen () {

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: '#fff',
                paddingBottom: 20,
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
            <Logo />

            <Text style={styles.textMedium}>
                {'\t'}{'\t'}{'\t'}O aplicativo InformaCAA foi inicialmente idealizado por Lucas Henrique, discente de Licenciatura em Matemática, e desenvolvido em conjunto com Ravy França e Thiago Cavalcanti, discentes de Design. 
            </Text>

            <View style={styles.studentInfoContainer}>
                <View style={styles.studentInfoItem}>
                    <Image 
                        source={images.lucas}
                        
                        style={{
                            width: 90,
                            height: 90,
                        }}
                    />

                    <View style={styles.studentInfo}>
                        <View style={styles.studentName}>
                            <Text style={styles.studentNameText}>Lucas Henrique</Text>
                            <Text style={styles.studentCourseText} >Desenvolvedor</Text>
                        </View>

                        <View style={styles.socialStudentInfo}>
                            <GithubIcon 
                                onPress={() => Linking.openURL('https://www.github.com/forlucashenrique')}
                            />

                            <GmailIcon 
                                onPress={() => Linking.openURL('mailto:forlucashenrique@gmail.com')}
                            />
                            <LinkedinIcon 
                                onPress={() => Linking.openURL('https://www.linkedin.com/in/lucas-henrique-802576184')}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.studentInfoContainer}>
                <View style={[styles.studentInfoItem, {
                    flexDirection: 'row-reverse',
                }]}>
                    <Image 
                        source={images.ravy}
                        style={{
                            width: 90,
                            height: 90,
                        }}
                    />

                    <View style={[styles.studentInfo, {
                        alignItems: 'flex-end',
                    }]}>
                        <View style={[styles.studentName, {
                            alignItems: 'flex-end',
                        }]}>
                            <Text style={styles.studentNameText}>Ravy França</Text>
                            <Text style={styles.studentCourseText}>Designer</Text>
                        </View>

                        <View style={styles.socialStudentInfo}>
                            <BehanceIcon 
                                onPress={() => Linking.openURL('https://www.behance.net/ravyfranca')}
                            />

                            <GmailIcon 
                                onPress={() => Linking.openURL('mailto:ravyfranca.design@gmail.com')}
                            />
                            <LinkedinIcon 
                                onPress={() => Linking.openURL('https://www.linkedin.com/in/ravy-fran%C3%A7a-4520a723b/')}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.studentInfoContainer}>
                <View style={styles.studentInfoItem}>
                    <Image 
                        source={images.thiago}
                        style={{
                            width: 90,
                            height: 90,
                        }}
                    />

                    <View style={styles.studentInfo}>
                        <View style={styles.studentName}>
                            <Text style={styles.studentNameText}>Thiago Cavalcanti</Text>
                            <Text style={styles.studentCourseText}>Designer</Text>
                        </View>

                        <View style={styles.socialStudentInfo}>
                            <BehanceIcon 
                                onPress={() => Linking.openURL('https://www.behance.net/thicavalcanti')}
                            />

                            <GmailIcon 
                                onPress={() => Linking.openURL('mailto:thiagosantoscavalcanti8@gmail.com')}
                            />
                            <LinkedinIcon 
                                onPress={() => Linking.openURL('https://www.linkedin.com/in/thicavalcanti/')}
                            />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                width: '100%',
                marginTop: 20,
                gap: 20,
            }}>
                <Text style={styles.textMedium}>
                    {'\t'}{'\t'}{'\t'}O objetivo do aplicativo é centralizar as principais informações do Campus do Agres-te da Universidade Federal de Pernambuco para facilitar o acesso à informações pelos estudantes do Centro Acadêmico.
                </Text>
            </View>
            <View
                style={{
                    marginTop: 15,
                    gap: 4,
                }}
            >
                <Text style={styles.textMedium}>
                    Encontrou algum bug/erro ou tem alguma sugestão? 
                </Text>
                <Text 
                    style={styles.textLinking}
                    onPress={() => Linking.openURL('mailto:contatoinformacaa@gmail.com')}
                >
                    Entre em contato via email!
                </Text>
                <Text
                    style={styles.textMedium}
                >
                    Gosta de programação e quer contribuir com o projeto de alguma forma?
                </Text>
                <Text
                    style={styles.textLinking}
                    onPress={() => Linking.openURL('https://github.com/forlucashenrique/InformaCAA')}
                >
                    Acesse o repositório do projeto no GitHub e faça sua contribuição!
                </Text>
                <Text style={styles.textRegular}>*Todas as informações são retiradas do site oficial da Universidade Federal de Pernambuco.</Text>
            </View>

            <View style={{
                width: '100%',
                alignItems: 'center',
                gap: 20,
                marginTop: 35,
                marginBottom: 40,
            }}>

                <InformaIcon />
            </View>
            
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    textMedium: {
        color: '#000',
        fontSize: 14,
        textAlign: 'justify',
        marginTop: 20,
        fontFamily: 'Montserrat_500Medium',
    },

    textRegular: {
        color: '#000',
        fontSize: 12,
        marginTop: 20,
        fontFamily: 'Montserrat_400Regular',
    },

    textLinking: {
        color: "#0B3472",
        fontSize: 14,
        textDecorationLine: 'underline',
        fontFamily: 'Montserrat_400Regular',
    },
    
    studentInfoContainer: {
        width: '100%',
        gap: 20,
        marginTop: 25,
    },

    studentInfoItem: {
        width: '100%',
        flexDirection: 'row',
        gap: 20,
    },

    studentInfo: {
        flex: 1,
    },

    studentName: {},


    socialStudentInfo: {
        flexDirection: 'row',
        gap: 60,
        flex: 1,
        alignItems: 'center',
        
    },

    studentNameText: {
        fontSize: 16,
        fontFamily: 'Montserrat_700Bold',
        color: '#0B3472',
    },

    studentCourseText: { 
        fontSize: 14,
        fontFamily: 'Montserrat_400Regular_Italic',
        color: '#0B3472',
    }
})