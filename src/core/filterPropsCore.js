import filterStyleProps from '../utils/filter_styleProps'
import filterPseudoProps from '../utils/filter_pseudoProps'

const filterPropsCore = (props) => {
    const styleProps = filterStyleProps(props)
    const pseudoProps = filterPseudoProps(props)

    return {
        styleProps,
        pseudoProps,
    }
}

export default filterPropsCore
