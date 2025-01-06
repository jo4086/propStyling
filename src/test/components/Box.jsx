import { filterProps } from './util'
import { Box } from './styles/customStyled'

const Box = ({ display = 'flex', type = 'div', pseudo, children, ...props }) => {
    const filteredProps = filterProps(props, display, true, pseudo)

    return (
        <>
            <Box as={type} $display={display} {...filteredProps} className={value && dynamic ? 'dynamic' : ''}>
                {children}
            </Box>
        </>
    )
}
export default Box
