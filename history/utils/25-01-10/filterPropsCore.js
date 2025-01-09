import filterPseudoProps from './filter_pseudoProps.js'
import filterStyleProps from './filter_styleProps.js'

const filterPropsCore = (config) => {
    const { props, display, type, pseudo } = config
    // console.log('┌[path: filterPropsCore]\n' + '├[type]\n└─▶', type, '\n')

    const objectProps = {} // 객체형 프롭스
    const stringProps = {} // 문자열형 프롭스
    const functionProps = {} // 함수형 프롭스

    Object.entries(props).forEach(([key, value]) => {
        if (typeof value === 'function') {
            functionProps[key] = value // 함수형 프롭스 분류
        } else if (typeof value === 'object' && value !== null) {
            objectProps[key] = value // 객체형 프롭스 분류
        } else {
            stringProps[key] = value // 문자열형 프롭스 분류
        }
    })

    // console.log('┌(objectProps)\n└─▶', objectProps)

    const { validCss, validDisplay, strings } = filterStyleProps({ stringProps, type, display })

    const { pseudoProps, nonPseudoProps } = filterPseudoProps({ objectProps, type, pseudo })
    // console.log('┌(pseudoProps)\n└─▶', pseudoProps)
    // console.log('┌(nonPseudoProps)\n└─▶', nonPseudoProps)

    // console.log('')
    // console.log('validDisplay:', validDisplay)
    // console.log('validCss:', validCss)
    // console.log('pseudoProps:', pseudoProps)
    // console.log('')
    // console.log('nonPseudoProps:', nonPseudoProps)
    // console.log('functionProps:', functionProps)
    // console.log('strings:', strings)

    const styles = {
        ...(validDisplay && { display: validDisplay }),
        ...(validCss || {}),
        ...(pseudoProps || {}),
    }

    const nonStyles = {
        ...(functionProps || {}),
        ...(nonPseudoProps || {}),
        ...strings,
    }
    console.log('styles:', styles)
    console.log('nonStyles: ', nonStyles)

    const stylesProps = {
        $styles: styles,
    }

    console.log('stylesProps:', stylesProps)
    const result = {
        type,
        ...functionProps, // 함수형 프롭스를 그대로 추가
        ...(validDisplay && { $display: validDisplay }), // display는 그대로 사용
        ...(validCss || {}), // validCss의 속성을 해체하여 추가
        ...(pseudoProps || {}), // pseudoProps의 속성을 해체하여 추가
        ...(nonPseudoProps || {}), // nonPseudoProps의 속성을 해체하여 추가
    }

    // 빈 객체일 경우 최상위 객체 자체를 빈 객체로 반환
    return Object.keys(result).length > 0 ? result : {}
}

export default filterPropsCore

// console.log('┌(props)\n└─▶', props)
// console.log('┌(display)\n└─▶', display)

// console.log('┌(type)\n└─▶', type)
// console.log('┌(pseudo)\n└─▶', pseudo)

// console.log('┌(objectProps)\n└─▶', objectProps)
// console.log('┌(stringProps)\n└─▶', stringProps,'\n')
// console.log('┌(functionProps)\n└─▶', functionProps)

// console.log('┌(pseudoProps)\n└─▶', pseudoProps)
// console.log('┌(nonPseudoProps)\n└─▶', nonPseudoProps)
// console.log('┌(validCss)\n└─▶', validCss)
// console.log('┌(validDisplay)\n└─▶', validDisplay)
