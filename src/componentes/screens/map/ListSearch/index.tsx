import { Modal, Pressable, Text, View } from "react-native";
import {View as MotiView} from 'moti';
import { ListSearchStyles } from "./styles";

type ListSearchProps = {
    visible: boolean;
    onClose: () => void;
}

export default function ListSearch({onClose, visible}: ListSearchProps) {
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
                    style={ListSearchStyles.container}
                >
                    <Pressable 
                        style={ListSearchStyles.closeButton}
                        onPress={onClose}
                    />
                </MotiView>
            </MotiView>
           
        </Modal>
        
    )
}