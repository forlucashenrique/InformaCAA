import { Pressable, Text, View } from "react-native";
import { NewsCardStyles } from "./styles";
import { useRouter } from "expo-router";


type NewsCardProps = {
    title: string;
    date: string;
    idNews: number;
}


export default function NewsCard ({ title, date, idNews }: NewsCardProps) {

    const router = useRouter();

    return (
        <Pressable onPress={() => router.navigate(`/${idNews}`)}>
             <View style={NewsCardStyles.container} >
                <Text style={NewsCardStyles.newsTitle}>{title}</Text>

                <View style={NewsCardStyles.footer}>
                    <Text style={NewsCardStyles.footerLeftText}>Saiba mais.</Text>
                    <Text style={NewsCardStyles.footerRightText}>{date}</Text>
                </View>
            </View>
        </Pressable>
       
    )
}