// filter_styleProps.js

import styleDisplayKeys from './style_displayKeys.js'
import styleCssKeys from './style_cssKeys.js'

const filterStyleProps = (props) => {
    const { stringProps, type, display } = props

    const { attribute, validDisplay } = styleDisplayKeys(type, display)

    const { validCss, strings } = styleCssKeys({ stringProps, type, validDisplay, attribute })

    // console.lasdog('┌(validCss)\n└─▶', validCss, '\n')
    // console.log('┌(strings)\n└─▶', strings, '\n')

    return {
        validDisplay,
        validCss,
        strings,
    }
}

export default filterStyleProps
