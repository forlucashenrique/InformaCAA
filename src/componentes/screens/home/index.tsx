import { Text, ScrollView, View, ActivityIndicator, ImageBackground } from "react-native";
import { HomeStyles } from "./styles";
import NewsCard from "./NewsCard";
import api from "@/service";
import { useEffect, useState } from "react";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";


type News = {
  id: number;
  title: string;
  published: string;
  idNews: number;
  img?: string;
}

export default function Home () {

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
        
        console.log(data[0].img)
        setNews(data);
        setNewsImage(data[0].img);
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

 

    return (
        <View
            style={HomeStyles.scrollViewContainer}
        >   
            <Text style={HomeStyles.newsTitles}>Últimas Novidades</Text>


            {
              isLoading ? (
                <View style={{
                  width: '100%',
                }}>
                  <ActivityIndicator size="large" color="#0B3472" />
                </View>
              ) : (

                <>
                <View style={{
                  width: '100%',
                  height: 200,
    
                  marginTop: 20,
                  marginBottom: 30,
                  borderRadius: 12,
                  overflow: 'hidden',
                  backgroundColor: '#f5f5f5',
                }}>
                    <ImageBackground
                      onError={handleError}
                      src="https://www.ufpe.br/documents/40687/5497091/Snapinsta.png"
                      style={{
                        flex: 1,
                        overflow: 'hidden',            
                        justifyContent: 'flex-end',
                      }}
                      // source={{
                      //   uri: newsImage
                      // }}
                      resizeMode="cover"
                    
                    >
                      <View style={{
                        width: '100%',
                      }}>

                        <LinearGradient
                          colors={['rgba(0, 0, 0, 0.5)', 'transparent']}
                        >
                          <Text style={{
                            color: 'white',
                          }}>{news[0].title}</Text>
                        </LinearGradient>
                        
                      </View>
                    </ImageBackground>
                </View>
                    

                    {/* <Image 
                      source={{
                        uri: 'https://www.ufpe.br/documents/40687/5497091/Snapinsta.png'
                      }}

                      contentFit="cover"
                      style={{
                        width: '100%',
                        height: 155,
                        marginTop: 20,
                        marginBottom: 30,
                        borderRadius: 12,
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    /> */}
                      <Text style={HomeStyles.newsSubTitle}>Todas as notícias</Text>

                      <View style={HomeStyles.newsContainer}>
                      {
                        news.map((news: News) => (
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
    )
}