import {
  ScrollView,
  View,
  Text,
  useWindowDimensions,
  ActivityIndicator,
  ImageBackground
} from "react-native"

import { useEffect, useState } from "react";
import RenderHTML from 'react-native-render-html';
import HeaderImage from '../../../../../assets/caa.jpg'
import styles from './styles'
import api from "../../../../service";
import ViewError from "../../../../componentes/ViewError";


export default function New({ route, navigation }) {

  const { id, title } = route.params;
  const [htmlNews, setHtmlNews] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [textError, setTextError] = useState();
  const [isError, setIsError] = useState(false);

  const getNewsHtml = async () => {
    try {
      const response = await api.get(`/artigos/${id}`);
      const data = await response.data.html;
      setHtmlNews(data)
    } catch (err) {
      setTextError(`Não foi possível carregar`);
      setIsError(true);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getNewsHtml();
  }, [reload])

  const reloading = () => {
    setIsLoading(true);
    setIsError(false);
    setReload(!reload);
  }


  const { width } = useWindowDimensions();

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={HeaderImage}
          resizeMode='cover'
          style={styles.backgroundImage}>

          <Text style={styles.headerText}>{title}</Text>

        </ImageBackground>
      </View>
      <View style={styles.articleContainer}>
        {
          isError ? <ViewError TextError={textError} handleReload={reloading} /> : (
            <>
              {
                isLoading ? <ActivityIndicator size="large" color="#0A3472" /> : (
                  <RenderHTML
                    contentWidth={width}
                    source={{ html: htmlNews }}
                    tagsStyles={styles.tagStyles}
                  />
                )
              }
            </>
          )
        }


      </View>
    </ScrollView>


  )
}