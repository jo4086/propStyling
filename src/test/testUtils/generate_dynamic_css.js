import generateBaseCSS from './generate_base_css.js'
import generatePseudoCSS from './generate_pseudo_css.js'

const generateDynamicCSS = (dynamicProps) => {
    console.log('Dynamic Props:\n', dynamicProps, '\n')

    const dynamicStyles = dynamicProps.dynamic
    const baseStyles = {}
    const pseudoStyles = {}

    Object.entries(dynamicStyles).forEach(([key, value]) => {
        if (typeof value === 'object') {
            pseudoStyles[key] = value
        } else {
            baseStyles[key] = value
        }
    })

    const pseudoCSSBlocks = generatePseudoCSS(pseudoStyles) // 변경된 이름 반영

    const dynamicPseudoCSS = pseudoCSSBlocks
        .split(/(?=\n[:]{1,2}[^:])/g)
        .map((cssBlock) => {
            if (cssBlock.trim().startsWith('::') || cssBlock.trim().startsWith(':')) {
                return `&.dynamic${cssBlock.trim()}`
            }
            return cssBlock.trim()
        })
        .join('\n\n')

    const baseCSS = generateBaseCSS(baseStyles)
    const dynamicBaseCSS = `&.dynamic {
${baseCSS}
}`

    const combinedCSS = [dynamicBaseCSS, dynamicPseudoCSS].join('\n\n')

    console.log('Combined Dynamic CSS:\n', combinedCSS)

    return combinedCSS
}

export default generateDynamicCSS
