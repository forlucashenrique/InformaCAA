import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { StyleSheet, Dimensions } from 'react-native';



function clamp(val: number, min: number, max: number) {
    return Math.min(Math.max(val, min), max);
  }
  
 // const { width, height } = Dimensions.get('window');

type RouteViewProps = {
    widthView: number;
    heightWiew: number;

}

export default function RouteViewUFPE ({widthView, heightWiew} : RouteViewProps) {



    const translationX = useSharedValue(0);
    const translationY = useSharedValue(0);
    const prevTranslationX = useSharedValue(0);
    const prevTranslationY = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
          { translateX: translationX.value },
          { translateY: translationY.value },
        ],
      }));
    

      
    const pan = Gesture.Pan()
      .minDistance(1)
      .onStart(() => {
        
        prevTranslationX.value = translationX.value;
        prevTranslationY.value = translationY.value;
      })
      .onUpdate((event) => {
        const maxTranslateX = widthView / 2 - 50;
        const maxTranslateY = heightWiew / 2 - 50;
  
        translationX.value = clamp(
          prevTranslationX.value + event.translationX,
          -maxTranslateX,
          maxTranslateX
        );
        translationY.value = clamp(
          prevTranslationY.value + event.translationY,
          -maxTranslateY,
          maxTranslateY
        );
      })
      .runOnJS(true);

    return (
        <GestureDetector gesture={pan}>
            {/* <Animated.View style={[animatedStyles, styles.box]}></Animated.View> */}
            <Animated.Image 
                    source={require("@/assets/screens/busHours/from-ufpe-to-center.png")}
                    style={[animatedStyles, styles.image]}
                    resizeMode='contain'
                />
            
        </GestureDetector>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 1000,
      height: 700,
      borderRadius: 20,
    },
  });
  