import filterStyleProps from '../utils/filter_styleProps.js'
import filterPseudoProps from '../utils/filter_pseudoProps.js'

const filterPropsCore = (config) => {
    const { props, display, type, pseudo } = config

    const objectProps = {}
    const stringProps = {}

    Object.entries(props).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            objectProps[key] = value
        } else {
            stringProps[key] = value
        }
    })

    const { styled: styledProps, other: invalidStyleProps } = filterStyleProps({stringProps, type, display})

    const { pseudoProps, nonPseudoProps } = filterPseudoProps({ objectProps, type, pseudo })

    return {}
}

export default filterPropsCore
