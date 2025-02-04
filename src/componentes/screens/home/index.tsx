import { Text, ScrollView, View, ActivityIndicator, ImageBackground, Pressable, TouchableOpacity } from "react-native";
import { HomeStyles } from "./styles";
import NewsCard from "./NewsCard";
import api from "@/service";
import { useCallback, useEffect, useState } from "react";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import EventsButton from "./EventsButton/Index";
import { Shadow } from "react-native-shadow-2";
import NewsImagePlaceholder from "./NewsImagePlaceholder";
import { useNetInfo } from "@react-native-community/netinfo";
import NetworkError from "@/componentes/errors/NetworkError";


type News = {
  id: number;
  title: string;
  published: string;
  idNews: string;
  imgPath?: string;
}


export default function Home () {
    const [news, setNews] = useState<News[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [newsImage, setNewsImage] = useState<string>('');
    const [loadImageError, setLoadImageError] = useState(false);
    const netInfo = useNetInfo()
    const [appConnected, setAppConnected] = useState(true)


    function reloadNews() {
      //setReload(!reload);
      setIsError(false);
      setIsLoading(true)

      getNews();
    }

    const ErrorMessage = useCallback(function() {
      return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 12,
        }}>
          <Text
            style={{
              fontFamily: 'Montserrat_500Medium',
              fontSize: 16,
              textAlign: 'center',
              marginTop: 20,
              color: '#0B3472',
            }}
          >
            Não foi possível carregar as notícias.
          </Text>
          <Pressable 
            style={{
              backgroundColor: '#0B3472',
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 5,
            }}
            onPress={() => {
              reloadNews();
            }}
          >
            <Text
              style={{
                color: 'white',
                fontFamily: 'Montserrat_500Medium',
              }}
            >
              Recarregar
            </Text>
          </Pressable>

        
        </View>
      )
    }, [])

    const getNews = async () => {
      try {
        const response = await api.get('/noticias');
        const data = response.data.result;
        setNews(data);
        setNewsImage(data[0].imgPath);
      } catch (err) {
        console.log('getNews', err)
        setIsError(true);
      } finally {
        setIsLoading(false);
      }

    }

    const formatDate = (date: string) => {
      const dateFormated = moment(new Date(date)).format('DD/MM/YYYY')
      return dateFormated
    }

    useEffect(() => {
      getNews();
    }, [])

    useEffect(() => {
      if (netInfo.isConnected) {
          setAppConnected(true)
      } else {
          setAppConnected(false)
      }
  }, [netInfo])
  
    const handleError = (e: any) => { 
      setLoadImageError(true);
     };

    if (isLoading) {
      return (
        <View style={{
          width: '100%',
          marginTop: 20,
        }}>
          <ActivityIndicator size="large" color="#0B3472" />
        </View>
      )
    }
  
    if (isError) {
      return <ErrorMessage />
    }
    
    if (!appConnected) {
      return (
        <NetworkError />
      )
    }

  return (
      <View
        style={{
          flex: 1,
        }}
      >
      <ScrollView 
        style={{
          flex: 1,
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
      <View
          style={HomeStyles.scrollViewContainer}
      >   
        <Text style={HomeStyles.newsTitles}>Última Novidade</Text>
            {
              !loadImageError ? (
                <Shadow
                  style={{
                    width: '100%',
                    borderRadius: 12,
                    height: 200,
                    marginBottom: 40,
                  }}

                  offset={[0, 24]}
                  distance={5}
                  startColor="#00000029"
                
                >
              <Link 
                asChild
                href={{
                  pathname: '/[id]',
                  params: { id: news[0].idNews, imgPath: newsImage, title: news[0].title }
                }}
              >
                <TouchableOpacity 
                  style={{
                    width: '100%',
                    height: 200,
                    marginTop: 20,
                    marginBottom: 30,
                    borderRadius: 12,
                    overflow: 'hidden',
                    backgroundColor: '#f5f5f5',
                    position: 'relative',
                  }}> 
                    <ImageBackground
                      onError={handleError}
                      source={{ uri: `http://www.ufpe.br${newsImage}`}}
                      style={{
                        flex: 1,
                        overflow: 'hidden',           
                      }}
                      resizeMode="cover"
                    
                    >
                      <LinearGradient
                        colors={['transparent', '#0B3472', ]}
                        style={{
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          top: 0,
                          height: 200,
                        }}                        >
                        
                      </LinearGradient>
                      <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'flex-end',
                        padding: 10,
                      }}>
                        <Text 
                            style={{
                              color: 'white',
                              fontFamily: 'Montserrat_700Bold',
                              fontSize: 14,
                            }}>
                              {news[0].title}
                        </Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
              
                  </Link>
                </Shadow>
              ) : (
                <NewsImagePlaceholder 
                  title={news[0].title}
                  idNews={news[0].idNews}
                  imgPath={newsImage}
                />
              )
            }
            
            
              <Text style={HomeStyles.newsSubTitle}>Todas as notícias</Text>

              <View style={HomeStyles.newsContainer}>
              {
                news.slice(1, news.length -1).map((news: News) => (
                  <NewsCard 
                    title={news.title} 
                    date={formatDate(news.published)} 
                    key={news.id} 
                    idNews={news.idNews}
                    />
                ))

              }
            </View>
        </View>
      </ScrollView>
      <EventsButton />
    </View>     
  )
}