import { Text, useWindowDimensions, View } from "react-native";
import { NewsDetailsStyles } from "./styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import api from "@/service";
import RenderHTML from "react-native-render-html";
import HTMLView from "react-native-htmlview";
import { Image } from "expo-image";


type Content = {
    html: string;
}

export default function NewsDetails() {
    const { width } = useWindowDimensions();
    const { id } = useLocalSearchParams();
    const [newsContent, setNewsContent] = useState<Content>({} as Content);
    const [isLoading, setIsLoading] = useState(true);

    console.log(id)
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
            return (
                <Image source={{ uri: a.src }} style={{ width: width - 20, height: 200 }} />
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
                   
                    // (
                    //     <View style={{
                    //         flex: 1
                    //     }}>
                    //         <Text>{newsContent}</Text>
                    //     </View>
                    // )

            }
            
        </View>
    )
}