// filter_styleProps.js

import styleDisplayKeys from './style_displayKeys.js'
import styleCssKeys from './style_cssKeys.js'

const filterStyleProps = (props) => {
    const { stringProps, type, display } = props

    const { attribute, validDisplay } = styleDisplayKeys(type, display)

    const { validCss, invalidCss } = styleCssKeys({ stringProps, type, validDisplay, attribute })

    // console.log('┌(validCss)\n└─▶', validCss, '\n')
    // console.log('┌(invalidCss)\n└─▶', invalidCss, '\n')

    return {
        validDisplay,
        validCss,
    }
}

export default filterStyleProps
