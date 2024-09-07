import { Pressable, Text, View } from "react-native";
import { BusHoursStyles } from "./styles";
import { useState } from "react";
import DegreeFill from "@/componentes/icons/Filled/DegreeFill";
import ArrowRight from "@/componentes/icons/Filled/ArrowRight";
import BuildingOutline from "@/componentes/icons/Outline/BuildingOutline";
import BuildingFill from "@/componentes/icons/Filled/BuildingFill";
import DegreeOutline from "@/componentes/icons/Outline/DegreeOutline";
import { hours } from "@/data/busHours";
import {ListHours} from "./ListHours";

import {RouteViewCENTER} from "./RouteViewCENTER";
import {RouteViewUFPE} from "./RouteViewUFPE";

export default function BusHours() {
    const [leftText, setLeftText] = useState('UFPE');
    const [rightText, setRightText] = useState('CENTRO');
    const [isHourPressed, setIsHourPressed] = useState(true);
    

    const [widthView, setWidthView] = useState(0);
    const [heightWiew, setHeightWiew] = useState(0);


    function changeDirection() {
        if (leftText === 'UFPE') {
            setLeftText('CENTRO');
            setRightText('UFPE');
        } else {
            setLeftText('UFPE');
            setRightText('CENTRO');
        }
    }

    return (
        <View style={BusHoursStyles.container}>
            <View style={BusHoursStyles.fromToContainer}>
                <View style={BusHoursStyles.fromToTextContainer}>
                    <Text style={BusHoursStyles.fromToText}>
                        Sentido: 
                    </Text>
                    <Text style={[BusHoursStyles.fromToText, { fontFamily: 'Montserrat_400Regular'}]}>
                        {`${leftText} / ${rightText}`}
                    </Text>
                </View>

                <View style={BusHoursStyles.fromTo}>
                    <View style={BusHoursStyles.fromToIconContainer}>
                        { leftText === 'UFPE' && <DegreeFill /> }
                        { leftText === 'CENTRO' && <BuildingFill /> }
                        <Text style={BusHoursStyles.textIcon}>{leftText}</Text>
                    </View>
                    <ArrowRight />

                    <View style={BusHoursStyles.fromToIconContainer}>
                        {rightText === 'CENTRO' &&  <BuildingOutline />}
                        {rightText === 'UFPE' && <DegreeOutline />}

                        <Text style={BusHoursStyles.textIcon}>{rightText}</Text>
                    </View>
                </View>

                <View style={{
                    width: '100%',
                    alignItems: 'center',
                }}>
                    <Pressable style={BusHoursStyles.changeDirectionButton} onPress={changeDirection}>
                        <Text style={BusHoursStyles.changeDirectionButtonText}>Mudar sentido</Text>
                    </Pressable>
                </View>

                <View style={BusHoursStyles.hourButtonContainer}>
                    <Pressable 
                        onPress={() => setIsHourPressed(true)}
                        style={[BusHoursStyles.hourRouteButton, {
                            backgroundColor: isHourPressed ? '#0B3472' : '#fff',
                        }]} 
                    >
                        <Text style={[BusHoursStyles.hourRouteButtonText, {
                            color: isHourPressed ? '#fff' : '#0B3472',
                        }]}>Horários</Text>
                    </Pressable>

                    <Pressable 
                        onPress={() => setIsHourPressed(false)} 
                        style={[BusHoursStyles.hourRouteButton, {
                            backgroundColor: !isHourPressed ? '#0B3472'  : '#fff'
                        }]}
                    >
                        <Text 
                            style={[BusHoursStyles.hourRouteButtonText, {
                                color: !isHourPressed ? '#fff' : '#0B3472',
                            }]}
                        >
                            Rota
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View style={{
                flex: 1,
                marginTop: 20,
            }}>
                {
                    isHourPressed ?  
                        <ListHours hours={leftText === 'UFPE' ? hours['campus'] : hours['center']}/>  : (
                            <View style={{
                                borderWidth: 0.5,
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                borderRadius: 10,
                            }}
                                onLayout={(event) => {
                                    const layout = event.nativeEvent.layout;
                                    setWidthView(layout.width);
                                    setHeightWiew(layout.height);
                                }}
                            >
                                { leftText === 'UFPE' ? 
                                    <RouteViewUFPE
                                        widthView={widthView} 
                                        heightWiew={heightWiew}
                                        
                                    /> : 
                                    <RouteViewCENTER 
                                        widthView={widthView} 
                                        heightWiew={heightWiew}
                                      
                                    />
                                }
                            </View>
                        )
                      
                }
              
            </View>
        </View>
    )
}