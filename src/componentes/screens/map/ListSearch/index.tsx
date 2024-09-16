import { Modal, NativeScrollEvent, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import {View as MotiView} from 'moti';
import { ListSearchStyles } from "./styles";
import SearchLocation from "../search";

import AntDesign from '@expo/vector-icons/AntDesign';
import LocationDetailsCard from "../LocationDetailsCard";

import { Location, locations } from "@/data/mapLocations";
import { useRef, useState } from "react";
import { useMap } from "../provider/MapProvider";



export default function ListSearch() {
    const [search, setSearch] = useState<string>('')
    const [scrollViewRef, setScrollViewRef] = useState<ScrollView | null>(null)

    const {
        showLocationsList,
        closeListSearch,
        dataSourceCords,
        setDataSourceCords,
        scrollToIndex,
    
    } = useMap()

    const renderItem = (location: Location, key: number) => (
        <LocationDetailsCard 

            key={key}
            title={location.title}
            description={location.description}
            image={location.image}
            link={location.link}
            coordinates={location.coordinates}
            handleCenterCoordinates={() => {}}
        />
    )


    const scrollHandler = () => {
        if (dataSourceCords.length > scrollToIndex && scrollViewRef) {
            scrollViewRef.scrollTo({
            x: 0,
            y: 105 * scrollToIndex - 25,
            animated: true,
          });
        } 
      };

    return (

        <Modal
            transparent
            visible={showLocationsList}
            animationType="slide"
            onRequestClose={closeListSearch}
            onDismiss={closeListSearch}
            style={{
                flex: 1,
            }}
            onLayout={scrollHandler}
        >
            <MotiView style={ListSearchStyles.blurContainer} >
                <Pressable 
                    style={{
                        width: '100%',
                        height: '40%',
                    }}
                    onPress={closeListSearch}
                />
                <MotiView
                    style={ListSearchStyles.contentContainer}
                >
                    <View style={ListSearchStyles.inputContainer}>
                        <Pressable style={ListSearchStyles.topView} onPress={closeListSearch}/>
                        <View style={ListSearchStyles.textInputContainer}>
                            <TextInput 
                                placeholder="Pesquisar Local..."
                                placeholderTextColor='#0B3472'
                                value={search}
                                onChangeText={setSearch}
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
                        ref={(ref) => setScrollViewRef(ref)}
                        onLayout={scrollHandler}
                    >
                        <View style={{
                            flex: 1,
                            width: '100%',
                            gap: 20,
                        }}>
                            {
                                locations.filter(location => {
                                   if (search === '') return true

                                      if (location.title.toLowerCase().includes(search.toLowerCase())) {
                                        return true
                                    }
                                }).map(renderItem)
                            }
                           
                        </View>
                    
                    </ScrollView>
                </MotiView>
            </MotiView>
        </Modal>
        
    )
}