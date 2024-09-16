import XOutline from "@/componentes/icons/Outline/XOutline";
import { Modal, Pressable, Text, View } from "react-native";
import { LunchModalStyles } from "./styles";

type LunchModalProps = {
    visible: boolean
    close: () => void,
    menuItems?: string[]
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
                       {menuItems && menuItems.length > 0 &&  menuItems.map((item, index) => (
                            <Text key={index} style={[
                                LunchModalStyles.menuItem, 
                                {
                                    //backgroundColor: index % 2 === 0 ? '#002153c1' : '#DFEFFF',
                                    //color: index % 2 === 0 ? '#fff' : '#0B3472'
                                }
                            ]}>{item}</Text>
                       ) )}
                    </View>     
                </View>
            </Pressable>
        </Modal>
    )
}