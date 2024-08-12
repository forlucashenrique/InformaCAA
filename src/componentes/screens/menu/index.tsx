import { Pressable, Text, View } from "react-native";
import { MenuStyles } from "./stylest";
import { useState } from "react";
import moment from "moment";
import 'moment/locale/pt-br'
import MealButton from "./MealButton";
import SunOutline from "@/componentes/icons/SunOutline";
import MoonOutline from "@/componentes/icons/MoonOutline";
import RatingButton from "./RatingButton";


const daysLabel = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']

export default function Menu () {

    moment.locale('pt-br')

    const currentDay = moment().format('ddd')

    const [selectedDay, setSelectedDay] = useState(() => {
        return daysLabel.find(day => day.toLowerCase() === currentDay) || 'Seg'
    })

    function onSelectedDay(day: string) {
        setSelectedDay(day)
    }

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
                <MealButton mealTitle="Almoço" icon={<SunOutline />} openHour="12:00" closeHour="14:00"/>
                <MealButton mealTitle="Jantar" icon={<MoonOutline />} openHour="17:00" closeHour="20:00"/>

                <View style={MenuStyles.ratingButtonContainer}>
                    <RatingButton />
                 </View>
            </View>

            
        </View>
    )
}