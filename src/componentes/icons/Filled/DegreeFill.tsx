
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function DegreeFill (props: SvgProps) {
    return (
        <Svg
        
        width={44}
        height={36}
        fill="none"
        {...props}
      >
        <Path
          fill="#0B3472"
          d="M22 0 0 12l22 12 18-9.82V28h4V12M8 20.36v8L22 36l14-7.64v-8L22 28 8 20.36Z"
        />
      </Svg>
    )
}

