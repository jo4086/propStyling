import filterPseudoProps from '../utils/filter_pseudoProps.js'
import filterStyleProps from '../utils/filter_styleProps.js'

const filterPropsCore = (config) => {
    const { props, display, type, pseudo } = config
    const isValue = Boolean(props?.value || false)

    const objectProps = {}
    const stringProps = {}
    const functionProps = {}

    Object.entries(props).forEach(([key, value]) => {
        if (typeof value === 'function') {
            functionProps[key] = value
        } else if (typeof value === 'object' && value !== null) {
            objectProps[key] = value
        } else {
            stringProps[key] = value
        }
    })

    const { validCss, validDisplay, strings } = filterStyleProps({ stringProps, type, display })

    const { pseudoProps, nonPseudoProps, isDynamic } = filterPseudoProps({ objectProps, type, pseudo })

    const styles = {
        ...(validDisplay && { display: validDisplay }),
        ...(validCss || {}),
        ...(pseudoProps || {}),
    }

    const nonStyles = {
        ...(functionProps || {}),
        ...(nonPseudoProps || {}),
        ...strings,
    }

    const stylesProps = {
        $styles: styles,
    }
    const dynamic = isDynamic && isValue

    const result = {
        type,
        dynamic,
        ...nonStyles,
        ...stylesProps,
    }

    return Object.keys(result).length > 0 ? result : {}
}

export default filterPropsCore
