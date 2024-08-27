

import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

export default function DrawerOutline (props: SvgProps) {
    return (
        <Svg
            width={25}
            height={26}
            fill="none"
            {...props}
        >
            <G clipPath="url(#a)">
            <Path
                fill="#fff"
                d="M20.833 18.73a1.562 1.562 0 0 1 .15 3.117l-.15.007H4.167a1.563 1.563 0 0 1-.15-3.117l.15-.008h16.666Zm0-7.293a1.562 1.562 0 1 1 0 3.126H4.167a1.563 1.563 0 1 1 0-3.126h16.666Zm0-7.291a1.562 1.562 0 1 1 0 3.125H4.167a1.563 1.563 0 0 1 0-3.125h16.666Z"
            />
            </G>
            <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 .5h25v25H0z" />
            </ClipPath>
            </Defs>
        </Svg>
    )
}
