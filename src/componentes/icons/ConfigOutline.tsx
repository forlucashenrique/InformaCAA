
import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

export default function ConfigOutline (props: SvgProps) {
    return (
        <Svg    
            width={22}
            height={22}
            fill="none"
            {...props}
        >
            <G stroke="#000" strokeWidth={2} clipPath="url(#a)">
            <Path d="M12.833 2.997c0-.643-.52-1.164-1.163-1.164h-1.34c-.643 0-1.163.521-1.163 1.164 0 .53-.363.984-.857 1.178a8.8 8.8 0 0 0-.232.098c-.487.21-1.066.146-1.441-.229a1.163 1.163 0 0 0-1.645 0l-.948.948a1.163 1.163 0 0 0 0 1.645c.376.376.44.953.228 1.44a7.246 7.246 0 0 0-.097.233c-.194.494-.649.857-1.178.857-.643 0-1.164.52-1.164 1.163v1.34c0 .643.521 1.163 1.164 1.163.53 0 .984.363 1.178.857l.097.232c.211.487.147 1.066-.228 1.441a1.163 1.163 0 0 0 0 1.645l.948.948a1.164 1.164 0 0 0 1.645 0c.375-.376.953-.44 1.44-.229.077.034.155.066.233.098.494.194.857.649.857 1.178 0 .643.52 1.164 1.163 1.164h1.34c.643 0 1.163-.521 1.163-1.164 0-.53.363-.984.857-1.18.078-.03.156-.062.232-.095.487-.212 1.066-.147 1.44.228a1.165 1.165 0 0 0 1.646 0l.948-.948a1.163 1.163 0 0 0 0-1.645c-.376-.375-.44-.953-.229-1.44.034-.077.066-.155.098-.233.194-.494.649-.857 1.178-.857.643 0 1.164-.52 1.164-1.163v-1.34c0-.642-.521-1.162-1.164-1.162-.53 0-.984-.363-1.18-.857a7.18 7.18 0 0 0-.096-.232c-.21-.487-.146-1.066.229-1.441a1.163 1.163 0 0 0 0-1.645l-.948-.948a1.163 1.163 0 0 0-1.645 0c-.375.376-.953.44-1.44.229a7.179 7.179 0 0 0-.233-.098c-.494-.195-.857-.65-.857-1.18Z" />
            <Path d="M14.667 11a3.667 3.667 0 1 1-7.334 0 3.667 3.667 0 0 1 7.334 0Z" />
            </G>
            <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h22v22H0z" />
            </ClipPath>
            </Defs>
        </Svg>
    )
}
