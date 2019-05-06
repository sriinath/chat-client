import { createGlobalStyle } from 'styled-components'
import fontawesomeTTF from './fonts/fontawesome-webfont.ttf'
import fontawesomeWOFF from './fonts/fontawesome-webfont.woff'
import fontawesomeWOFF2 from './fonts/fontawesome-webfont.woff2'
import fontawesomeEOT from './fonts/fontawesome-webfont.eot'
const fonts = [
    fontawesomeTTF,
    fontawesomeEOT,
    fontawesomeWOFF,
    fontawesomeWOFF2
]
const Global = createGlobalStyle`
    @font-face {
        font-family: 'FontAwesome';
        src: url('./fonts/fontawesome-webfont.ttf') format("truetype"),
        url('./fonts/fontawesome-webfont.woff') format("woff"),
        url('./fonts/fontawesome-webfont.woff2') format("woff2"),
        url('./fonts/fontawesome-webfont.eot') format("eot");
    }
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #fff;
    }
    ::-webkit-scrollbar-thumb {
        background: #6b6767; 
    }
`
export { Global }