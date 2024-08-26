import { Modal, Text, View } from "react-native"
import { DinnerModalStyles } from "./styles"
import XOutline from "@/componentes/icons/Outline/XOutline"

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
        <View style={DinnerModalStyles.shadowContainer}>
            <View style={DinnerModalStyles.modalContainer}>
                <View style={DinnerModalStyles.headerContainer}>
                    <Text style={DinnerModalStyles.dinnerTitle}>Jantar</Text>
                    <XOutline onPress={close}/>
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
        </View>
    </Modal>
    )
}