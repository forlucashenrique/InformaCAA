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

import { AnimatePresence, View as MotiView } from 'moti';


function IconViewAnimated({children, translateX, x, duration}: {children: React.ReactNode, translateX: number, x?: number, duration?: number}) {
    return (
        <MotiView 
            from={{
                opacity: 0,
                translateX: x || 0,
                
            }}
            animate={{
                opacity: 1,
                translateX: 0,
            }}
            exit={{
                opacity: 0,
                translateX: translateX,
            }}

            transition={{
                type: 'timing',
                
            }}
        >
            {children}
        </MotiView>
    )
}


export default function BusHours() {
    const [leftText, setLeftText] = useState('UFPE');
    const [rightText, setRightText] = useState('CENTRO');
    const [isHourPressed, setIsHourPressed] = useState(true);
    
    const [visibileFillIcon, setVisibleFillIcon] = useState(true);
    const [visibleOutlineIcon, setVisibleOutlineIcon] = useState(true);
    const [visibleArrow, setVisibleArrow] = useState(true);
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
                <AnimatePresence exitBeforeEnter>
                    <View style={BusHoursStyles.fromTo}>
                        <MotiView 
                            style={BusHoursStyles.fromToIconContainer}
                        
                        >
                            {visibileFillIcon && (
                                <IconViewAnimated x={visibileFillIcon ? 100 : 0} translateX={visibileFillIcon ? 100 : -100} key='ufpe'>
                                    <DegreeFill />
                                </IconViewAnimated>
                            )}
                            {!visibileFillIcon && (
                                <IconViewAnimated 
                                    x={!visibileFillIcon ? 100 : 0} 
                                    translateX={!visibileFillIcon ? 100 : 0} key='center'
                            
                                >
                                    <BuildingFill />
                                </IconViewAnimated>
                            )}
                            <Text style={BusHoursStyles.textIcon}>{leftText}</Text>
                            
                        </MotiView>
                        {visibleArrow && (
                            <MotiView
                                from={{
                                    opacity: 0,
                            
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                            >
                                <ArrowRight />
                            </MotiView>
                        )}
                        {!visibleArrow && (
                            <MotiView
                                from={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    type: 'timing',
                                }}
                            >
                                <ArrowRight />
                            </MotiView>
                        )}

                        <MotiView 
                            style={BusHoursStyles.fromToIconContainer}
                        >
                            {visibleOutlineIcon &&  (
                                <IconViewAnimated x={visibleOutlineIcon ? -100 : 0} translateX={visibleOutlineIcon ? -100 : 100} key='ufpe2'>
                                    <BuildingOutline />
                                </IconViewAnimated>
                            )}
                            {!visibleOutlineIcon && (
                                <IconViewAnimated x={!visibleOutlineIcon ? -100 : 0} translateX={!visibleOutlineIcon ? 100 : -100} key='center2'>
                                    <DegreeOutline />
                                </IconViewAnimated>
                            )}
                            <Text style={BusHoursStyles.textIcon}>{rightText}</Text>
                        </MotiView>
                    </View>
                </AnimatePresence>

                <View style={{
                    width: '100%',
                    alignItems: 'center',
                }}>
                    <Pressable style={BusHoursStyles.changeDirectionButton} onPress={() => {
                        changeDirection();
                        setVisibleFillIcon(!visibileFillIcon);
                        setVisibleOutlineIcon(!visibleOutlineIcon);
                        setVisibleArrow(!visibleArrow);
                    }}>
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