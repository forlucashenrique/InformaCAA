import { Image } from 'expo-image';
import { View as MotiView, Text } from 'moti';
import { LayoutChangeEvent, Pressable, View, ViewProps } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { LocationDetailsCardStyles } from './styles';
import { Key, useState } from 'react';
import LocationOutline from '@/componentes/icons/Outline/LocationOutline';
import * as Linking from 'expo-linking';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useMap } from '../provider/MapProvider';

type LocationDetailsCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
    coordinates: [number, number];
    handleCenterCoordinates: (latitude: number, longitude: number) => void;
} & ViewProps;

type MappingImages = {
    [key: string]: any;
}


const mappingImages: MappingImages = {
    'auditorio-mestre-vitalino': require('@/assets/maps/images/auditorio-mestre-vitalino.png'),
    'auditorio-luiz-gonzaga': require('@/assets/maps/images/auditorio-luiz-gonzaga.png'),
    'assistencia-estudantil': require('@/assets/maps/images/assistencia-estudantil.png'),
    'biblioteca-do-agreste': require('@/assets/maps/images/biblioteca-agreste.png'),
    'restaurante-universitario': require('@/assets/maps/images/restaurante-universitario.png'),
    'quadra-poliesportiva': require('@/assets/maps/images/quadra-poliesportiva.png'),
    'lemape': require('@/assets/maps/images/lemape.png'),
}

export default function LocationDetailsCard({
    title,
    description,
    image,
    link,
    coordinates,
    handleCenterCoordinates, 
    ...props
}: LocationDetailsCardProps) {

    const {
        setCenterCoordinate,
        setZoomValue,
        closeListSearch,
        selectedLocation,
        setSelectedLocation,
    } = useMap()


    const [isExpanded, setIsExpanded] = useState(selectedLocation === title);

    return (
        <MotiView 
            style={LocationDetailsCardStyles.container}
            from={{
                height: 85,
            }}

            animate={{
                height: isExpanded ? 220 : 85,
            }}

            transition={{
                type: 'timing',
                duration: 300,
            }}
            {...props}
        >
            <Pressable style={LocationDetailsCardStyles.contentContainer} onPress={() => {
                setIsExpanded(!isExpanded)
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 8,
                    flex: 1,
                    alignItems: 'center',
                }}>
                    <Image style={{
                        width: 65,
                        height: 65,
                    }}
                        source={mappingImages[image]}
                    />  
                    <Text 
                        style={LocationDetailsCardStyles.titleText}
                    >
                        {title}
                    </Text>
                </View>
                    
                
                {
                    isExpanded ? (
                        <Entypo name="chevron-small-up" size={24} color="#0B3472" />
                    ) : (
                        <Entypo name="chevron-small-down" size={24} color="#0B3472" />
                    )
                }
                
            </Pressable>
            {
                isExpanded && (
                    <View style={LocationDetailsCardStyles.expandedContentContainer}>
                        <Text style={LocationDetailsCardStyles.descriptionText}>{description}</Text>

                        <View style={LocationDetailsCardStyles.actionsContainer}>
                            <Pressable 
                                style={{
                                    alignItems: 'center',
                                }}
                                onPress={() => Linking.openURL(link)}
                            >
                                <MaterialIcons name="info-outline" size={28} color="#0B3472" />
                                <Text 
                                    style={{
                                        color: '#0B3472',
                                        fontFamily: 'Montserrat_400Regular',
                                        fontSize: 12,
                                    }}
                                >
                                    Saiba mais
                                </Text>

                            </Pressable>

                            <Pressable 
                                style={{
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    setCenterCoordinate(coordinates)
                                    setZoomValue(18)
                                    closeListSearch()
                                    setSelectedLocation(title)
                                }}
                            >
                                <LocationOutline />
                                <Text 
                                    style={{
                                        color: '#0B3472',
                                        fontFamily: 'Montserrat_400Regular',
                                        fontSize: 12,
                                    }}>
                                    Localização
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                )
            }
           
        </MotiView>
    )
}