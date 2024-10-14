import XOutline from "@/componentes/icons/Outline/XOutline";
import { Modal, Pressable, Text, View } from "react-native";
import { LunchModalStyles } from "./styles";
import { Shadow } from "react-native-shadow-2";
import { Ingredients } from "..";

type LunchModalProps = {
    visible: boolean
    close: () => void,
    menuItems?: Ingredients
}

export function LunchModal({
    visible,
    close,
    menuItems   
}: LunchModalProps) {

    return (
        <Modal
            animationType="slide"
            visible={visible}
            transparent={true}
            onRequestClose={close}
        >
            <Pressable 
                style={LunchModalStyles.shadowContainer}
                onPress={close}
            >
                <Shadow 
                    distance={5}
                    startColor="#00000029"
                    offset={[0, 4]}
                >
                    <View style={LunchModalStyles.modalContainer}>
                        <View style={LunchModalStyles.headerContainer}>
                            <Text style={LunchModalStyles.lunchTitle}>Almoço</Text>
                            <Pressable
                                style={{
                                    width: 35,
                                    height: 35,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onPress={close}
                            >
                            <XOutline/>
                        </Pressable>
                        </View>          

                        <View style={LunchModalStyles.menuItemContainer}>
                            {menuItems && Object.keys(menuItems).filter((key, index) => {
                                return Object.keys(menuItems).length - 1 !== index 
                            }).map((key, index) => (

                            <View
                                style={LunchModalStyles.containerItem}
                                key={index} 
                            >
                                <Text 
                                    
                                    style={[
                                        LunchModalStyles.menuItem, 
                                        {
                                            color: '#0B3472',
                                            fontFamily: 'Montserrat_700Bold',
                                        }
                                    ]}>

                                    {key}
                                </Text>
                                <Text
                                    style={{
                                        color: '#0B3472',
                                        fontFamily: 'Montserrat_400Regular',
                                        fontSize: 12,
                                    }}
                                >
                                    {
                                        menuItems[key] ? 
                                            menuItems[key] : '-'
                                    }
                                </Text>
                            </View>
                        
                        ))}
                       <Text 
                             style={[
                                LunchModalStyles.menuItem, 
                                {
                                    color: '#0B3472',
                                    fontFamily: 'Montserrat_700Bold',
                                }
                            ]}>*Cardápio sujeito a alterações
                        </Text>
                        </View>     
                    </View>
                </Shadow>
                
            </Pressable>
        </Modal>
    )
}