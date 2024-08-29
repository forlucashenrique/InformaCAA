import { View } from "react-native";
import { SearchLocationStyles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import AntDesign from '@expo/vector-icons/AntDesign';

type SearchLocationProps = {
    handleOpenListSearch: () => void;
}

export default function SearchLocation ({handleOpenListSearch}: SearchLocationProps) {
    return (
        <View style={SearchLocationStyles.container}>
            <View style={SearchLocationStyles.topView}/>
            <View style={SearchLocationStyles.textInputContainer}>
                <TextInput 
                    placeholder="Pesquisar Local..."
                    placeholderTextColor='#0B3472'
                    style={SearchLocationStyles.textInput}
                    onFocus={handleOpenListSearch}
                />
                <AntDesign 
                    name="search1" 
                    size={24} 
                    color="#0B3472"
                    style={{position: 'absolute', right: 15, top: 12}}    
                />
               
            </View>
        </View>
    )
}