import filterPseudoProps from './filter_pseudoProps.js'
import filterStyleProps from './filter_styleProps.js'

const filterPropsCore = (config) => {
    const { props, display, type, pseudo } = config
    const isValue = Boolean(props?.value || false)

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

    const { validCss, validDisplay, strings } = filterStyleProps({ stringProps, type, display })

    const { pseudoProps, nonPseudoProps, isDynamic } = filterPseudoProps({ objectProps, type, pseudo })

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

    const stylesProps = {
        $styles: styles,
    }
    const dynamic = isDynamic && isValue

    const result = {
        type,
        dynamic,
        ...nonStyles,
        ...stylesProps,
    }

    // 빈 객체일 경우 최상위 객체 자체를 빈 객체로 반환
    return Object.keys(result).length > 0 ? result : {}
}

export default filterPropsCore
