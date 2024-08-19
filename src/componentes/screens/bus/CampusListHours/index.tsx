import { ScrollView, Text, View } from "react-native";
import { CampusListHoursStyles } from "./styles";
import WheelChair from "@/componentes/icons/Outline/WheelChair";
import WheelChairFill from "@/componentes/icons/Filled/WheelChairFill";

import { hours } from "@/data/busHours";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

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

    const [scrollToIndex, setScrollToIndex] = useState(0);
    const [dataSourceCords, setDataSourceCords] = useState<number[]>([]);
    
    const [ref, setRef] = useState<ScrollView | null>(null);

    function compareAfterHours(timeString: string) {
        const [hour, minute] = timeString.split(':').map(Number)
        const now = dayjs().utc(true).tz('America/Recife').hour(6).minute(50)
        const formattedItemDate = dayjs().utc(true).tz('America/Recife').hour(hour).minute(minute)
        return now.isAfter(formattedItemDate)
    }

    function getNextBusTime() {
        const now = dayjs().utc(true).tz('America/Recife').hour(6).minute(50)
        const nextBus = hours.campus.find(hour => {
            const [hourSplit, minute] = hour.split(':').map(Number)
            const formattedItemDate = dayjs().utc(true).tz('America/Recife').hour(hourSplit).minute(minute)
            return now.isBefore(formattedItemDate)
        })
        return nextBus
    }


    const ItemView = ( item: string, key: number ) => {

        const isAfter = compareAfterHours(item)

        const isCurrentTime = getNextBusTime() === item

        if (isCurrentTime) {
            setScrollToIndex(key)
        }

        return (
            <View 
                key={key} 
                style={[CampusListHoursStyles.hourContainer, isCurrentTime ? ItemContainerCurrentTime : {}]}
                onLayout={(event) => {
                    const layout = event.nativeEvent.layout;
                    dataSourceCords[key] = layout.y;
                    setDataSourceCords(dataSourceCords);
                    //console.log(dataSourceCords);
                }}    
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

    // useEffect(() => {
    //     function scrollHandler () {
    //         if (dataSourceCords.length > 0 && ref) {
    //             ref.scrollTo({
    //                 y: dataSourceCords[scrollToIndex],
    //                 animated: true
    //             })
    //         } else {
    //             console.log('No data')
    //         }
    //     }

    //     scrollHandler()
    // }, [])

    return (
        <ScrollView 
            style={CampusListHoursStyles.container}
            ref={ref => setRef(ref)}    
        >
                <View style={{
                    flex: 1,
                    gap: 14
                }}>
                    {
                        hours.campus.map(ItemView)
                    }
                </View>
               
        </ScrollView>
    )
}