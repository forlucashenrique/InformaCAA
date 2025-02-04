import { Modal, Pressable, Text, View } from "react-native"
import { DinnerModalStyles } from "./styles"
import XOutline from "@/componentes/icons/Outline/XOutline"
import { Shadow } from "react-native-shadow-2"
import { Ingredients } from ".."

type DinnerModalProps = {
    visible: boolean
    close: () => void,
    menuItems?: Ingredients
}


export default function DinnerModal ({visible, close, menuItems}: DinnerModalProps) {
    return (
    <Modal
        animationType="slide"
        visible={visible}
        transparent={true}
        onRequestClose={close}
    >
        <Pressable 
            style={DinnerModalStyles.shadowContainer}
            onPress={close}
        >
            <Shadow
                distance={5}
                startColor="#00000029"
                offset={[0, 4]}
            >
                <View style={DinnerModalStyles.modalContainer}>
                    <View style={DinnerModalStyles.headerContainer}>
                        <Text style={DinnerModalStyles.dinnerTitle}>Jantar</Text>
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

                    <View style={DinnerModalStyles.menuItemContainer}>

                    {menuItems && Object.keys(menuItems).filter((key, index) => {
                        return Object.keys(menuItems).length - 1 !== index 
                    }).map((key, index) => (

                        <View
                            style={[DinnerModalStyles.containerItem, ]}
                            key={index}
                        >
                            <Text 
                                key={index} 
                                style={[
                                    DinnerModalStyles.menuItem, 
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
                                DinnerModalStyles.menuItem, 
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