import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export default function ArrowRight (props: SvgProps) {
   return (
    <Svg
        width={48}
        height={24}
        fill="none"
        {...props}
    >
        <Path
        fill="#0B3472"
        d="M2 10.5a1.5 1.5 0 0 0 0 3v-3Zm45.06 2.56a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L43.88 12l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM2 13.5h22v-3H2v3Zm22 0h22v-3H24v3Z"
        />
    </Svg>
)}

