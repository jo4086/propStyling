// import filterPropsCore from '../../core/filterPropsCore.js'
// import { Box } from './styles/customStyled'

const Box = ({ display = 'flex', type = 'div', pseudo, children, ...props }) => {
    // const { filteredProps, dynamic } = filterPropsCore(props, display, type, pseudo)
    console.log(display, type, pseudo, props)

    // return({filteredProps, dynamic})
    // return (
    //     <>
    //         <Box as={type} $display={display} {...filteredProps} className={filterPropsCore.value && dynamic ? 'dynamic' : ''}>
    //             {children}
    //         </Box>
    //     </>
    // )
}
export default Box
