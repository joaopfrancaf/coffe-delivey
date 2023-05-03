import {globalCss} from "./stitches.config"

export const globaStyles = globalCss ({
    /* default css */
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    body: {
        backgroundColor: '$--base---background',
        color: '$--base---text',  /* texto cor */
        '-webkit-font-smoothing' : 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'roboto',
        fontWeight: 400,
    },
    
    '@font-face': {
        fontFamily: 'Baloo2',
        src: 'url("https://fonts.gstatic.com/s/baloo2/v16/wXKrE3kTposypRyd51jcAA.woff2")',
    },
})