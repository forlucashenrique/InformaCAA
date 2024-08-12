import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export default function GraduationOutline (props: SvgProps ) {
    return (
        <Svg
            width={25}
            height={25}
            fill="none"
            {...props}
         >
            <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M22.917 10.417v6.25m-.605-5.29a1.041 1.041 0 0 0-.02-1.915l-8.927-4.066a2.084 2.084 0 0 0-1.73 0L2.708 9.458a1.042 1.042 0 0 0 0 1.909l8.927 4.07a2.083 2.083 0 0 0 1.73 0l8.947-4.06Z"
            />
            <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6.25 13.02v3.647c0 .828.658 1.623 1.83 2.21 1.173.585 2.762.915 4.42.915s3.247-.33 4.42-.916c1.171-.586 1.83-1.38 1.83-2.21v-3.645"
            />
        </Svg>
    )
} 