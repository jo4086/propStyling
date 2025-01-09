// style_CssKeys.js

const flexPropsKeys = [
    'display', // 반드시 'flex'여야 유효
    'flexDirection',
    'justifyContent',
    'alignItems',
    'gap',
]
// 그리드 박스 관련 속성
const gridPropsKeys = [
    'display', // 반드시 'grid'여야 유효
    'gridTemplateColumns',
    'gridTemplateRows',
    'gridGap',
    'alignItems',
    'justifyContent',
]

const tablePropsKeys = [
    'colspan', // 테이블 속성
    'rowspan',
    'cellSpacing',
    'cellPadding',
    'borderCollapse',
    'captionSide',
    'emptyCells',
    'tableLayout',
]

// 공통 속성
const commonPropsKeys = [
    'padding', // 공통속성
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingBottom',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'backgroundColor',
    'border',
    'borderTop',
    'borderBottom',
    'borderRight',
    'borderLeft',
    'borderRadius',
    'boxShadow',
    'width',
    'height',
    'maxWidth',
    'minWidth',
    'maxHeight',
    'minHeight',
    'aspectRatio',
    'boxSizing',
    'flexGrow',
    'outline',
    'tabindex',
    'caretColor',
    'pointerEvents',
    'left',
    'right',
    'top',
    'bottom',
    'userSelect',
    'cursor',
    'position',
    'zIndex',
    'objectFit',
    'resize',
    'textAlign',
    'lineHeight',
    'letterSpacing',
    'color',
    'fontSize',
    'fontWeight',
    'textDecoration',
    'fontFamily',
    'alignSelf',
    'justifySelf',
]
const validKeys = {
    flex: flexPropsKeys,
    grid: gridPropsKeys,
    table: tablePropsKeys,
    // common: commonPropsKeys,
}

const allCssKeys = new Set([...commonPropsKeys, ...tablePropsKeys, ...gridPropsKeys, ...flexPropsKeys])
// console.log('allCssKeys:', allCssKeys)

const styleCssKeys = (config) => {
    const { stringProps, attribute } = config

    // Step 1: 유효한 CSS 속성 키 정의
    const validCssKeys = new Set([...commonPropsKeys, ...(attribute ? validKeys[attribute] || [] : [])])

    // console.log('validCssKeys:', validCssKeys)

    // Step 2: stringProps 필터링
    const validCss = {}
    const invalidCss = {}
    const strings = {}

    Object.entries(stringProps).forEach(([key, value]) => {
        // console.log('validCssKeys.has(key):', `${key}:`, validCssKeys.has(key))
        // console.log('key', key)
        if (validCssKeys.has(key)) {
            validCss[key] = value
        } else if (allCssKeys.has(key)) {
            invalidCss[key] = value
        } else {
            strings[key] = value
        }
    })

    // console.log('strings:', strings)
    // console.log('validCss:', validCss)
    // console.log('invalidCss:', invalidCss)

    // Step 3: 반환
    return { validCss, strings }
}

export default styleCssKeys
