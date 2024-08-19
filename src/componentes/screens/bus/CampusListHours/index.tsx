import {  InteractionManager, Text, View } from "react-native";
import { CampusListHoursStyles } from "./styles";
import WheelChair from "@/componentes/icons/Outline/WheelChair";
import WheelChairFill from "@/componentes/icons/Filled/WheelChairFill";

import { hours } from "@/data/busHours";
import { useCallback, useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import Animated, { scrollTo, useAnimatedRef } from "react-native-reanimated";

dayjs.extend(utc);
dayjs.extend(timezone);


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


export default function CampusListHours() {

    const [scrollToPosition, setScrollToPosition] = useState(0);
    const ref = useRef<Animated.FlatList<string>>(null);

    function compareAfterHours(timeString: string) {
        const [hour, minute] = timeString.split(':').map(Number)
        const now = dayjs().utc(true).tz('America/Recife').hour(10).minute(0)
        const formattedItemDate = dayjs().utc(true).tz('America/Recife').hour(hour).minute(minute)
        return now.isAfter(formattedItemDate)
    }

    function getNextBusTime() {
        const now = dayjs().utc(true).tz('America/Recife').hour(10).minute(0)
        const nextBus = hours.campus.find(hour => {
            const [hourSplit, minute] = hour.split(':').map(Number)
            const formattedItemDate = dayjs().utc(true).tz('America/Recife').hour(hourSplit).minute(minute)
            return now.isBefore(formattedItemDate)
        })
        return nextBus || ''
    }
    const [scrollToIndex, setScrollToIndex] = useState(hours.campus.indexOf(getNextBusTime()));

    const ItemView = ( item: string, key: number ) => {
        const isAfter = compareAfterHours(item)
        const isCurrentTime = getNextBusTime() === item
        return (
            <View 
                key={key} 
                style={[CampusListHoursStyles.hourContainer, isCurrentTime ? ItemContainerCurrentTime : {}]}
                // onLayout={(event) => {
                //     const layout = event.nativeEvent.layout;
            
                //     if (scrollToIndex === key) {
                //         setScrollToPosition(layout.y)
                //     }
                // }}    
            >
                <Text style={[CampusListHoursStyles.hourText, isCurrentTime ? ItemTextCurrentTime : {}, isAfter ? ItemTextDisabledStyle :  {} ]}>
                    {item}
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
    };

     function scrollHandler () {
        if (ref.current) {
            ref.current.scrollToIndex({
                index: scrollToIndex,
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
        <Animated.View
             style={CampusListHoursStyles.container}
        >
            <Animated.FlatList 
            data={hours.campus}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => ItemView(item, index)}
            
            ref={ref}
            contentContainerStyle={{
                gap: 14,
            }}
            getItemLayout={getItemLayout}
        >
                <View 
                    style={{
                        flex: 1,
                        gap: 14
                    }}
                >
                    {
                        hours.campus.map(ItemView)
                    }
                </View>
               
            </Animated.FlatList>
        </Animated.View>
        
    )
}