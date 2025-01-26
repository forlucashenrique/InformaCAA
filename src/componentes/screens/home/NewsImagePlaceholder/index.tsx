import { Image } from "expo-image";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { NewsImagePlaceholderStyle } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

type NewsImagePlaceholderProps = {
    title: string;
    idNews: string;
    imgPath: string;

}

export default function NewsImagePlaceholder ({ title, idNews, imgPath }: NewsImagePlaceholderProps) {

    return (

        <Link
            asChild
            href={{
                pathname: '/[id]',
                params: { id: idNews, imgPath: imgPath, title: title }
              }}
        >
            <TouchableOpacity style={{
                width: '100%',
                height: 180,
                marginTop: 20,
                marginBottom: 30,
                borderRadius: 12,
                overflow: 'hidden',
                justifyContent: 'flex-end',
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
            }}>
            <Image
                style={NewsImagePlaceholderStyle.img}
                // source={image}
                // onError={handleError}
                source={require('@/assets/screens/news/placeholder-news.png')}
            />
            
            {/* <LinearGradient
                colors={['transparent', '#0B3472', ]}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 200,
                }}                        >
                            
            </LinearGradient> */}

            <Text style={{
                padding: 10,
                color: 'white',
                fontFamily: 'Montserrat_700Bold',
                fontSize: 14,
            }}>{
                title}
            </Text>
           
           
        </TouchableOpacity>
        </Link>
        
    )
}