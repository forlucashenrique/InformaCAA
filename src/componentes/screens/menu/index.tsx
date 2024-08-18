import { Pressable, Text, View } from "react-native";
import { MenuStyles } from "./stylest";
import { useEffect, useState } from "react";
import moment from "moment";
import 'moment/locale/pt-br'
import MealButton from "./MealButton";
import SunOutline from "@/componentes/icons/SunOutline";
import MoonOutline from "@/componentes/icons/MoonOutline";
import RatingButton from "./RatingButton";
import { LunchModal } from "./LunchModal";
import api from "@/service";
import DinnerModal from "./DinnerModal";
import RatingModal from "./RatingModal";


const daysLabel = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']

type Menu = {[key: string]: {lunch: string[], dinner: string[]}}

export default function Menu () {

    
    const [menu, setMenu] = useState<Menu>({})
    const [loading, setLoading] = useState(false)
    const [visbileLunchModal, setVisibleLunchModal] = useState(false)
    const [visibleDinnerModal, setVisibleModal] = useState(false)
    const [visibleRatingModal, setVisibleRatingModal] = useState(false)


    function openLunchModal() {
        setVisibleLunchModal(true)
    }

    function closeLunchModal() {
        setVisibleLunchModal(false)
    }

    function openDinnerModal() {
        setVisibleModal(true)
    }

    function closeDinnerModal() {
        setVisibleModal(false)
    }


    function openRatingModal() {
        setVisibleRatingModal(true)
    }

    function closeRatingModal() {
        setVisibleRatingModal(false)
    }

    moment.locale('pt-br')  

    const currentDay = moment().format('ddd')



    const [selectedDay, setSelectedDay] = useState(() => {
        return daysLabel.find(day => day.toLowerCase() === currentDay) || 'Seg'
    })

    function onSelectedDay(day: string) {
        setSelectedDay(day)
    }

    async function getMenu() {
        try {

            const res = await api.get('/cardapio');      
            const data = res.data.result;
            setMenu(data);

        } catch(error) {
            console.log('Erro ao carregar o cardápio');

        }
    }

    useEffect(() => {
        getMenu()
    }, [])



    return (
        <View style={MenuStyles.screenContainer}>
            <View style={MenuStyles.daysContainer}>
                {
                    daysLabel.map((day, index) => {
                        return (
                            <Pressable 
                                key={index} 
                                onPress={() => onSelectedDay(day)}
                                style={[
                                    MenuStyles.dayButton,
                                    selectedDay === day && {backgroundColor: '#0B3472'}
                                ]}
                            >
                                <Text 
                                    style={[
                                    MenuStyles.dayText,
                                    selectedDay === day && {color: 'white'}
                                ]}>
                                    {day}
                                </Text>
                            </Pressable>
                    )})
                }
            </View>

            <View style={MenuStyles.buttonsContainer}>
                <MealButton 
                    mealTitle="Almoço" 
                    icon={<SunOutline />} 
                    openHour="12:00" 
                    closeHour="14:00" 
                    onPress={openLunchModal}
                />
                <MealButton 
                    mealTitle="Jantar" 
                    icon={<MoonOutline />} 
                    openHour="17:00" 
                    closeHour="20:00"
                    onPress={openDinnerModal}
                />

                <View style={MenuStyles.ratingButtonContainer}>
                    <RatingButton  onPress={openRatingModal}/>
                 </View>
            </View>
                
            <RatingModal 
                visible={visibleRatingModal}
                onClose={closeRatingModal}
            />

            <LunchModal 
                visible={visbileLunchModal}
                close={closeLunchModal}
                menuItems={menu[selectedDay] && menu[selectedDay].lunch}
            />

            <DinnerModal 
                visible={visibleDinnerModal}
                close={closeDinnerModal}
                menuItems={menu[selectedDay] && menu[selectedDay].dinner}
            />
        </View>
    )
}


