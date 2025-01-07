// filter_styleProps.js

import styleDisplayKeys from './style_displayKeys.js'
import styleCssKeys from './style_cssKeys.js'

const filterStyleProps = (props) => {
    const { stringProps, type, display } = props

    const { attribute, vaildDisplay } = styleDisplayKeys(type, display)

    const { validCss } = styleCssKeys({ stringProps, type, vaildDisplay, attribute })

    return {
        display: vaildDisplay,
        validCss,
    }
}

export default filterStyleProps