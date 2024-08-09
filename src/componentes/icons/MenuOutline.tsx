import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export default function  MenuOutline (props: SvgProps) {
    return (
        <Svg
            width={30}
            height={30}
            fill="none"
            {...props}
        >
            <Path
            fill="#fff"
            d="M1.25 27.5c0 .675.563 1.25 1.25 1.25h16.25c.7 0 1.25-.575 1.25-1.25v-1.25H1.25v1.25Zm9.375-16.25c-4.688 0-9.375 2.5-9.375 7.5H20c0-5-4.688-7.5-9.375-7.5Zm-6.1 5c1.387-1.938 4.338-2.5 6.1-2.5 1.762 0 4.713.563 6.1 2.5h-12.2Zm-3.275 5H20v2.5H1.25v-2.5Zm21.25-15v-5H20v5h-6.25l.287 2.5h11.95l-1.75 17.5H22.5v2.5h2.15c1.05 0 1.913-.813 2.038-1.837L28.75 6.25H22.5Z"
            />
        </Svg>
    ) 
}
