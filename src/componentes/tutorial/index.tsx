import {
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
   
    Pressable,
} from 'react-native';

import PagerView, {
    PagerViewOnPageScrollEventData,
} from 'react-native-pager-view';

import AntDesign from '@expo/vector-icons/AntDesign';

import {
    ScalingDot,
} from 'react-native-animated-pagination-dots';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Shadow } from 'react-native-shadow-2';

type TutorialScreensProps = {
    onFinish: () => void;
}

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const INTRO_DATA = [
    {
      key: '1',
      title: 'App showcase ✨',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      key: '2',
      title: 'Introduction screen 🎉',
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
    },
    {
      key: '3',
      title: 'And can be anything 🎈',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
    },
    {
      key: '4',
      title: 'And can be anything 🎈',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
    },
];



export default function TutorialScreens({onFinish}: TutorialScreensProps) {

    const width = Dimensions.get('window').width;
    const ref = useRef<PagerView>(null);
    const scrollOffsetAnimatedValue = useRef(new Animated.Value(0)).current;
    const positionAnimatedValue = useRef(new Animated.Value(0)).current;

    const fadeIn = useRef(new Animated.Value(0)).current;

 

    const inputRange = [0, INTRO_DATA.length];
    const scrollX = Animated.add(
        scrollOffsetAnimatedValue,
        positionAnimatedValue
    ).interpolate({
        inputRange,
        outputRange: [0, INTRO_DATA.length * width],
    });

  

    const onPageScroll = useMemo(
        () =>
          Animated.event<PagerViewOnPageScrollEventData>(
            
            [
              {
                nativeEvent: {
                  offset: scrollOffsetAnimatedValue,
                  position: positionAnimatedValue,
                },
              },
            ],
            {
              useNativeDriver: false,
            }
          ),

        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      );

      const onNextPage = () => {
       
      } 

      const [currentPage, setCurrentPage] = useState<number>(0);
      const pagerRef = useRef<PagerView>(null);
    
      const [totalPages, setTotalPages] = useState<number>(3) ; // Total de páginas do tutorial
    
      const handleNextPage = () => {
        //@ts-ignore
        const nextPage = currentPage + 1;
        const tempTotalPages = totalPages
        const tempCurrentPage = currentPage

        if (pagerRef.current && tempCurrentPage < tempTotalPages) {
          pagerRef.current.setPage(nextPage);
          setCurrentPage(nextPage);
          fadeIn.setValue(0);


          Animated.timing(fadeIn, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }).start();


        } 
      };

      useEffect(() => {
        Animated.timing(fadeIn, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();

      }, [fadeIn])
    
      const handleSkipTutorial = () => {
        onFinish();
      };
    
     

    return (
        <View style={{
            flex: 1,
        }}>
            <AnimatedPagerView 
              style={{
                flex: 1,
              }} 
              initialPage={0} 
              ref={pagerRef}
              onPageScroll={onPageScroll}  
              onPageSelected={({nativeEvent}) => {
                setCurrentPage(nativeEvent.position)
              }}
            >
              {
                INTRO_DATA.map(({key, title, description}) => (
                    <Animated.View key={key} style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20,
                        opacity: fadeIn,
                    }}>
                        <Text style={{
                            fontSize: 30,
                        }}>{`Page Index: ${key}`}</Text>
                        <Text>{title}</Text>
                        <Text>{description}</Text>
                    </Animated.View>
                ))
              }
            </AnimatedPagerView>
            <View style={styles.dotContainer}>
                <ScalingDot
                  testID={'scaling-dot'}
                  data={INTRO_DATA}
                  //@ts-ignore
                  scrollX={scrollX}
                  containerStyle={{
                    top: 30,
                  }}
                  // inActiveDotOpacity={0.4}
                  activeDotColor='#0B3472'
                  inActiveDotColor='#fff'
                  dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 20,
                    borderColor: '#0B3472',
                    borderWidth: 1.5,
                  }}
                />
            </View>
            <View style={styles.buttonContainer}>
              <Pressable onPress={handleSkipTutorial}>
                <Text style={styles.skipTextButton}>Pular tutorial</Text>
              </Pressable>
              <Shadow offset={[0, 4]} distance={4}>
                <Pressable onPress={handleNextPage} style={styles.nextButton}>
                  <AntDesign name="arrowright" size={24} color="white" />
                </Pressable>
              </Shadow>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    dotContainer: {
      width: '100%',
      paddingVertical: 30,
      justifyContent: 'center',
      alignSelf: 'center',
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 20,
      width: '100%',
    },

    skipTextButton: {
      color: '#0B3472',
      fontSize: 16,
      fontFamily: 'Montserrat_400Regular',
    },

    nextButton: {
      width: 45,
      height: 45,
      borderRadius: 25,
      backgroundColor: '#0B3472',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });