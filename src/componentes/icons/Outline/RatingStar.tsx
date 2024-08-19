
import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"


export default function RatingStar(props: SvgProps) {
    return (
        <Svg
            width={22}
            height={20}
            fill="none"
            {...props}
        >
        <Path
          fill="#0B3472"
          fillRule="evenodd"
          d="M9.92.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798 5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141.56 5.525a1.25 1.25 0 0 1-1.748 1.27L11 17.592l-5.082 2.24a1.249 1.249 0 0 1-1.748-1.27l.56-5.525-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176L9.92.868ZM11 2.987 8.687 6.959a1.25 1.25 0 0 1-.816.592l-4.492.973 3.062 3.427c.234.262.347.61.312.959l-.463 4.573 4.206-1.854a1.25 1.25 0 0 1 1.008 0l4.206 1.854-.463-4.573a1.25 1.25 0 0 1 .311-.959l3.063-3.427-4.492-.973a1.249 1.249 0 0 1-.816-.592L11 2.987Z"
          clipRule="evenodd"
        />
      </Svg>
    )
}



