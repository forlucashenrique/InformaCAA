import { View, Text, Pressable, FlatList, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles'
import api from '../../../service';
import ViewError from '../../../componentes/ViewError';

export default function Events({ navigation }) {

  const [events, setEvents] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [textError, setTextError] = useState();
  const [isError, setIsError] = useState(false);

  const getEvents = async () => {
    try {
      const response = await api.get('/eventos');
      const data = response.data.result;
      setEvents(data);
    } catch (err) {
      setTextError(`Não foi possível carregar`);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }

  }

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.eventContainer}
        onPress={() => navigation.navigate('EventContent', {
          id: item.idEvent,
          title: item.title,
        })}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.localeText}><MaterialCommunityIcons name="google-maps" size={16} color="#aaa" />{item.locale}</Text>
        <Text style={styles.textAboutMore}>Saiba mais.</Text>
      </Pressable>
    )
  }
  useEffect(() => {
    getEvents();
  }, [reload])

  const reloading = () => {
    setIsLoading(true);
    setIsError(false);
    setReload(!reload);
  }

  return (
    <View style={styles.containerEvents}>
      {isError ? <ViewError TextError={textError} handleReload={reloading} /> : (
        <>
          {isLoading ? <ActivityIndicator size="large" color="#0A3472" /> : (
            <FlatList
              data={events}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}

            />
          )}
        </>
      )}


    </View>
  )
}