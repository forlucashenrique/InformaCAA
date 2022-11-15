
import { useEffect, useState } from 'react';
import * as Linking from 'expo-linking';
import { Text, View, FlatList, ActivityIndicator, Modal, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { A } from '@expo/html-elements';
import moment from 'moment'
import styles from './styles'

import DayButton from './DayButton';
import About from '../../../componentes/About'
import ViewError from '../../../componentes/ViewError';

import api from '../../../service'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Restaurant({ navigation }) {
  const [menu, setMenu] = useState(null);


  const [isLoading, setIsLoading] = useState(true);
  const [dayMenu, setDayMenu] = useState('segunda');
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(1);
  const [textError, setTextError] = useState();
  const [isError, setIsError] = useState(false);
  const [reload, setReload] = useState(false);

  const [weekDays, setWeekDays] = useState(() => {
    const mondayDate = moment().day('monday').format('DD/MM');
    const tuesdayDate = moment().day('tuesday').format('DD/MM');
    const wednesdayDate = moment().day('wednesday').format('DD/MM');
    const thursdayDate = moment().day('thursday').format('DD/MM');
    const fridayDate = moment().day('friday').format('DD/MM');

    const week = {
      mon: { text: 'segunda', date: mondayDate },
      tue: { text: 'terça', date: tuesdayDate },
      wed: { text: 'quarta', date: wednesdayDate },
      thur: { text: 'quinta', date: thursdayDate },
      fri: { text: 'sexta', date: fridayDate },
    }
    return week
  });


  const getMenu = async () => {
    try {
      const response = await api.get('/cardapio');
      const data = response.data.result;
      setMenu(data);

    } catch (err) {
      setTextError(`Não foi possível carregar`);
      setIsError(true);
    } finally {
      setIsLoading(false);

    }

  }

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

  useEffect(() => {
    getMenu();
  }, [reload]);

  const reloading = () => {
    setIsLoading(true);
    setIsError(false);
    setReload(!reload);
  }

  const changeDayMenu = (day) => {

    const selectedOptions = {
      'segunda': 1,
      'terça': 2,
      'quarta': 3,
      'quinta': 4,
      'sexta': 5
    }

    setDayMenu(day)
    setSelected(selectedOptions[day])

  }

  const renderItem = ({ item }) => {
    return (
      <Text style={styles.textItems}>{item}</Text>
    )
  }
  return (

    <View>
      <Modal
        visible={modalVisible}
        animationType='slide'
      >
        <About
          aboutTitle='Restaurante Universitário do Centro acadêmico do Agreste (RU/CAA)'
          aboutText='O Restaurante Universitário (RU) foi inaugurado em março de 2017, possui uma área física de 833,52 m² com capacidade de atendimento de 269 comensais sentados. De segunda a sexta-feira, são oferecidos almoço e jantar com entrada subsidiada pela UFPE para alunos cujo perfil é indicado pela Coordenação de Assistência Estudantil e mediante pagamento para restante do público. O horário de funcionamento para o almoço é das 11h15 às 14h15 e para o jantar das 17h45 às 20h45.'
        >
        <Text style={styles.textMoreInfo}>Para mais informações, <A style={styles.linkText} href='https://www.ufpe.br/rucaa'>acesse o site do RU.</A></Text>
        
          <Pressable
            style={styles.buttonBackModal}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.buttonTextModal}>Voltar</Text>
          </Pressable>
        </About>

      </Modal>
      <View style={styles.viewDays}>
        <DayButton
          day={weekDays.mon.text}
          dateDay={weekDays.mon.date}
          handleOnPress={changeDayMenu}
          selectedStyle={selected === 1 ? { borderWidth: 4, borderBottomColor: '#0A3472' } : {}}
        />
        <DayButton
          day={weekDays.tue.text}
          dateDay={weekDays.tue.date}
          handleOnPress={changeDayMenu}
          selectedStyle={selected === 2 ? { borderWidth: 4, borderBottomColor: '#0A3472' } : {}}
        />
        <DayButton
          day={weekDays.wed.text}
          dateDay={weekDays.wed.date}
          handleOnPress={changeDayMenu}
          selectedStyle={selected === 3 ? { borderWidth: 4, borderBottomColor: '#0A3472' } : {}}
        />
        <DayButton
          day={weekDays.thur.text}
          dateDay={weekDays.thur.date}
          handleOnPress={changeDayMenu}
          selectedStyle={selected === 4 ? { borderWidth: 4, borderBottomColor: '#0A3472' } : {}}
        />
        <DayButton
          day={weekDays.fri.text}
          dateDay={weekDays.fri.date}
          handleOnPress={changeDayMenu}
          selectedStyle={selected === 5 ? { borderWidth: 4, borderBottomColor: '#0A3472' } : {}}
        />
      </View>
      {
        isError ? <ViewError TextError={textError} handleReload={reloading}/> : (
          <View style={styles.menuContainer}>
            <View style={styles.menuItems}>
              <View style={styles.viewTitle}>
                <Text style={styles.titleMeal}>Almoço</Text>
                <Text style={styles.titleHour}>11h15 às 14h15</Text>
              </View>
              {isLoading ? <ActivityIndicator size="large" color="#0A3472" /> : (
                <FlatList
                  data={menu[dayMenu].almoco}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index}
                />
              )}
            </View>
            <View>
              <View style={styles.viewTitle}>
                <Text style={styles.titleMeal}>Jantar</Text>
                <Text style={styles.titleHour}>17h45 às 20h45</Text>
              </View>
              {isLoading ? <ActivityIndicator size="large" color="#0A3472" /> : (
                <FlatList
                  data={menu[dayMenu].janta}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index}
                />

              )}
            </View>
          </View>
        )
      }


    </View>

  )
}