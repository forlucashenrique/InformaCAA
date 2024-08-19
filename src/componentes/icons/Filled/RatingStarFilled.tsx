import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function RatingStarFilled (props: SvgProps) {
    return (
        <Svg
            width={22}
            height={20}
            fill="none"
            {...props}
      >
        <Path
          fill="#0B3472"
          d="M9.92.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798 5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141.56 5.525a1.25 1.25 0 0 1-1.748 1.27L11 17.592l-5.082 2.24a1.249 1.249 0 0 1-1.748-1.27l.56-5.525-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176L9.92.868Z"
        />
      </Svg>
    )
}


