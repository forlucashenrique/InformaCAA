import { Pressable, Text, View } from "react-native";
import { NewsCardStyles } from "./styles";
import { Link, useRouter } from "expo-router";


type NewsCardProps = {
    title: string;
    date: string;
    idNews: string;
}


export default function NewsCard ({ title, date, idNews }: NewsCardProps) {

    const router = useRouter();

    return (
        <Link 
            asChild
            href={{
                pathname: '/[id]',
                params: {
                    id: idNews,
                    title: title,
                    imgPath: ''
                }
            }}
        >
            <Pressable onPress={() => router.navigate(`/${idNews}`)}>
                <View style={NewsCardStyles.container} >
                    <Text style={NewsCardStyles.newsTitle}>{title}</Text>

                    <View style={NewsCardStyles.footer}>
                        <Text style={NewsCardStyles.footerLeftText}>Saiba mais.</Text>
                        <Text style={NewsCardStyles.footerRightText}>{date}</Text>
                    </View>
                </View>
            </Pressable>

        </Link>
        
       
    )
}