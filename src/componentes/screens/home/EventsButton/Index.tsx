import CalendarFill from "@/componentes/icons/Filled/CalendarFill";
import { Pressable, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { EventsButtonStyles } from "./styles";
import { useRouter } from "expo-router";

export default function EventsButton () {
    const {navigate} = useRouter();
    return (
        <Shadow style={EventsButtonStyles.shadowContainer} offset={[0, 10]} distance={50} >
            <Pressable style={EventsButtonStyles.container} onPress={() => {
                navigate('/(home)/events')
            }}>
                <CalendarFill />
            </Pressable>
        </Shadow>
    )
}