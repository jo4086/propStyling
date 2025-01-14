import generateBaseCSS from './generate_base_css.js'
import generatePseudoCSS from './generate_pseudo_css.js'

const generateDynamicCSS = (dynamicProps) => {
    // console.log('Dynamic Props:\n', dynamicProps, '\n')

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

    const dynamicKey = '.dynamic'

    const pseudoCSSBlocks = generatePseudoCSS(pseudoStyles) // 변경된 이름 반영

    const dynamicPseudoCSS = pseudoCSSBlocks
        .split(/(?=\n&[:]{1,2}[^:])/g) // `&`로 시작하는 블록을 나눔
        .map((cssBlock) => {
            if (cssBlock.trim().startsWith('&')) {
                // `&`로 시작하면 `.dynamic`을 추가
                return cssBlock.replace('&', `&${dynamicKey}`)
            }
            return cssBlock // 다른 블록은 그대로 반환
        })
        .join('\n') // 다시 하나로 묶음


    const baseCSS = generateBaseCSS(baseStyles)
    const dynamicBaseCSS = `&.dynamic {
${baseCSS}
}`

    const combinedCSS = [dynamicBaseCSS, dynamicPseudoCSS].join('\n\n')

    // console.log(dynamicBaseCSS)
    // console.log('Combined Dynamic CSS:\n'+ combinedCSS)

    return combinedCSS
}

export default generateDynamicCSS
