import * as Linking from 'expo-linking';
import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import styles from './styles'
import HeaderImage from '../../../../assets/caa_logo.png'

export default function AboutCAA() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Image
          source={HeaderImage}
          resizeMode='contain'
          style={styles.imageStyle}
        />

        <View style={styles.socialMediaContainer}>
            <Entypo name="instagram" size={32} color="#0A3472" onPress={() => Linking.openURL('https://www.instagram.com/campusdoagresteufpe/')} />
            <Entypo name="facebook" size={32} color="#0A3472" onPress={() => Linking.openURL('https://www.facebook.com/CampusDoAgresteUFPE')}/>
          </View>

        <View style={styles.containerContent}>
          <Text style={styles.textContent}>
            O Centro Acadêmico do Agreste (CAA) foi o primeiro campus da UFPE no interior de Pernambuco, tendo sido inaugurado em março de 2006, com o objetivo de contribuir com o desenvolvimento social, econômico e cultural do Estado. Inicialmente, o CAA funcionou em instalações do Polo Comercial de Caruaru. Na escolha do município para instalaçao de um campus avançado da UFPE, foi considerada sua relevância no contexto atual da região do Agreste, que possui como principais características: cadeias e arranjos produtivos predominantes nas áreas da confecção e da agroindústria, e principal centro de serviços e negócios e de distribuição de mercadorias.

            O CAA iniciou suas atividades com cinco graduações, nas áreas de Administração, Design, Ciências Econômicas, Engenharia Civil e Pedagogia. Posteriormente, foram criadas as licenciaturas em Química, Física, Matemática, a Licenciatura Intercultural, os cursos de Engenharia de Produção, Medicina, Comunicação Social e, mais recentemente, o Bacharelado Interdisciplinar em Ciência e Tecnologia. As graduações são distribuídas em seis Núcleos de Ensino (Ciências Exatas e da Natureza, Ciências da Vida, Design e Comunicação, Formação Docente, Gestão e Tecnologia).

            O Campus do Agreste da UFPE conta ainda com Laboratórios Integrados de Ciência e Tecnologia, onde são desenvolvidos projetos de pesquisa e extensão e a formação continuada.  A proposta do Campus é contribuir positivamente no atendimento às demandas da região, interiorizando o conhecimento científico, preparando a população para o desenvolvimento adequado das atividades produtivas por ela assumidas e incentivando iniciativas que venham garantir melhores condições de vida.

          </Text>

        </View>
        <Pressable
          style={styles.buttonPhotos}
          onPress={() => Linking.openURL('https://www.flickr.com/photos/campusagreste/albums')}
        >
          <Text style={styles.textPhotos}>Galeria de Fotos</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}