
import { useEffect, useState } from 'react';
import { Modal, View, Text, FlatList, ActivityIndicator, Pressable } from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

import About from '../../../componentes/About'

import horariosOnibus from '../../../service/dados//horarioOnibus'

export default function Bus({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="information-circle"
          size={36}
          color="white"
          onPress={() => setModalVisible(!modalVisible)}
        />
      )
    })
  }, [navigation])


  const renderItem = ({ item }) => {
    return (
      <Row style={styles.cell}>
        <Text style={styles.cellText}>{item}</Text>
      </Row>
    )
  }

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType='slide'
      >
        <About
          aboutTitle='Linha UFPE - 130'
          aboutText='Os horários se referem ao padrão definido pela empresa de ônibus para os dias úteis, contudo podem haver atrasos devido a congestionamentos ou outros fatores. Para mais informações, ligue: (81) 2161-8763'
        >
          <Pressable
            style={styles.buttonBackModal}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.buttonTextModal}>Voltar</Text>
          </Pressable>
        </About>

      </Modal>

      <View style={styles.gridContainer}>
        <View style={styles.gridHeaderContainer}>
          <Text style={styles.gridTitle}>CENTRO</Text>
          <Text style={styles.gridTitle}>UFPE</Text>
        </View>
        <Grid style={styles.gridStyle}>
          <Col size={50}>

            <FlatList
              data={horariosOnibus.centro}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
            />
          </Col>
          <Col size={50}>
            <FlatList
              data={horariosOnibus.ufpe}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
            />
          </Col>
        </Grid>
      </View>
    </View>

  )
}