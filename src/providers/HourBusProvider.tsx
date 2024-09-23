import dayjs from "dayjs"
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { hours } from "@/data/busHours"

type HourBusContextType = {
    nextBusTime: string
    fromToText: 'campus' | 'center',
    nextBusTimeIndexOf: number
    handleFromToText: (text: 'campus' | 'center') => void
}

type HourBusProviderProps = {
    children: ReactNode
}

const HourBusContext = createContext<HourBusContextType>({} as HourBusContextType)

export default function HourBusProvider({children}: HourBusProviderProps) {

    const [nextBusTime, setNextBusTime] = useState<string>('')
    const [nextBusTimeIndexOf, setNextBusTimeIndexOf] = useState<number>(0)
    const [fromToText, setFromToText] = useState<'campus' | 'center'>('campus')

    function handleFromToText(text: 'campus' | 'center') {
        setFromToText(text)
    }

    const getNextBusTime = useCallback(function (hours: string[]) {
        const now = dayjs().utc(true).tz('America/Recife')
        const nextBus = hours.find(hour => {
            const [hourSplit, minute] = hour.split(':').map(Number)
            const formattedItemDate = dayjs().utc(true).tz('America/Recife').hour(hourSplit).minute(minute)
            return now.isBefore(formattedItemDate)
        })
        return nextBus || ''
    }, [fromToText])


    useEffect(() => {
        const nextBus = getNextBusTime(hours[fromToText])
        const nextBusIndex = hours[fromToText].findIndex(hour => hour === nextBus)
        setNextBusTimeIndexOf(nextBusIndex)
        setNextBusTime(nextBus)
    }, [fromToText])

    
    const contextValue = useMemo(() => ({
        nextBusTime,
        fromToText,
        nextBusTimeIndexOf,
        handleFromToText,
    }), [
        nextBusTime,
        fromToText,
        nextBusTimeIndexOf,
        handleFromToText,
    ])

    return (
        <HourBusContext.Provider value={contextValue}>
            {children}
        </HourBusContext.Provider>
    )
}

export const useHourBus = () => {
    const context = useContext(HourBusContext)
    return context
}