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
  const [htmlEvents, setHtmlEvents] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [textError, setTextError] = useState();
  const [isError, setIsError] = useState(false);

  const getEventsHtml = async () => {
    try {
      const response = await api.get(`/eventos/${id}`);
      const data = response.data.html;
      setHtmlEvents(data)
    } catch (err) {
      setTextError(`Não foi possível carregar`);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getEventsHtml();
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
      <View style={styles.eventContainer}>
        {
          isError ? <ViewError TextError={textError} handleReload={reloading} /> : (
            <>
              {
                isLoading ? <ActivityIndicator size="large" color="#0A3472" /> : (
                  <RenderHTML
                    contentWidth={width}
                    source={{ html: htmlEvents }}
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