import { Text, ScrollView, View, ActivityIndicator, ImageBackground, Pressable } from "react-native";
import { HomeStyles } from "./styles";
import NewsCard from "./NewsCard";
import api from "@/service";
import { useEffect, useState } from "react";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import EventsButton from "./EventsButton/Index";


type News = {
  id: number;
  title: string;
  published: string;
  idNews: string;
  imgPath?: string;
}

export default function Home () {

    const router = useRouter()

    const [news, setNews] = useState<News[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [textError, setTextError] = useState<string>('');
    const [isError, setIsError] = useState(false);
    const [reload, setReload] = useState(false);

    const [newsImage, setNewsImage] = useState<string>('');

    const getNews = async () => {
      try {
        const response = await api.get('/noticias');
        const data = response.data.result;
      
        setNews(data);
        setNewsImage(data[0].imgPath);
      } catch (err) {
        setTextError(`Não foi possível carregar`);
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
    }, [reload])
    

    const handleError = (e: any) => { console.log(e.nativeEvent.error); };

    const image =  require('@/assets/screens/news/blue-placeholder-image.png')

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
            {
              isLoading ? (
                <View style={{
                  width: '100%',
                  marginTop: 20,
                }}>
                  <ActivityIndicator size="large" color="#0B3472" />
                </View>
              ) : (
                <>
                <Text style={HomeStyles.newsTitles}>Últimas Novidades</Text>
                <Link 
                  asChild
                  href={{
                    pathname: '/[id]',
                    params: { id: news[0].idNews, imgPath: newsImage, title: news[0].title }

                  }}
                >
                  <Pressable 
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
                  </Pressable>
                </Link>
                
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
                </>
              )
              
            }
          </View>
        </ScrollView>
        <EventsButton />
      </View>

        
    )
}