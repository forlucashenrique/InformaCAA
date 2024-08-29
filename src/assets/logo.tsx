import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function Logo (props: SvgProps) {
    return (
        <Svg
            width={164}
            height={24}
            fill="none"
            {...props}
        >
            <Path
                fill="#fff"
                d="M0 5.484h2.928l.02 18.296H.02L0 5.483ZM5.866 12.352h2.766l.03 2.088c.333-.699.856-1.274 1.57-1.714.715-.45 1.55-.67 2.505-.67 1.238 0 2.184.239 2.848.727.664.489 1.106 1.169 1.338 2.05.231.881.342 2.021.342 3.439l.01 5.498h-2.827V18.35c0-1.447-.151-2.481-.443-3.123-.302-.642-.905-.958-1.831-.958-.523 0-1.056.153-1.59.46-.543.306-.986.747-1.348 1.331-.352.584-.533 1.265-.533 2.04l.01 5.671H5.886l-.02-11.418ZM21.47 14.479H19.54v-2.136h1.931V9.88c0-1.494.372-2.653 1.137-3.477.755-.824 1.872-1.236 3.33-1.236.594 0 1.268.153 2.012.47l-.543 2.538c-.12-.134-.312-.259-.563-.383a1.82 1.82 0 0 0-.825-.182c-1.167 0-1.76.728-1.77 2.164v2.568h2.826v2.136h-2.827v9.282H21.48l-.01-9.282ZM31.33 23.205a5.677 5.677 0 0 1-2.223-2.165c-.523-.91-.785-1.925-.785-3.037 0-1.091.252-2.097.765-3.007a5.558 5.558 0 0 1 2.203-2.165c.956-.536 2.063-.795 3.32-.795 1.258 0 2.355.268 3.31.795a5.597 5.597 0 0 1 2.194 2.165 6.03 6.03 0 0 1 .774 3.007c0 1.112-.261 2.127-.784 3.037a5.692 5.692 0 0 1-2.204 2.165c-.945.536-2.042.795-3.28.795-1.227 0-2.324-.259-3.29-.795Zm5.765-2.471c.584-.719.876-1.61.876-2.692 0-1.083-.312-1.983-.946-2.72-.624-.738-1.459-1.112-2.485-1.102-.996 0-1.791.364-2.395 1.101-.603.728-.895 1.648-.895 2.74 0 1.063.322 1.954.966 2.672.644.719 1.469 1.083 2.485 1.083 1.016-.01 1.81-.364 2.394-1.082ZM43.816 12.323h2.827v2.242a3.895 3.895 0 0 1 1.358-1.84c.624-.469 1.339-.699 2.144-.699.553 0 .945.048 1.146.144l-.392 2.71c-.16-.095-.493-.152-1.016-.152-.815 0-1.56.249-2.234.747-.674.498-1.006 1.293-1.006 2.394l.01 5.872h-2.827l-.01-11.418ZM53.284 12.314h2.827v2.069a3.973 3.973 0 0 1 1.68-1.772c.745-.403 1.59-.604 2.546-.604 2.142.02 3.46.719 3.953 2.117.383-.651.956-1.159 1.721-1.542a5.372 5.372 0 0 1 2.435-.575c1.257 0 2.203.23 2.847.68.644.46 1.077 1.102 1.298 1.945.221.833.332 1.963.332 3.371l.01 5.729h-2.847l-.01-5.748c0-1.34-.151-2.308-.433-2.883-.292-.584-.845-.872-1.66-.872-1.097 0-1.932.355-2.495 1.064-.564.709-.845 1.628-.845 2.778l.01 5.67h-2.827l-.01-6.15c0-.88-.04-1.532-.111-1.963-.07-.431-.262-.776-.574-1.015-.312-.25-.815-.374-1.519-.374-.614 0-1.177.172-1.71.527a3.78 3.78 0 0 0-1.278 1.408 3.929 3.929 0 0 0-.483 1.906l.01 5.67h-2.847l-.02-11.436ZM78.456 23.233a5.612 5.612 0 0 1-2.193-2.088c-.553-.9-.825-1.963-.825-3.17 0-1.198.241-2.242.714-3.133a5.067 5.067 0 0 1 2.053-2.088c.885-.498 1.931-.747 3.139-.747.694 0 1.348.115 1.962.345.613.23 1.127.517 1.539.862.423.335.694.68.835 1.006l.05-1.916h2.697l.01 11.428H85.77l-.05-2.012c-.293.594-.836 1.12-1.62 1.58-.785.46-1.66.69-2.636.69-1.097-.028-2.093-.268-3.009-.756Zm5.966-2.5c.685-.65 1.017-1.513 1.017-2.576v-.173a3.91 3.91 0 0 0-.473-1.915 3.453 3.453 0 0 0-1.278-1.322 3.474 3.474 0 0 0-1.78-.47c-1.118 0-1.983.345-2.587 1.035-.613.69-.915 1.58-.915 2.672 0 1.111.302 2.012.905 2.702.604.69 1.47 1.034 2.606 1.034.996 0 1.831-.326 2.505-.986ZM95.973 22.601c-1.459-.842-2.566-1.973-3.34-3.39-.765-1.418-1.157-2.98-1.157-4.694 0-1.81.412-3.43 1.237-4.857.825-1.427 1.992-2.548 3.491-3.352 1.5-.805 3.2-1.207 5.101-1.207.855 0 1.65.086 2.395.259.744.172 1.358.373 1.841.593.493.22.815.412.966.556l-1.278 2.49c-1.066-.89-2.455-1.34-4.155-1.34-1.207 0-2.294.287-3.27.852s-1.74 1.37-2.294 2.414c-.553 1.044-.835 2.26-.835 3.63 0 1.265.252 2.404.745 3.439a5.75 5.75 0 0 0 2.183 2.433c.956.594 2.103.89 3.421.89 1.529 0 3.018-.42 4.447-1.244l.865 2.366c-.382.335-1.087.651-2.103.957a10.69 10.69 0 0 1-3.099.46c-1.982.02-3.702-.402-5.161-1.255ZM116.387 5.37l9.277 18.314h-3.371l-1.65-3.583-8.813.01-1.64 3.582h-3.27l9.175-18.324h.292Zm-1.298 7.787-2.082 4.435 6.479-.01-2.073-4.406-1.126-2.51h-.051l-1.147 2.49Z"
            />
            <Path
            fill="#fff"
            d="m133.773 5.35 9.276 18.315h-3.37l-1.65-3.583-8.814.01-1.64 3.582h-3.27l9.186-18.324h.282Zm-1.298 7.787-2.083 4.436 6.48-.01-2.073-4.406-1.127-2.51h-.05l-1.147 2.49ZM147.144 23.55l.322-3.219c.01-.076-.051-.134-.121-.143l-1.187-.144a.154.154 0 0 1-.111-.077l-.976-2.011a.145.145 0 0 1 .03-.154l.463-.44c.071-.067.201-.038.231.057l.604 1.859c.02.057.071.095.131.095h.423c.09 0 .161-.076.14-.162l-.644-2.76c-.01-.047 0-.095.041-.124l.805-.766c.08-.077.221-.038.241.067l.604 3.18c.02.106.141.144.231.077l.805-.642c.04-.029.05-.067.05-.115l-.161-1.513a.15.15 0 0 1 .061-.125l.935-.632c.091-.067.222 0 .222.105v2.175c0 .038-.02.076-.051.095l-1.629 1.4c-.041.037-.061.095-.041.143l.141.393c.01.019.01.038.01.057l-.332 3.343a.147.147 0 0 1-.141.125h-.935c-.101 0-.171-.068-.161-.144ZM152.164 23.569l.131-2.184c0-.058.05-.105.11-.125l.675-.143c.03-.01.07-.029.08-.058l.352-.498a.142.142 0 0 0 0-.153l-.211-.259c-.071-.086-.211-.067-.242.039l-.14.364c-.021.057-.071.086-.131.086h-.222c-.09 0-.161-.077-.14-.163l.442-1.887c.01-.048 0-.096-.04-.125l-.503-.479c-.081-.076-.221-.038-.242.067l-.402 2.098c-.02.106-.161.144-.241.067l-.383-.364a.12.12 0 0 1-.04-.095v-.9c0-.106-.121-.164-.211-.116l-.433.24a.154.154 0 0 0-.07.086l-.141.67c-.01.048.01.087.04.125l1.087 1.015.02.02.251.354c.02.019.02.048.02.076l-.07 2.232c0 .077.06.134.141.134h.362c.081 0 .151-.057.151-.124Z"
            />
            <Path
            fill="#fff"
            d="m163.956 23.463-6.449-5.88a.346.346 0 0 1-.081-.116l-.06-.163a.262.262 0 0 1 .08-.297l4.628-4.138c.021-.019.031-.038.041-.057l.201-.585a.132.132 0 0 0-.141-.172l-4.316-.488c-.02 0-.03 0-.05-.01l-.202-.067c-.09-.029-.13-.144-.06-.21l3.612-4.206c.04-.038.04-.096.02-.144l-.191-.373c-.03-.048-.091-.086-.151-.077l-4.055.623a.343.343 0 0 1-.332-.144c-.01-.019-.02-.038-.02-.067V5.11c0-.076-.06-.134-.141-.134h-.09c-.03 0-.061.01-.081.03l-3.692 2.48a.145.145 0 0 1-.221-.067L150.454.101c-.02-.077-.101-.115-.181-.096l-.614.192a.33.33 0 0 0-.151.105l-3.954 6.619c-.02.029-.05.048-.08.048l-.363.086c-.03.01-.07 0-.1-.01l-.201.058-5.916-1.743c-.02 0-.03-.01-.051-.01h-.835c-.12 0-.201.124-.151.22l2.989 5.843c1.64-1.37 3.823-2.164 6.207-2.05 4.347.211 8.009 3.67 8.26 7.807.161 2.577-.915 4.914-2.706 6.533h11.238c.141-.01.201-.163.111-.24Z"
            />
        </Svg>
    )
}

