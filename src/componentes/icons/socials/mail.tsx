import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const GmailIcon = (props: SvgProps) => (
  <Svg
    width={30}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#0B3472"
      d="M27 21h-3V7.875L15 13.5 6 7.875V21H3V3h1.8L15 9.375 25.2 3H27m0-3H3a2.99 2.99 0 0 0-3 3v18a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"
    />
  </Svg>
)
export default GmailIcon
