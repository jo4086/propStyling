import processPseudo from './process_pseudo.js'

const processDynamic = (dynamicProps) => {
    console.log('┌(dynamicProps)\n└─▶', dynamicProps, '\n')
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
    console.log('┌(baseStyles)\n└─▶', baseStyles, '\n')
    console.log('┌(pseudoProps)\n└─▶', pseudoProps, '\n')

    const processedPseudoStyles = processPseudo(pseudoProps)

    return {
        baseStyles: baseStyles.join(' '), // background-color: pink;
        pseudoStyles: processedPseudoStyles, // :hover { color: green; }
    }
}

export default processDynamic
