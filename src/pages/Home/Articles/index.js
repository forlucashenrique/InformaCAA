import { View, Text, Pressable, FlatList, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react';
import styles from './styles'

import moment from 'moment'
import api from '../../../service';
import ViewError from '../../../componentes/ViewError';

export default function News({ navigation }) {

  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [textError, setTextError] = useState();
  const [isError, setIsError] = useState(false);

  const getArticles = async () => {
    try {
      const response = await api.get('/artigos');
      const data = response.data.result

      setArticles(data);
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
        style={styles.articleContainer}
        onPress={() => navigation.navigate('ArticleContent', {
          id: item.idArticle,
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
    getArticles();
  }, [reload])

  const reloading = () => {
    setIsLoading(true);
    setIsError(false);
    setReload(!reload);
  }

  return (
    <View style={styles.containerArticles}>
      {
        isError ? <ViewError TextError={textError} handleReload={reloading} /> : (
          <>
            {isLoading ? <ActivityIndicator size="large" color="#0A3472" /> : (
              <FlatList
                data={articles}
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