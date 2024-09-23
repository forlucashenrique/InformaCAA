import {  FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import { CampusListHoursStyles } from "./styles";
import WheelChair from "@/componentes/icons/Outline/WheelChair";
import WheelChairFill from "@/componentes/icons/Filled/WheelChairFill";

import { memo,  useCallback,  useEffect, useRef, useState} from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { ScrollView } from "react-native-gesture-handler";
import { useHourBus } from "@/providers/HourBusProvider";
import { useFocusEffect } from "expo-router";


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

    const {
        nextBusTimeIndexOf,
    } = useHourBus()
   
    const ItemView = memo(function ( {hourText, index} : {hourText: string, index: number}) {
        const isAfter = nextBusTimeIndexOf > index
        const isCurrentTime = index === nextBusTimeIndexOf

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
        
    const renderItem = useCallback(function ({item, index}: {item: string, index: number}) {
        return <ItemView hourText={item} index={index} />
    }, [])

    const keyExtractor = useCallback(function (item: string, index: number) {
        return index.toString()
    }, [])

     function scrollHandler () {
        if (ref.current) {
            ref.current.scrollToIndex({
                index: nextBusTimeIndexOf + 6,
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

    //  useEffect(() => {
    //     scrollHandler()
    //  }, [])

     useFocusEffect(
        useCallback(() => {
            scrollHandler()
        }, [])
     )

    return (
        <View
             style={CampusListHoursStyles.container}
        >
            <FlatList 
                data={hours}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                //initialScrollIndex={1}
                ref={ref}
                contentContainerStyle={{
                    gap: 14,
                }}
                initialNumToRender={6}
                // maxToRenderPerBatch={6}
                // windowSize={6}
                // removeClippedSubviews={true}
                getItemLayout={getItemLayout}   
                
            >
            </FlatList>

           
        </View>
        
    )
})