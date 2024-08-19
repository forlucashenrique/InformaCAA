import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function DegreeOutline (props: SvgProps) {
    return (
        <Svg
        width={44}
        height={36}
        fill="none"
        {...props}
      >
        <Path
          fill="#0B3472"
          d="M22 0 0 12l8 4.36v12L22 36l14-7.64v-12l4-2.18V28h4V12L22 0Zm13.64 12L22 19.44 8.36 12 22 4.56 35.64 12ZM32 26l-10 5.44L12 26v-7.46L22 24l10-5.46V26Z"
        />
      </Svg>
    )
}
