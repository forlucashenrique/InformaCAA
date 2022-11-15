import { View, Text, Image } from 'react-native'
import { A } from '@expo/html-elements';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import HeaderImage from '../../../../assets/side-bar-logo.png'

export default function AboutCAA() {
  return (


    <View style={styles.container}>

      <View style={styles.informationContainer}> 
        <Image
          source={HeaderImage}
          resizeMode='contain'
          style={styles.imageStyle}
        />


        <View style={styles.containerContent}>
          <Text style={styles.textContent}>

            O objetivo do aplicativo é centralizar as principais informações do Campus do Agreste da Universidade Federal de Pernambuco.

          </Text>

        
        </View>

        <View style={styles.containerContent}>

          <Text style={styles.textContent}>

            O aplicativo não é uma ferramenta oficial da UFPE. É uma iniciativa totalmente voluntária desenvolvida para toda comunidade do Campus. Todas as informações são retiradas do site oficial da UFPE, exceto o horário do ônibus. <A style={styles.linkText} href="https://www.ufpe.br/caa">Acesse a página do CAA</A> para mais informações.
          </Text>

        </View>        
        <Text style={styles.textAuthor}>Projeto desenvolvido pelo aluno Lucas Henrique, discente do curso de Licenciatura em Matemática.</Text>

        <Text style={styles.textAuthor}>Encontrou algum bug/erro? Entre em contato via Instagram!</Text>
        <Entypo 
          style={styles.icon}
          name="instagram" 
          size={28} 
          color="#0A3472" 
          onPress={() => Linking.openURL('https://www.instagram.com/lucashenriqi/')}/>
      </View>
      
        

    </View>
  )
}