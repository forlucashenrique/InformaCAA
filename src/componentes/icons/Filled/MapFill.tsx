import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function MapFill (props: SvgProps) {
    return (
        <Svg
        width={26}
        height={24}
        fill="none"
        {...props}
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M9.25 3.318c-.081 2.052 0 14.966 0 14.966.2 0 .4.032.592.096l6.908 2.303V5.716c-.201 0-.401-.032-.593-.096L9.25 3.318ZM8.658.88c.384-.128.8-.128 1.184 0l6.908 2.303L23.361.979A1.625 1.625 0 0 1 25.5 2.52v16.53a1.874 1.874 0 0 1-1.282 1.779l-6.875 2.291c-.386.129-.8.129-1.186 0L9.25 20.817l-6.611 2.204A1.624 1.624 0 0 1 .5 21.48V4.95a1.875 1.875 0 0 1 1.282-1.779L8.659.88Z"
          clipRule="evenodd"
        />
      </Svg>
    )
}

