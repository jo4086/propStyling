const commonPseudoKeys = [
    // 모든 태그에 적용할 가상선택자
    'hover',
    'active',
    'focus',
    'visited',
    'checked',
    'disabled',
    'enabled',
    'required',
    'first-child',
    'last-child',
    'nth-child',
    'nth-of-type',
    'only-child',
    'empty',
    'not',
    'is',
    'where',
    'before',
    'after',
]

const allPseudoKeys = [
    // Pseudo-classes
    'hover',
    'active',
    'focus',
    'visited',
    'checked',
    'disabled',
    'enabled',
    'required',
    'first-child',
    'last-child',
    'nth-child',
    'nth-of-type',
    'only-child',
    'empty',
    'not',
    'is',
    'where',

    // Pseudo-elements
    'before',
    'after',
    'first-line',
    'first-letter',
    'placeholder',
    'selection',
    'marker',
]

const tagSpecificPseudo = {
    input: ['placeholder', 'selection', 'file-selector-button'],
    textarea: ['placeholder', 'selection'],
    li: ['marker'],
    dialog: ['backdrop'],
}
const filterPseudoProps = (config) => {
    const { objectProps, type, pseudo } = config

    // 1. 유효한 선택자 정의
    const commonKeys = new Set(commonPseudoKeys)
    const specificKeys = new Set(tagSpecificPseudo[type] || [])
    const validKeys = new Set([...commonKeys, ...specificKeys])
    const setAllPseudoKeys = new Set([...allPseudoKeys])

    // 2. `reduce`를 사용하여 결과 생성
    const { pseudoProps, nonPseudoProps } = Object.entries(objectProps).reduce(
        (acc, [key, value]) => {
            if (key === 'dynamic') {
                const dynamicPseudoProps = Object.entries(value).reduce((innerAcc, [innerKey, innerValue]) => {
                    if (validKeys.has(innerKey) && (!pseudo || pseudo === innerKey)) {
                        innerAcc[innerKey] = innerValue
                    } else if (!setAllPseudoKeys.has(innerKey)) {
                        innerAcc[innerKey] = innerValue
                    }
                    return innerAcc
                }, {})
                acc.pseudoProps[key] = dynamicPseudoProps
            } else if (validKeys.has(key) && (!pseudo || pseudo === key)) {
                acc.pseudoProps[key] = value
            } else if (!setAllPseudoKeys.has(key)) {
                acc.nonPseudoProps[key] = value
            }
            return acc
        },
        { pseudoProps: {}, nonPseudoProps: {} },
    )

    const isDynamic = Boolean(objectProps?.dynamic)

    return { pseudoProps, nonPseudoProps, isDynamic }
}

export default filterPseudoProps
