import {  FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import { CampusListHoursStyles } from "./styles";
import WheelChair from "@/componentes/icons/Outline/WheelChair";
import WheelChairFill from "@/componentes/icons/Filled/WheelChairFill";

import { memo,  useEffect, useRef, useState} from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


dayjs.extend(utc);
dayjs.extend(timezone);


type CampusListHoursProps = {
    hours: string[]
}

const ItemTextDisabledStyle = {
    color: '#0b3472a0'
}


const ItemTextEnabledStyle = {
    color: '#0B3472'
}

const ItemTextCurrentTime = {
    color: '#fff'
}

const ItemContainerCurrentTime = {
    backgroundColor: '#0b3472'
}


export const ListHours = memo(function ({hours} : CampusListHoursProps) {
    const ref = useRef<FlatList<string>>(null)

    function getNextBusTime() {
        const now = dayjs().utc(true).tz('America/Recife')
        const nextBus = hours.find(hour => {
            const [hourSplit, minute] = hour.split(':').map(Number)
            const formattedItemDate = dayjs().utc(true).tz('America/Recife').hour(hourSplit).minute(minute)
            return now.isBefore(formattedItemDate)
        })
        return nextBus || ''
    }

    const [indexToScroll, setIndexToScroll] = useState(hours.findIndex(hour => hour === getNextBusTime()))    

    function compareAfterHours(timeString: string) {
        const [hour, minute] = timeString.split(':').map(Number)
        const now = dayjs().utc(true).tz('America/Recife')
        const formattedItemDate = dayjs().utc(true).tz('America/Recife').hour(hour).minute(minute)
        return now.isAfter(formattedItemDate)
    }

   
    const ItemView = memo(function ( {hourText, index} : {hourText: string, index: number}) {
        const isAfter = compareAfterHours(hourText)
        const isCurrentTime = getNextBusTime() === hourText
        
        return (
            <View 
                key={index} 
                style={[CampusListHoursStyles.hourContainer, isCurrentTime ? ItemContainerCurrentTime : {}]}
            >
                <Text style={[CampusListHoursStyles.hourText, isCurrentTime ? ItemTextCurrentTime : {}, isAfter ? ItemTextDisabledStyle :  {} ]}>
                    {hourText}
                </Text>

                <View style={CampusListHoursStyles.nextBusContainer}>
                    {
                        isCurrentTime && <Text style={CampusListHoursStyles.nextBusText}>Próximo ônibus</Text>
                    }
                    {
                        isAfter ? <WheelChair /> : <WheelChairFill fill={isCurrentTime ? '#fff': "#0B3472"}/>
                    }
                </View>
            </View>
        )
        }, (prevProps, nextProps) => {
            return prevProps.hourText === nextProps.hourText
        });
        

     function scrollHandler () {
        if (ref.current) {
            ref.current.scrollToIndex({
                index: indexToScroll,
                animated: true,
                viewPosition: 0.5
            })
        }
     }
     
     const ITEM_HEIGHT = 50;

     const getItemLayout = (data: any, index: number) => ({
        length: ITEM_HEIGHT, // Altura de cada item
        offset: ITEM_HEIGHT * index, // Posição do item
        index, // Índice do item
      });

     useEffect(() => {
        scrollHandler()
     }, [])

    return (
        <View
             style={CampusListHoursStyles.container}
        >
            <FlatList 
                data={hours}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <ItemView hourText={item} index={index} />}
                //initialScrollIndex={1}
                ref={ref}
                contentContainerStyle={{
                    gap: 14,
                }}
                initialNumToRender={6}
                getItemLayout={getItemLayout}   
                
            >
            </FlatList>
        </View>
        
    )
})