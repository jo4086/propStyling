import processBase from './process_base.js'
import processDynamic from './process_dynamic.js'
import processPseudo from './process_pseudo.js'
import fpVType from './filter_pseudoValidType.js'

const styledCore = (props) => {
    console.log(props)
    const type = props.type
    console.log('┌[path: styledCore]\n' + '├[type]\n└─▶', type, '\n')
    const baseProps = {}
    const dynamicProps = {}
    const pseudoProps = {}
    const nonStyle = {}
    // Props 분류

    Object.entries(props).forEach(([key, value]) => {
        if (key.startsWith('$')) {
            const cleanKey = key.startsWith('$') ? key.slice(1) : key
            // console.log('┌(cleanKey)\n└─▶', cleanKey)

            if (typeof value !== 'object') {
                baseProps[cleanKey] = value
            } else if (cleanKey === 'dynamic') {
                dynamicProps[cleanKey] = value
            } else {
                pseudoProps[cleanKey] = value
            }
        } else if (key !== 'type') {
            return (nonStyle[key] = value)
        }
    })

    // fpVType(pseudoProps, type)
    
    /*
    Object.entries(props).forEach(([key, value]) => {
        const cleanKey = key.startsWith('$') ? key.slice(1) : key
        // console.log('┌(cleanKey)\n└─▶', cleanKey)

        if (typeof value !== 'object') {
            baseProps[cleanKey] = value
        } else if (cleanKey === 'dynamic') {
            dynamicProps[cleanKey] = value
        } else {
            pseudoProps[cleanKey] = value
        }
    })
    */

    console.log('┌(baseProps)\n└─▶', baseProps, '\n')
    console.log('┌(nonStyle)\n└─▶', nonStyle, '\n')
    console.log('┌(dynamicProps)\n└─▶', dynamicProps, '\n')
    console.log('┌(pseudoProps)\n└─▶', pseudoProps, '\n')

    // 각각의 프로세스 호출
    const baseStyles = processBase(baseProps)
    console.log('┌(baseStyles)\n└─▶', baseStyles, '\n')

    processPseudo(pseudoProps)
    // processDynamic(dynamicProps)
    // const { baseStyles: dynamicBaseStyles, pseudoStyles: dynamicPseudoStyles } = processDynamic(dynamicProps)
    // const pseudoStyles = processPseudo(pseudoProps)

    /*
    // 최종 CSS 병합
    const dynamicBaseCSS = dynamicBaseStyles ? `&.active { ${dynamicBaseStyles} }` : ''
    const dynamicPseudoCSS = dynamicPseudoStyles ? dynamicPseudoStyles.replace(/(^:|^::)/gm, '&.active$1') : ''
    const pseudoCSS = pseudoStyles ? pseudoStyles.replace(/(^:|^::)/gm, '&$1') : ''

    return `${baseStyles}\n${pseudoCSS}\n${dynamicBaseCSS}\n${dynamicPseudoCSS}`
    */
}

export default styledCore
