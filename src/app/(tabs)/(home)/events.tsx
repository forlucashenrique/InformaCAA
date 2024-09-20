import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Calendar, DateData, LocaleConfig} from "react-native-calendars";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { DayState, MarkedDates } from "react-native-calendars/src/types";
import api from "@/service";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get('window')

const monthNames = [
    'JANEIRO', 
    'FEVEREIRO', 
    'MARÇO', 
    'ABRIL', 
    'MAIO', 
    'JUNHO', 
    'JULHO', 
    'AGOSTO', 
    'SETEMBRO', 
    'OUTUBRO', 
    'NOVEMBRO', 
    'DEZEMBRO'
  ]

const monthNamesShort = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
]

LocaleConfig.locales['pt-br'] = {
    monthNames,
    monthNamesShort,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
}

LocaleConfig.defaultLocale = 'pt-br'

type Event = {
    id: number;
    title: string;
    idEvent: string;
    locale: string;
    createdAt: string;
}


export default function Events () {

    const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth())
    const [allEvents, setAllEvents] = useState<Event[]>([])
    const [markedDates, setMarkedDates] = useState<MarkedDates>({})
    const [isLoading, setIsLoading] = useState(true)


    function renderEventCard(event: Event) {

        const day = event.createdAt.split(' ')[0].split('-')[2]

        return (
            <View style={{
                width: '100%',
                borderRadius: 10,
                marginVertical: 10,
                paddingVertical: 10,
                gap: 8,
                borderBottomWidth: 1,
                borderColor: '#D9D9D9',
            }}
                key={event.id}
            >   

                <Text style={{
                    fontFamily: 'Montserrat_600SemiBold',
                    fontSize: 14,
                    color: '#262D33',
                }}>
                  {day} - {event.title}
                </Text>
                <Text style={{
                    fontFamily: 'Montserrat_300Light',
                    fontSize: 14,
                    color: 'black',
                }}>{event.locale}</Text>
                <Text style={{
                    fontFamily: 'Montserrat_500Medium',
                    fontSize: 14,
                    color: 'black',
                }}>Saiba mais.</Text>
            </View>
        )
    }

    useEffect(() => {
        const fetchAllEvents = async () => {
            try {
                const response = await api.get('/eventos')
                const events = response.data.result
                const dates = response.data.markedDates
            
                setAllEvents(events)
                setMarkedDates(dates)

            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchAllEvents()
    }, [])

    return (
       <View style={{
            flex: 1,
            paddingVertical: 20,
            paddingHorizontal: 20,   
        }}>

            {
                isLoading ? (
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ActivityIndicator size="large" color="#0B3472" />
                    </View>
                ) : (

                    <>
                        <Calendar 
                            style={{
                                
                                backgroundColor: 'transparent'
                            }}
                            onMonthChange={(date: DateData) => {
                                const month = date.month - 1

                                console.log(date)
                                setCurrentMonth(month)
                            }}
                            customHeaderTitle={
                                <Text 
                                    style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat_700Bold',
                                    }}
                                >
                                    {monthNames[currentMonth]}
                                </Text>
                            }
                            renderArrow={(direction: 'right' | 'left') => { 
                                return <AntDesign name={`arrow${direction}`} size={32} color="black" />
                            }}

                            
                            theme={{
                                calendarBackground: 'transparent',
                                dotStyle: {
                                    width: 6,
                                    height: 6,
                                    borderRadius: 3,
                                    backgroundColor: '#0B3472',
                                },
                                
                                textDayHeaderFontFamily: 'Roboto_400Regular',
                                textDayHeaderFontSize: 14,
                                textDayHeaderFontWeight: 'bold',
                                textDayStyle: {
                                    color: '#262D33',
                                    fontFamily: 'Roboto_400Regular',
                                },
                                todayBackgroundColor: '#0B3472',
                                todayTextColor: '#FFF',
                                textDisabledColor: '#939699',
                                
                            }}

                            // dayComponent={({date, state}) => {
                            //     console.log(date)
                            //    return renderDay(date, state)
                            // }}

                            markedDates={markedDates}
                        />

                        <View style={{
                            flex: 1,
                        }}>
                            <Text style={{
                                fontFamily: 'Montserrat_700Bold',
                                fontSize: 16,
                                color: '#262D33',
                                marginVertical: 20,
                            }}>
                                Eventos
                            </Text>

                            <ScrollView style={{
                                flex: 1,
                            }}>
                                <View>
                                    {
                                        allEvents.filter((event) => {
                                            const month = new Date(event.createdAt).getMonth()
                                            const year = new Date(event.createdAt).getFullYear()
                                            return month === currentMonth && year === new Date().getFullYear()
                                        }).map((event: Event) => {
                                            return renderEventCard(event)
                                        })
                                    }
                                </View>                                
                            </ScrollView>
                        </View>
                    </>
                    
                )
            }
            
            
       </View>
    )
}
