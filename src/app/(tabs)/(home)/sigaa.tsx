
import CustomWebView from "@/componentes/screens/drawer/sigaa/CustomWebView";


export default function SigaaScreen () {
    return (
        <CustomWebView 
            source={{ uri: "https://sigaa.ufpe.br/sigaa/mobile/touch/login.jsf"}}
        />
    )
}
