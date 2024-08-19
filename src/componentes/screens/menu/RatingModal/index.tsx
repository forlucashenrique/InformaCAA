import { KeyboardAvoidingView, Modal, Pressable, Text, TextInput, View } from "react-native";
import { RatingModalStyles } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import StarOutline from "@/componentes/icons/Outline/StarOutline";
import RatingStar from "@/componentes/icons/Outline/RatingStar";
import RatingStarFilled from "@/componentes/icons/Filled/RatingStarFilled";
import { Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type RatingModalProps = {
    visible: boolean
    onClose: () => void
}

type MealOptions = {
    label: string
    value: string
}


const selectedTopRadiusStyle = {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
}

const selectedBottomRadiusStyle = {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
}

const ratingValues = [1, 2, 3, 4, 5]


export default function RatingModal ({visible, onClose}: RatingModalProps) {
    const [mealOptions, setMealOptions] = useState<MealOptions[]>([{label: 'Almoço', value: 'lunch'}, {label: 'Jantar', value: 'dinner'}])
    const [selectedMeal, setSelectedMeal] = useState<MealOptions>({label: '', value: ''})
    const [teamRating, setTeamRating] = useState(1)  
    const [presentationRating, setPresentationRating] = useState(1)
    const [temperatureRating, setTemperatureRating] = useState(1)
    const [tasteRating, setTasteRating] = useState(1)
    const [cleanlinessRating, setCleanlinessRating] = useState(1)

    

    function renderTeamStars() {
        return ratingValues.map((value, index) => (
            teamRating < index + 1 ? (
                <RatingStar 
                    key={index}
                    onPress={() =>  setTeamRating(index + 1)} 
                />  
            ) : (
                <RatingStarFilled 
                    key={index}
                    onPress={() => setTeamRating(index + 1)}
                />
            )  
        ))
    }

    function renderPresentationStars() {
        return ratingValues.map((value, index) => (
            presentationRating < index + 1 ? (
                <RatingStar 
                    key={index}
                    onPress={() =>  setPresentationRating(index + 1)} 
                />  
            ) : (
                <RatingStarFilled 
                    key={index}
                    onPress={() => setPresentationRating(index + 1)}
                />
            )  
        ))
    }

    function renderTemperatureStars() {
        return ratingValues.map((value, index) => (
            temperatureRating < index + 1 ? (
                <RatingStar 
                    key={index}
                    onPress={() =>  setTemperatureRating(index + 1)} 
                />  
            ) : (
                <RatingStarFilled 
                    key={index}
                    onPress={() => setTemperatureRating(index + 1)}
                />
            )  
        ))
    }

    function renderTasteStars() {
        return ratingValues.map((value, index) => (
            tasteRating < index + 1 ? (
                <RatingStar 
                    key={index}
                    onPress={() =>  setTasteRating(index + 1)} 
                />  
            ) : (
                <RatingStarFilled 
                    key={index}
                    onPress={() => setTasteRating(index + 1)}
                />
            )  
        ))
    }

    function renderCleanlinessStars() {
        return ratingValues.map((value, index) => (
            cleanlinessRating < index + 1 ? (
                <RatingStar 
                    key={index}
                    onPress={() =>  setCleanlinessRating(index + 1)} 
                />  
            ) : (
                <RatingStarFilled 
                    key={index}
                    onPress={() => setCleanlinessRating(index + 1)}
                />
            )
        ))
    }



    return (
        <Modal
            animationType="slide"
            visible={visible}
            transparent={true}
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView 
                style={RatingModalStyles.modalContainer}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                //keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 100}    
            >   
                <View style={RatingModalStyles.headerContainer}>
                            <AntDesign 
                                onPress={onClose}
                                name="arrowleft" 
                                size={24} 
                                color="white" 
                                style={{
                                    position: 'absolute',
                                    left: 20,
                                    top: 15,
                                }}
                            />
                            <Text style={RatingModalStyles.headerTitle}>Questionário</Text>
                        </View>
                <ScrollView 
                    style={{
                        flex: 1,
                    }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyboardShouldPersistTaps="always"
                >
                    
                    <View style={RatingModalStyles.contentContainer}>   
                        <View
                            style={RatingModalStyles.mealSelectContainer}
                        >
                            <Text style={RatingModalStyles.selectLabelText}>Qual a refeição? </Text>
                            <Dropdown 
                                style={RatingModalStyles.selectContainer}
                                containerStyle={RatingModalStyles.itemsSelectContainer}
                                itemContainerStyle={selectedMeal.value === 'dinner' ? selectedBottomRadiusStyle : selectedTopRadiusStyle  }
                                placeholderStyle={RatingModalStyles.placeholderSelect}
                                placeholder="Escolha..."
                                data={mealOptions}
                                labelField='label'
                                valueField='value'
                                onChange={(value) => {
                                    setSelectedMeal(value)
                                }}
                                activeColor="#0B3472"
                                closeModalWhenSelectedItem={true}
                                renderItem={(item, index)  => {
                                    return (
                                        <Text style={[
                                            RatingModalStyles.itemSelect, 
                                            {
                                                color: index ? 'white' : 'black', 
                                            },

                                        ]}>{item.label}</Text>
                                    )
                                }}
                                
                            />
                        </View>

                        <View style={RatingModalStyles.ratingContainer}>
                            <View style={RatingModalStyles.ratingItemContainer}>
                                <Text style={RatingModalStyles.ratingTitleText}>Cordialidade da equipe</Text>
                                <View style={RatingModalStyles.starsContainer}>
                                    {renderTeamStars()}
                                </View>
                            </View>

                            <View style={RatingModalStyles.ratingItemContainer}>
                                <Text style={RatingModalStyles.ratingTitleText}>Apresentação dos pratos</Text>
                                <View style={RatingModalStyles.starsContainer}>
                                    {renderPresentationStars()}
                                </View>
                            </View>

                            <View style={RatingModalStyles.ratingItemContainer}>
                                <Text style={RatingModalStyles.ratingTitleText}>Temperatura dos alimentos</Text>
                                <View style={RatingModalStyles.starsContainer}>
                                    {renderTemperatureStars()}
                                </View>
                            </View>

                            <View style={RatingModalStyles.ratingItemContainer}>
                                <Text style={RatingModalStyles.ratingTitleText}>Sabor/Tempero</Text>
                                <View style={RatingModalStyles.starsContainer}>
                                    {renderTasteStars()}
                                </View>
                            </View>

                            <View style={RatingModalStyles.ratingItemContainer}>
                                <Text style={RatingModalStyles.ratingTitleText}>Limpeza/Higiene</Text>
                                <View style={RatingModalStyles.starsContainer}>
                                    {renderCleanlinessStars()}
                                </View>
                            </View>
                        </View>

                        <View>
                            <Text style={RatingModalStyles.commentText}>Tem algum comentário adicional?</Text>

                            <TextInput 
                                multiline
                                numberOfLines={10}
                                placeholder="Escreva aqui..."
                                style={RatingModalStyles.commentInput}
                                textAlignVertical="top"
                            />
                            
                        </View>

                        <Pressable 
                            onPress={onClose}
                            style={RatingModalStyles.sendButton}
                        >
                            <Text style={RatingModalStyles.buttonText}>Enviar</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            
            </KeyboardAvoidingView>
        </Modal>
    )
}