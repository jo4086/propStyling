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
}

const fetch = {
    type: 'div',
    ex: {
        test: 'test',
    }
}

const Box = {
    display: 'block',
    type: 'section',
    pseudo: undefined,
    ...fetch,
    ...BoxStyle,
}
const { display, type, pseudo, ...props } = Box
// console.log(display, type, pseudo, props)
filterPropsCore({ props, display, type, pseudo })

// console.log(Box)
// console.log(filterPropsCore({}))

// console.log({ attribute, display, validCss, invalidCss, type })
