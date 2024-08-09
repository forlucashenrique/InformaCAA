import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
export default function MapOutline  (props: SvgProps) { 
    return (
        <Svg
            width={30}
            height={30}
            fill="none"
            {...props}
        >
            <G clipPath="url(#a)">
            <Path
                fill="#fff"
                fillRule="evenodd"
                d="M10.658 3.88c.384-.128.8-.128 1.184 0l6.908 2.303 6.611-2.204A1.625 1.625 0 0 1 27.5 5.52v16.53a1.874 1.874 0 0 1-1.282 1.779l-6.875 2.291c-.386.129-.8.129-1.186 0l-6.907-2.303-6.611 2.204A1.625 1.625 0 0 1 2.5 24.48V7.95a1.875 1.875 0 0 1 1.283-1.779l6.875-2.291ZM10 21.6V6.734L5 8.4v14.865l5-1.667v.001Zm2.5-14.865V21.6l5 1.667V8.4l-5-1.667v.002ZM20 8.403v14.864l5-1.667V6.734l-5 1.669Z"
                clipRule="evenodd"
            />
            </G>
            <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h30v30H0z" />
            </ClipPath>
            </Defs>
        </Svg>
    )
}

