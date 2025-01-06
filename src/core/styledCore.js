import processBase from '../utils/process_base'
import processDynamic from '../utils/process_dynamic'
import processPseudo from '../utils/process_pseudo'

const styledCore = (props) => {
    const baseProps = {}
    const dynamicProps = {}
    const pseudoProps = {}

    // Props 분류
    Object.entries(props).forEach(([key, value]) => {
        const cleanKey = key.startsWith('$') ? key.slice(1) : key

        if (typeof value !== 'object') {
            baseProps[cleanKey] = value
        } else if (cleanKey === 'dynamic') {
            dynamicProps[cleanKey] = value
        } else {
            pseudoProps[cleanKey] = value
        }
    })

    // 각각의 프로세스 호출
    const baseStyles = processBase(baseProps)
    const { baseStyles: dynamicBaseStyles, pseudoStyles: dynamicPseudoStyles } = processDynamic(dynamicProps)
    const pseudoStyles = processPseudo(pseudoProps)

    // 최종 CSS 병합
    const dynamicBaseCSS = dynamicBaseStyles ? `&.active { ${dynamicBaseStyles} }` : ''
    const dynamicPseudoCSS = dynamicPseudoStyles ? dynamicPseudoStyles.replace(/(^:|^::)/gm, '&.active$1') : ''
    const pseudoCSS = pseudoStyles ? pseudoStyles.replace(/(^:|^::)/gm, '&$1') : ''

    return `${baseStyles}\n${pseudoCSS}\n${dynamicBaseCSS}\n${dynamicPseudoCSS}`
}

export default styledCore
