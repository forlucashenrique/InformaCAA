import { Modal, Pressable, Text, View } from "react-native"
import { DinnerModalStyles } from "./styles"
import XOutline from "@/componentes/icons/Outline/XOutline"
import { Shadow } from "react-native-shadow-2"

type DinnerModalProps = {
    visible: boolean
    close: () => void,
    menuItems?: string[]
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
                    {menuItems && menuItems.length > 0 &&  menuItems.map((item, index) => (
                            <Text 
                                key={index} 
                                style={[
                                    DinnerModalStyles.menuItem, 
                                    {
                                    // backgroundColor: index % 2 === 0 ? '#002153c1' : '#DFEFFF',
                                        // color: index % 2 === 0 ? '#fff' : '#0B3472'
                                    
                                    }
                                ]}>
                                    {item}
                            </Text>
                    ) )}
                    </View>     
                </View>
            </Shadow>
            
        </Pressable>
    </Modal>
    )
}