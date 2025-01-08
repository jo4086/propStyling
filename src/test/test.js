// import styleCssKeys from '../utils/style_cssKeys.js'
// import styleDisplayKeys from '../utils/style_displayKeys.js'
// import filterPropsCoreTest from './filterPropsCoreTest.js'
import filterPropsCore from './testUtils/filterPropsCore.js'

// const testProps = {
//     stringProps: {
//         flexDirection: 'row',
//         color: 'blue',
//         cellSpacing: '10px', // 잘못된 속성
//     },
//     type: 'div',
//     display: 'inline-block',
//     shoude: 'abc',
// }
// const type = testProps.type
// const { attribute, display } = styleDisplayKeys(testProps.type, testProps.display)
// const { validCss, invalidCss } = styleCssKeys({
//     stringProps: testProps.stringProps,
//     attribute,
// })

const BoxStyle = {
    color: 'black',
    display: 'flex',
    backgroundColor: 'white',
    hover: {
        color: 'blue',
    },
    dynamic: {
        color: 'red',
        hover: {
            color: 'green',
        },
    },
    gridGap: '10px',
}

const fetch = {
    type: 'thead',
    ex: {
        test: 'test',
    },
}
const asd = (e) => {
    if (e) {
        console.log('function 존재')
    }
    console.log('function 미존재')
}

const Box = {
    display: 'table',
    type: 'section',
    pseudo: undefined,
    ds: asd,
    ...fetch,
    ...BoxStyle,
}

let { display, type, pseudo, ...props } = Box

const result = filterPropsCore({ props, display, type, pseudo })

console.log(result)
