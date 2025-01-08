import filterPseudoProps from './filter_pseudoProps.js'
import filterStyleProps from './filter_styleProps.js'

const filterPropsCore = (config) => {
    const { props, display, type, pseudo } = config
    // console.log('config', config)
    // console.log('┌(props)\n└─▶', props)
    // console.log('┌(display)\n└─▶', display)
    // console.log('┌(type)\n└─▶', type)
    // console.log('┌(pseudo)\n└─▶', pseudo)

    const objectProps = {}
    const stringProps = {}

    Object.entries(props).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            objectProps[key] = value
        } else {
            stringProps[key] = value
        }
    })

    // console.log('┌(objectProps)\n└─▶', objectProps)
    // console.log('┌(stringProps)\n└─▶', stringProps)


    // const { styled: styledProps, other: invalidStyleProps } = filterStyleProps({stringProps, type, display})

    const { pseudoProps, nonPseudoProps } = filterPseudoProps({ objectProps, type, pseudo })

    console.log('┌(pseudoProps)\n└─▶', pseudoProps)
    console.log('┌(nonPseudoProps)\n└─▶', nonPseudoProps)


    // return {}
}

export default filterPropsCore
