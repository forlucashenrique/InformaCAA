import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export default function  BurguerSVG (props: SvgProps) {
    return (
        <Svg
            width={220}
            height={241}
            fill="none"
            {...props}
        >
            <Path
            fill="#DFEFFF"
            d="M0 230.045C0 235.961 4.95 241 11 241h143c6.16 0 11-5.039 11-10.955v-10.954H0v10.954ZM82.5 87.636c-41.25 0-82.5 21.909-82.5 65.728h165c0-43.819-41.25-65.728-82.5-65.728Zm-53.68 43.819c12.21-16.98 38.17-21.91 53.68-21.91 15.51 0 41.47 4.93 53.68 21.91H28.82ZM0 175.273h165v21.909H0v-21.909ZM187 43.818V0h-22v43.818h-55l2.53 21.91h105.16l-15.4 153.363H187V241h18.92c9.24 0 16.83-7.12 17.93-16.103L242 43.818h-55Z"
            />
        </Svg>
    )
}