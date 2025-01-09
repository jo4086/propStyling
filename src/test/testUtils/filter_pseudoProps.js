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

    // console.log('┌[path: filterPseudoProps]\n' + '├[commonKeys]\n└─▶', commonKeys, '\n')
    // console.log('┌[path: filterPseudoProps]\n' + '├[specificKeys]\n└─▶', specificKeys, '\n')
    // console.log('┌[path: filterPseudoProps]\n' + '├[validKeys]\n└─▶', validKeys, '\n')

    // 결과 저장
    const pseudoProps = {}
    const nonPseudoProps = {}
    const isDynamic = Boolean(objectProps?.dynamic)

    if (pseudo) {
        Object.entries(objectProps).forEach(([key, value]) => {
            if (key === 'dynamic') {
                const dynamicPseudoProps = {}
                Object.entries(value).forEach(([innerKey, innerValue]) => {
                    if (validKeys.has(innerKey) && pseudo === innerKey) {
                        dynamicPseudoProps[innerKey] = innerValue
                    } else if (!setAllPseudoKeys.has(innerKey)) {
                        dynamicPseudoProps[innerKey] = innerValue
                    }
                })
                return (pseudoProps[key] = dynamicPseudoProps)
            } else if (validKeys.has(key) && pseudo === key) {
                pseudoProps[key] = value
            } else if (!setAllPseudoKeys.has(key) && !(pseudo === key)) {
                nonPseudoProps[key] = value
            }
        })
    } else if (pseudo === undefined) {
        Object.entries(objectProps).forEach(([key, value]) => {
            if (key === 'dynamic') {
                const dynamicPseudoProps = {}
                Object.entries(value).forEach(([innerKey, innerValue]) => {
                    if (validKeys.has(innerKey)) {
                        dynamicPseudoProps[innerKey] = innerValue
                    } else if (!setAllPseudoKeys.has(innerKey)) {
                        dynamicPseudoProps[innerKey] = innerValue
                    }
                })
                return (pseudoProps[key] = dynamicPseudoProps)
            } else if (validKeys.has(key)) {
                pseudoProps[key] = value
            } else if (!setAllPseudoKeys.has(key)) {
                nonPseudoProps[key] = value
            }
        })
    }

    // console.log('pseudoProps:', pseudoProps)
    // console.log('nonPseudoProps:', nonPseudoProps)
    return { pseudoProps, nonPseudoProps, isDynamic }
}
export default filterPseudoProps
