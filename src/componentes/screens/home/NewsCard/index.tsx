import { Text, View } from "react-native";
import { NewsCardStyles } from "./styles";


type NewsCardProps = {
    title: string;
    date: string;
}

export default function NewsCard ({ title, date }: NewsCardProps) {
    return (
        <View style={NewsCardStyles.container}>
            <Text style={NewsCardStyles.newsTitle}>{title}</Text>

            <View style={NewsCardStyles.footer}>
                <Text style={NewsCardStyles.footerLeftText}>Saiba mais.</Text>
                <Text style={NewsCardStyles.footerRightText}>{date}</Text>
            </View>
        </View>
    )
}