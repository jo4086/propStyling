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
    '*': ['selection', 'first-line', 'first-letter'], // 대부분 태그에서 동작
}

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

const fpVType = ({ props, pesudo, type = undefined }) => {
    
}
export default fpVType