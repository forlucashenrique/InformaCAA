import { Text, useWindowDimensions, View } from "react-native";
import { NewsDetailsStyles } from "./styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import api from "@/service";

import HTMLView from "react-native-htmlview";

import WebView from "react-native-webview";


type Content = {
    html: string;
}

export default function NewsDetails() {
    const { width } = useWindowDimensions();
    const { id } = useLocalSearchParams();
    const [newsContent, setNewsContent] = useState<Content>({} as Content);
    const [isLoading, setIsLoading] = useState(true);

    async function getNewsContent() {
        try {
            const response = await api.get(`/noticias/${id}`);
            const data = response.data;
            console.log(data)

            setNewsContent(data);
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false);
        }
    }


    function renderNodeImage(node: any, index: any, siblings: any, parent: any,  defaultRenderer: any) {
        if (node.name === 'img') {
            const a = node.attribs;
            const img = `<img src="${a.src}" width="100%" height="500"></img>`;
            return (
                <WebView key={index} source={{ html: img}} style={{ width: width - 20, height: 500 }} />
            )
        }
    }

    useEffect(() => {
        getNewsContent();
    }, [])


    return (
        <View style={NewsDetailsStyles.container}>
            {
            isLoading ?
                <Text>Carregando...</Text>
                :
                (
                    <View style={{
                        flex: 1,
                        padding: 10,
                    }}> 
                        <HTMLView
                            value={newsContent.html}
                            stylesheet={{
                                p: {
                                    textAlign: 'justify',
                                }
                            }}
                            renderNode={renderNodeImage}
                        />
                    </View>
                )
            }
            
        </View>
    )
}