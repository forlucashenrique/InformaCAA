import {  FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import { CampusListHoursStyles } from "./styles";
import WheelChair from "@/componentes/icons/Outline/WheelChair";
import WheelChairFill from "@/componentes/icons/Filled/WheelChairFill";

import { hours } from "@/data/busHours";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";


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

    //console.log(type)

    const ref = useRef<FlatList<string>>(null);
    //const [previewRenderItems, setPreviewRenderItems] = useState<string[]>(hours[type].slice(0, 8))

    // function scrollRenderItems() {
    //     const nextIndex = previewRenderItems.length
    //     const nextItems = hours[type].slice(nextIndex, nextIndex + 6)
    //     setPreviewRenderItems([...previewRenderItems, ...nextItems])
    // }

    function compareAfterHours(timeString: string) {
        const [hour, minute] = timeString.split(':').map(Number)
        const now = dayjs().utc(true).tz('America/Recife')
        const formattedItemDate = dayjs().utc(true).tz('America/Recife').hour(hour).minute(minute)
        return now.isAfter(formattedItemDate)
    }

    function getNextBusTime() {
        const now = dayjs().utc(true).tz('America/Recife')
        const nextBus = hours.find(hour => {
            const [hourSplit, minute] = hour.split(':').map(Number)
            const formattedItemDate = dayjs().utc(true).tz('America/Recife').hour(hourSplit).minute(minute)
            return now.isBefore(formattedItemDate)
        })
        return nextBus || ''
    }
   // const [scrollToIndex, setScrollToIndex] = useState(hours.indexOf(getNextBusTime()));

//    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent> ) => {
//     const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
//     if (contentOffset.y + layoutMeasurement.height >= contentSize.height - 20) {
//       scrollRenderItems();
//     }
//   };

    const ItemView = useCallback(( item: string, key: number ) => {
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
    }, []);

     function scrollHandler () {
        if (ref.current) {
            ref.current.scrollToIndex({
                index: 1,
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
            renderItem={({ item, index }) => ItemView(item, index)}
            //initialScrollIndex={1}
            ref={ref}
            contentContainerStyle={{
                gap: 14,
            }}
            initialNumToRender={6}
           // onEndReached={scrollRenderItems}
           // onEndReachedThreshold={0.1}
            getItemLayout={getItemLayout}
            
        >
            
            </FlatList>

            {/* <ScrollView style={{
                    flex: 1,
                    width: '100%',
                    padding: 10,
                    paddingTop: 0,
                }}
                onScroll={handleScroll}
                scrollEventThrottle={10}
                
            >
                <View style={{
                    width: '100%',
                    gap: 14
                }}>
                    {
                        previewRenderItems.map(ItemView)
                    }
                </View>
            
            </ScrollView> */}
        </View>
        
    )
})