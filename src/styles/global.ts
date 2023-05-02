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

    
})