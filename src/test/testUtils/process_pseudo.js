const processPseudo = (pseudoProps) => {
    console.log('┌[path: processPseudo]\n' + '├[pseudoProps]\n└─▶', pseudoProps, '\n')
    const pseudoPrefixes = ['hover', 'focus', 'visited', 'disabled']
    const pseudoElements = ['before', 'after', 'placeholder']

    const pseudoSelectors = []
    const pseudoElementsSelectors = []

    Object.entries(pseudoProps).forEach(([key, value]) => {
        if (pseudoPrefixes.includes(key)) {
            const pseudoCSS = Object.entries(value)
                .map(([styleKey, styleValue]) => {
                    const cssKey = styleKey.replace(/([A-Z])/g, '-$1').toLowerCase()
                    return `${cssKey}: ${styleValue};`
                })
                .join(' ')
            pseudoSelectors.push(`:${key} { ${pseudoCSS} }`)
        } else if (pseudoElements.includes(key)) {
            const elementCSS = Object.entries(value)
                .map(([styleKey, styleValue]) => {
                    const cssKey = styleKey.replace(/([A-Z])/g, '-$1').toLowerCase()
                    return `${cssKey}: ${styleValue};`
                })
                .join(' ')
            pseudoElementsSelectors.push(`::${key} { ${elementCSS} }`)
        }
    })

    return [...pseudoSelectors, ...pseudoElementsSelectors].join('\n')
}

export default processPseudo
