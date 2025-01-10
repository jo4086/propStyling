import generateBaseCSS from './generate_base_css.js'
import generatePseudoCSS from './generate_pseudo_css.js'
import generateDynamicCSS from './generate_dynamic_css.js'

const styledCore = (props) => {
    const stylesProps = props?.$styles

    const dynamicProps = {}
    const objectProps = {}
    const stringProps = {}

    Object.entries(stylesProps).forEach(([key, value]) => {
        if (typeof value === 'object') {
            key === 'dynamic' ? (dynamicProps[key] = value) : (objectProps[key] = value)
        } else {
            stringProps[key] = value
        }
    })
    // console.log('dynamicProps:', dynamicProps)
    // console.log('objectProps:', objectProps)
    // console.log('stringrops:', stringProps)

    const dynamicCSS = generateDynamicCSS(dynamicProps)
    const baseCSS = generateBaseCSS(stringProps)
    const pseudoCSS = generatePseudoCSS(objectProps)

    // console.log(baseCSS)
    // console.log(pseudoCSS)
    // console.log(dynamicCSS)
    
    // console.log('stringProps:', stringProps)
    // console.log('objectProps:', objectProps)
    // console.log('\ndynamicCSS\n' + dynamicCSS)
    // console.log('\nbaseCSS\n' + baseCSS)
    // console.log('\npseudoCSS\n' + pseudoCSS)
    const finalCSS = [baseCSS,pseudoCSS,dynamicCSS].join('\n')
    // console.log(finalCSS)

    return finalCSS
}

export default styledCore
