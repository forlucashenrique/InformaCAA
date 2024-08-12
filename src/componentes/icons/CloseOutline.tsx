import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function CloseOutline (props: SvgProps) {
    return (
        <Svg

          width={15}
          height={15}
          fill="none"
          {...props}
        >
          <Path
            fill="#0B3472"
            d="M14.684 13.169a1.073 1.073 0 1 1-1.517 1.517L7.5 9.018l-5.668 5.666a1.073 1.073 0 0 1-1.518-1.517L5.983 7.5.316 1.832A1.073 1.073 0 1 1 1.833.315L7.5 5.983 13.168.314a1.073 1.073 0 0 1 1.518 1.517l-5.669 5.67 5.667 5.668Z"
          />
        </Svg>
      )
} 