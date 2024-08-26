import NewsDetails from "@/componentes/screens/home/NewsDetails";
import { ScrollView } from "react-native";

export default function NewsDetailsScreen() {
    return (
        <ScrollView 
            style={{
                flex: 1,
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        > 
            <NewsDetails />
        </ScrollView>
    )
}