import { Modal, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import {View as MotiView} from 'moti';
import { ListSearchStyles } from "./styles";
import SearchLocation from "../search";

import AntDesign from '@expo/vector-icons/AntDesign';
import LocationDetailsCard from "../LocationDetailsCard";

import { locations } from "@/data/mapLocations";
import { useState } from "react";

type ListSearchProps = {
    visible: boolean;
    onClose: () => void;
}

export default function ListSearch({onClose, visible}: ListSearchProps) {
    const [search, setSearch] = useState<string>('')

    return (

        <Modal
            transparent
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
            onDismiss={onClose}
            style={{
                flex: 1,
            }}
        >
            <MotiView style={ListSearchStyles.blurContainer} >
                <Pressable 
                    style={{
                        width: '100%',
                        height: '40%',
                    }}
                    onPress={onClose}
                />
                <MotiView
                    style={ListSearchStyles.contentContainer}
                >
                    <View style={ListSearchStyles.inputContainer}>
                        <Pressable style={ListSearchStyles.topView} onPress={onClose}/>
                        <View style={ListSearchStyles.textInputContainer}>
                            <TextInput 
                                placeholder="Pesquisar Local..."
                                placeholderTextColor='#0B3472'
                                style={[ListSearchStyles.textInput, 
                                    {
                                        fontFamily: search ? 'Montserrat_700Bold' : 'Montserrat_400Regular',
                                    }
                                ]}
                            // onFocus={handleOpenListSearch}
                            />
                            <AntDesign 
                                name="search1" 
                                size={24} 
                                color="#0B3472"
                                style={{position: 'absolute', right: 15, top: 12}}    
                            />
                        </View>
                    </View>

                    <ScrollView 
                        style={{
                            flex: 1,
                            
                        }}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{
                            flex: 1,
                            width: '100%',
                            gap: 20,
                        }}>
                            {
                                locations.map((location, index) => (
                                    <LocationDetailsCard 
                                        key={index}
                                        title={location.title}
                                        description={location.description}
                                        image={location.image}
                                        link={location.link}
                                        handleCenterCoordinates={() => {}}
                                    />
                                ))
                            }
                           
                        </View>
                    
                </ScrollView>
                </MotiView>

                
            </MotiView>
            
           
        </Modal>
        
    )
}