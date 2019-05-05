import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    @font-face {
        font-family: 'FontAwesome';
        src: url("./fonts/FontAwesome.ttf") format("truetype"),
        url("fontawesome-webfont.woff") format("woff"),
        url("./fonts/fontawesome-webfont.woff2") format("woff2");
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