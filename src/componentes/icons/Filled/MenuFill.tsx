
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function MenuFill (props: SvgProps) {
    return (
        <Svg
        
        width={28}
        height={28}
        fill="none"
        {...props}
      >
        <Path
          fill="#fff"
          d="M21.575 27.75h2.075c1.05 0 1.913-.813 2.038-1.837l2.062-20.6H21.5V.25h-2.462v5.063h-6.213l.375 2.925c2.138.587 4.137 1.65 5.338 2.825 1.8 1.774 3.037 3.612 3.037 6.612V27.75ZM.25 26.5v-1.25h18.788v1.25c0 .675-.563 1.25-1.288 1.25H1.5c-.688 0-1.25-.575-1.25-1.25Zm18.788-8.75c0-10-18.788-10-18.788 0h18.788ZM.25 20.25H19v2.5H.25v-2.5Z"
        />
      </Svg>
    )
}
