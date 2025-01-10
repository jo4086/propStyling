import processPseudo from './process_pseudo'

const processDynamic = (dynamicProps) => {
    const baseStyles = []
    const pseudoProps = {}

    Object.entries(dynamicProps.dynamic || {}).forEach(([key, value]) => {
        if (typeof value === 'object') {
            pseudoProps[key] = value // 가상 선택자/요소 분리
        } else {
            const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
            baseStyles.push(`${cssKey}: ${value};`)
        }
    })

    const processedPseudoStyles = processPseudo(pseudoProps)

    return {
        baseStyles: baseStyles.join(' '), // background-color: pink;
        pseudoStyles: processedPseudoStyles, // :hover { color: green; }
    }
}

export default processDynamic
