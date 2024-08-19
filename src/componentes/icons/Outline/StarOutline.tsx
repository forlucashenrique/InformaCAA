import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function StarOutline(props: SvgProps) {
    return (
        <Svg
            width={15}
            height={15}
            fill="none"
            {...props}
        >
            <Path
            fill="#0B3472"
            fillRule="evenodd"
            d="M6.735 1.031a.885.885 0 0 1 1.53 0l1.98 3.399 3.845.833a.886.886 0 0 1 .472 1.455l-2.62 2.933.396 3.914a.885.885 0 0 1-1.238.9l-3.6-1.587-3.6 1.586a.885.885 0 0 1-1.238-.9l.397-3.913L.438 6.72A.885.885 0 0 1 .91 5.263l3.845-.833 1.98-3.399ZM7.5 2.532 5.862 5.346a.885.885 0 0 1-.578.42l-3.182.688L4.27 8.882a.887.887 0 0 1 .22.68L4.165 12.8l2.979-1.313a.886.886 0 0 1 .714 0l2.98 1.313-.329-3.239a.883.883 0 0 1 .22-.68l2.17-2.427-3.182-.689a.886.886 0 0 1-.578-.42L7.5 2.533Z"
            clipRule="evenodd"
            />
        </Svg>
    )
}
