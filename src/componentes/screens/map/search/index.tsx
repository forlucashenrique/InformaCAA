import { View } from "react-native";
import { SearchLocationStyles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";

type SearchLocationProps = {
    handleOpenListSearch: () => void;
}

export default function SearchLocation ({handleOpenListSearch}: SearchLocationProps) {
    const [search, setSearch] = useState<string>('')

    return (
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
                    onFocus={handleOpenListSearch}
                />
                <AntDesign 
                    name="search1" 
                    size={20} 
                    color="#0B3472"
                    style={{position: 'absolute', right: 20, top: 14}}    
                />
               
            </View>
        </View>
    )
}