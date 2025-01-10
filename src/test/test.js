// import styleCssKeys from '../utils/style_cssKeys.js'
// import styleDisplayKeys from '../utils/style_displayKeys.js'
// import filterPropsCoreTest from './filterPropsCoreTest.js'
import filterPropsCore from './testUtils/filterPropsCore.js'
import styledCore from './testUtils/styledCore.js'

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
    display: 'inline-flex',
    backgroundColor: 'white',
    hover: {
        color: 'blue',
    },
    visited: {
        color: 'orange',
    },
    dynamic: {
        color: 'red',
        backgroundColor: 'blue',
        hover: {
            color: 'green',
        },
        placeholder: {
            color: 'pink',
        },
        marker: {
            markertest: 'a',
        },
        visited: {
            color: 'orange',
        },
    },
    gridGap: '10px',
    placeholder: {
        color: 'gray',
    },
    marker: {
        markertest: 'b',
    },
}

const fetch = {
    type: 'div',
    ex: {
        test: 'test',
    },
    // pseudo: 'hover',
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
    str: 'string',
    value: asd,
    ds: asd,
    ...fetch,
    ...BoxStyle,
}

console.log('')
// console.log(Box)

let { display, type, pseudo, ...props } = Box

const result = filterPropsCore({ props, display, type, pseudo })
const result2 = styledCore(result)
console.log(result2)
