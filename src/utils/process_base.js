const processBase = (baseProps) => {
    return Object.entries(baseProps)
        .map(([key, value]) => {
            const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase() // camelCase → kebab-case
            return `${cssKey}: ${value};`
        })
        .join(' ')
}

export default processBase
