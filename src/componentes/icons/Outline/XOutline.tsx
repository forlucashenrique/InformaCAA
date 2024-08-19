import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export default function XOutline (props: SvgProps){
    return (
        <Svg
          width={20}
          height={20}
          fill="none"
          {...props}
        >
          <Path
            fill="#0B3472"
            d="M3.712 14.962A.94.94 0 1 0 5.04 16.29L10 11.328l4.962 4.96a.939.939 0 0 0 1.328-1.328L11.328 10l4.96-4.962A.94.94 0 0 0 14.96 3.71L10 8.672 5.038 3.709A.94.94 0 0 0 3.71 5.037L8.672 10l-4.96 4.962Z"
          />
        </Svg>
      )
} 

