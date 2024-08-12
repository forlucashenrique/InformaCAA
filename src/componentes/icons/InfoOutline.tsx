
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function InfoOutline (props: SvgProps) {
    return (
        <Svg
        width={25}
        height={25}
        fill="none"
        {...props}
      >
        <Path
          fill="#000"
          d="M11.458 13.542a1.042 1.042 0 0 1 2.084 0v3.125a1.042 1.042 0 1 1-2.084 0v-3.125Zm1.042-5.73a1.563 1.563 0 1 0 0 3.126 1.563 1.563 0 0 0 0-3.126ZM2.083 12.5a10.417 10.417 0 1 1 20.834 0 10.417 10.417 0 0 1-20.834 0ZM12.5 4.167a8.333 8.333 0 1 0 0 16.666 8.333 8.333 0 0 0 0-16.666Z"
        />
      </Svg>
    )
}



