import { View } from "react-native";
import { SearchLocationStyles } from "./styles";
import { GestureDetector, TextInput, Gesture, GestureStateChangeEvent, PanGestureHandlerEventPayload} from "react-native-gesture-handler";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";

import { useMap } from "../provider/MapProvider";



export default function SearchLocation () {
    
    const [search, setSearch] = useState<string>('')

    const {
        openListSearch,
    } = useMap()


    const pan = Gesture.Pan()
    .minDistance(10)
    .onEnd((event) => {
        openListSearch()
    })
    .runOnJS(true)


    return (
        <GestureDetector gesture={pan}>
            <View style={SearchLocationStyles.container}>
                <View style={SearchLocationStyles.topView}/>
                <View style={SearchLocationStyles.textInputContainer}>
                    <TextInput 
                        placeholder="Pesquisar Local..."
                        placeholderTextColor='#0B3472'
                        showSoftInputOnFocus={false}
                        style={[SearchLocationStyles.textInput,
                            {
                                fontFamily: search ? 'Montserrat_700Bold' : 'Montserrat_400Regular',
                            }
                        ]}
                        onFocus={openListSearch}
                    />
                    <AntDesign 
                        name="search1" 
                        size={20} 
                        color="#0B3472"
                        style={{position: 'absolute', right: 25, top: 14}}    
                    />
                </View>
            </View>
        </GestureDetector>
        
        
    )
}