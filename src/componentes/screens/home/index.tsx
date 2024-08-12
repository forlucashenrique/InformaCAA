import { Text, ScrollView, View, ActivityIndicator } from "react-native";
import { HomeStyles } from "./styles";
import NewsCard from "./NewsCard";
import api from "@/service";
import { useEffect, useState } from "react";
import moment from "moment";

export default function Home () {

    const [news, setNews] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [textError, setTextError] = useState<string>('');
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

    const formatDate = (date: string) => {

      const dateFormated = moment(new Date(date)).format('DD/MM/YYYY')
  
      return dateFormated
    }

    useEffect(() => {
      getNews();
    }, [reload])
  

    return (
        <View
            style={HomeStyles.scrollViewContainer}
        >   
            <Text style={HomeStyles.newsTitles}>Últimas Novidades</Text>

            <View style={{
                width: '100%',
                height: 155,
                backgroundColor: '#0B3472',
                marginTop: 20,
                marginBottom: 30,
                borderRadius: 12,

            }}>

            </View>

            <Text style={HomeStyles.newsSubTitle}>Todas as notícias</Text>

            <View style={HomeStyles.newsContainer}>
              {
                isLoading ? (

                  <View style={{
                    width: '100%',
                  }}>
                    <ActivityIndicator size="large" color="#0B3472" />
                  </View>
                ) : (
                    news.map((news: any) => (
                      <NewsCard title={news.title} date={formatDate(news.published)} key={news.id} />
                    ))
                  )
              }

            </View>
            
        </View>
    )
}