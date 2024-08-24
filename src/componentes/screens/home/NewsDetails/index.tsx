import { ActivityIndicator, Text, useWindowDimensions, View } from "react-native";
import { NewsDetailsStyles } from "./styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import api from "@/service";

import HTMLView from "react-native-htmlview";

import WebView from "react-native-webview";
import { Image } from "expo-image";


type Content = {
    html: string;
}

export default function NewsDetails() {
    const { width } = useWindowDimensions();
    const { id, title, imgPath } = useLocalSearchParams();


    const [newsContent, setNewsContent] = useState<Content>({} as Content);
    const [isLoading, setIsLoading] = useState(true);

    async function getNewsContent() {
        try {
            const response = await api.get(`/noticias/${id}`);
            const data = response.data;
            setNewsContent(data);
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false);
        }
    }


    function renderNodeImage(node: any, index: any, siblings: any, parent: any,  defaultRenderer: any) {
        if (node.name === 'img') {

            return null
            // const img = node.attribs;

            // const urlSplited = img.src.split('/documents');
    
            // const preUrl = 'http://www.ufpe.br'

            // const url = `${preUrl}/documents${urlSplited[1]}`

            // return (
            //     <View 
            //         key={index} 
            //         style={{
            //             width: '100%',
            //             height: 200,
            //             marginRight: 10,
            //             borderRadius: 10,
            //             overflow: 'hidden',
            //             marginBottom: 10,
            //             borderWidth: 0.4
            //         }}
            //     >
            //         <Image 
            //             source={url} 
            //             style={{
            //                 width: width - 20,
            //                 height: '100%',
            //                 marginBottom: 50,
            //             }}
            //             contentFit="cover"
            //         />
            //     </View>
                
            // )
        }
    }

    useEffect(() => {
        getNewsContent();
    }, [])


    return (
        <View style={NewsDetailsStyles.container}>
            {
            isLoading ?
                <View style={{
                    width: '100%',
                    marginTop: 20,
                }}>
                    <ActivityIndicator size="large" color="#0B3472" />
                </View>
                :
                (
                    <View style={{
                        flex: 1,
                        padding: 20,
                    }}> 

                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'Montserrat_700Bold',
                            color: '#000',
                            marginBottom: 15,
                            
                        }}>
                            {title}
                        </Text>
                        <View 
                            style={{
                                width: '100%',
                                height: 200,
                                marginRight: 10,
                                borderRadius: 10,
                                overflow: 'hidden',
                                marginBottom: 10,
                                borderWidth: 0.4
                            }}
                        >   
                            <Image 
                                source={`http://www.ufpe.br/${imgPath}`}
                                style={{
                                    width: width - 20,
                                    height: '100%',
                                    marginBottom: 50,
                                }}
                                contentFit="cover"
                            />
                        </View>
                        <HTMLView
                            value={newsContent.html}
                            stylesheet={{
                                p: {
                                    fontFamily: 'Montserrat_400Regular',
                                    fontSize: 12,
                                    color: "#000",
                                    letterSpacing: 0.5,
                                    lineHeight: 20,
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