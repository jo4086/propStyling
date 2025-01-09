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

    generateDynamicCSS(dynamicProps)
    generateBaseCSS(stringProps)
    generatePseudoCSS(objectProps)

    console.log('stringProps:', stringProps)
    console.log('objectProps:', objectProps)
}

export default styledCore
