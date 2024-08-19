
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"


export default function HomeFill(props: SvgProps) {
    return (
        <Svg
            width={26}
            height={26}
            fill="none"
            {...props}
        >
            <Path
            fill="#fff"
            fillRule="evenodd"
            d="M13.884.866a1.25 1.25 0 0 0-1.768 0l-8.75 8.75-2.5 2.5a1.25 1.25 0 1 0 1.768 1.768L3 13.517v8.233a3.75 3.75 0 0 0 3.75 3.75h12.5A3.75 3.75 0 0 0 23 21.75v-8.232l.366.366a1.25 1.25 0 0 0 1.768-1.768L13.884.866Z"
            clipRule="evenodd"
            />
        </Svg>
    )
}
