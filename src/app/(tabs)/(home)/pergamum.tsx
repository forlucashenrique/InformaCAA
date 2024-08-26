
import CustomWebView from "@/componentes/screens/drawer/sigaa/CustomWebView";


export default function PergamumScreen () {
    return (
        <CustomWebView 
            source={{ uri: "https://biblioteca.ufpe.br/login?redirect=/meupergamum"}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            scalesPageToFit={true}
        />
    )
}
