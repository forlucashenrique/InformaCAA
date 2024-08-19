import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

type Props = SvgProps & {
    fill?: string
}


export default function WheelChairFill ({fill = '#0B3472', ...props}: Props) {
    return (
        <Svg
            width={22}
            height={22}
            fill="none"
            {...props}
        >
            <Path
            fill={fill}
            d="M21.96 17.503a.783.783 0 0 0-.988-.494l-1.702.567-2.822-5.644a.782.782 0 0 0-.698-.432H7.938V9.156h5.468a.781.781 0 1 0 0-1.562H7.938v-.88a3.125 3.125 0 1 0-1.563 0V7.77a7.031 7.031 0 0 0 1.563 13.886c3.273 0 6.22-2.217 7.006-5.273a.783.783 0 0 0-1.154-.869.783.783 0 0 0-.36.478c-.6 2.344-2.962 4.102-5.492 4.102a5.468 5.468 0 0 1-1.563-10.71v2.897a.781.781 0 0 0 .781.781h8.11l2.91 5.819a.781.781 0 0 0 .946.39l2.344-.78a.781.781 0 0 0 .494-.988ZM5.594 3.687a1.562 1.562 0 1 1 3.125 0 1.562 1.562 0 0 1-3.125 0Z"
            />
        </Svg>
    )
}

