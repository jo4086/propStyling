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

const tagSpecificPseudo = {
    input: ['placeholder', 'selection', 'file-selector-button'],
    textarea: ['placeholder', 'selection'],
    li: ['marker'],
    dialog: ['backdrop'],
}

const filterPseudoProps = (config) => {
    const { objectProps, type, pseudo } = config

    // console.log(tagSpecificPseudo[type])

    // 1. 유효한 선택자 정의
    const commonKeys = new Set(commonPseudoKeys)
    const specificKeys = new Set(tagSpecificPseudo[type] || [])
    const validKeys = new Set([...commonKeys, ...specificKeys])

    console.log('┌[path: filterPseudoProps]\n' + '├[commonKeys]\n└─▶', commonKeys, '\n')
    console.log('┌[path: filterPseudoProps]\n' + '├[specificKeys]\n└─▶', specificKeys, '\n')
    console.log('┌[path: filterPseudoProps]\n' + '├[validKeys]\n└─▶', validKeys, '\n')

    // 결과 저장
    const pseudoProps = {}
    const nonPseudoProps = {}

    // 2. Dynamic 처리 및 일반 객체 처리
    Object.entries(objectProps).forEach(([key, value]) => {
        if (key === 'dynamic') {
            // Dynamic 내부의 키를 유효한 선택자와 비교
            const dynamicPseudoProps = {}
            Object.entries(value).forEach(([innerKey, innerValue]) => {
                if (validKeys.has(innerKey) && (!pseudo || pseudo[innerKey])) {
                    dynamicPseudoProps[innerKey] = innerValue // $ 제거
                }
            })

            if (Object.keys(dynamicPseudoProps).length > 0) {
                pseudoProps[`$${key}`] = dynamicPseudoProps // Dynamic 외부에만 $ 추가
            }
        } else if (validKeys.has(key) && (!pseudo || pseudo[key])) {
            // 유효한 가상 선택자 처리
            pseudoProps[`$${key}`] = value
        } else {
            // 일반 객체 속성 처리 (nonPseudoProps에 포함)
            nonPseudoProps[key] = value
        }
    })

    return { pseudoProps, nonPseudoProps }
}
export default filterPseudoProps

/* 
   Object.entries(objectProps).forEach(([key, value]) => {
        if (key === 'dynamic') {
            // Dynamic 내부의 키를 유효한 선택자와 비교
            const dynamicPseudoProps = {}
            Object.entries(value).forEach(([innerKey, innerValue]) => {
                if (validKeys.has(innerKey) && (!pseudo || pseudo[innerKey])) {
                    dynamicPseudoProps[`$${innerKey}`] = innerValue
                }
            })

            if (Object.keys(dynamicPseudoProps).length > 0) {
                pseudoProps[`$${key}`] = dynamicPseudoProps
            }
        } else if (validKeys.has(key) && (!pseudo || pseudo[key])) {
            // 3. 유효한 가상 선택자 처리
            pseudoProps[`$${key}`] = value
        } else {
            // 4. 일반 객체 속성 처리 (nonPseudoProps에 포함)
            nonPseudoProps[key] = value
        }
    })
*/
