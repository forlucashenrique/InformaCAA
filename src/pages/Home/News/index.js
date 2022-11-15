import { View, Text, Pressable, FlatList, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react';
import styles from './styles'

import ViewError from '../../../componentes/ViewError';
import moment from 'moment'
import api from '../../../service';


export default function News({ navigation }) {

  const [news, setNews] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [textError, setTextError] = useState();
  const [isError, setIsError] = useState(false);
  const [reload, setReload] = useState(false);

  const getNews = async () => {
    try {
      const response = await api.get('/noticias');
      const data = response.data.result;

      setNews(data);
    } catch (err) {
      setTextError(`Não foi possível carregar`);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }

  }

  const formatDate = (date) => {
    const dateFormated = moment(new Date(date)).format('DD/MM/YYYY')

    return dateFormated
  }


  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.newContainer}
        onPress={() => navigation.navigate('NewsContent', {
          id: item.idNews,
          title: item.title
        })}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.textDate}>{formatDate(item.published)}</Text>
        <Text style={styles.textAboutMore}>Saiba mais.</Text>
      </Pressable>
    )
  }
  useEffect(() => {
    getNews();
  }, [reload])


  const reloading = () => {
    setIsLoading(true);
    setIsError(false);
    setReload(!reload);
  }
  return (
    <View style={styles.containerNews}>
      {
        isError ? <ViewError TextError={textError} handleReload={reloading}/> : (
          <>
            {isLoading ? <ActivityIndicator size="large" color="#0A3472" /> : (
                <FlatList
              data={news}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
            )}
          </>
         
        )
    }


    </View>
  )
}