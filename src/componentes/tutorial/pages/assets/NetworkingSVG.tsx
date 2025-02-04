import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export default function NetworkingSVG(props: SvgProps) {
    return (
    <Svg
       
        width={199}
        height={245}
        fill="none"
        {...props}
    >
        <Path
        fill="#DFEFFF"
        fillRule="evenodd"
        d="M0 122.5A122.502 122.502 0 0 0 122.5 245a122.503 122.503 0 0 0 86.621-35.879 122.503 122.503 0 0 0 0-173.242 122.502 122.502 0 0 0-173.242 0A122.5 122.5 0 0 0 0 122.5Zm224 0a101.5 101.5 0 1 1-203-.002 101.5 101.5 0 0 1 203 .002Z"
        clipRule="evenodd"
        />
        <Path
        fill="#DFEFFF"
        fillRule="evenodd"
        d="M70.002 122.499c0 63.308 20.874 115.5 52.5 115.5s52.5-52.192 52.5-115.5-20.874-115.5-52.5-115.5-52.5 52.192-52.5 115.5Zm84 0c0 52.668-16.73 94.5-31.5 94.5s-31.5-41.832-31.5-94.5 16.73-94.5 31.5-94.5 31.5 41.832 31.5 94.5Z"
        clipRule="evenodd"
        />
        <Path
        fill="#DFEFFF"
        d="M32.928 59.038 47.012 43.47a62.767 62.767 0 0 0 4.55 3.738c17.794 13.328 46.2 21.56 77.21 21.56 26.474 0 51.142-5.978 69.034-16.212 4.322-2.473 8.144-5.133 11.466-7.98l13.636 15.974c-4.349 3.724-9.24 7.13-14.672 10.22-21.224 12.152-49.476 18.984-79.464 18.984-35.308 0-68.11-9.492-89.81-25.746a84.03 84.03 0 0 1-6.034-4.97Zm0 127.148 14.084 15.568a62.952 62.952 0 0 1 4.55-3.738c17.794-13.328 46.2-21.56 77.21-21.56 26.474 0 51.142 5.978 69.034 16.212 4.322 2.474 8.144 5.134 11.466 7.98l13.636-15.974a98.08 98.08 0 0 0-14.672-10.22c-21.224-12.152-49.476-18.984-79.464-18.984-35.308 0-68.11 9.492-89.81 25.746a84.11 84.11 0 0 0-6.034 4.97ZM7 133v-21h231v21H7Z"
        />
    </Svg>
    )
}
