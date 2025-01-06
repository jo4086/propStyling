import Box from '../components/Box'

function Home() {
    return (
        <>
            <Box {...Box1}></Box>
            <Box {...Box2}></Box>
        </>
    )
}
export default Home

const hover = {
    color: 'blue',
    backgroundColor: 'gray',
}

const Box1 = {
    color: 'black',
    backgroundColor: 'white',
    hover,
    dynamic: {
        color: 'white',
        backgroundColor: 'darkred',
        hover: {
            ...hover,
            color: 'green',
        },
    },
}

const Box2After = {
    content: '<<',
    position: 'absolute',
    right: '-1px',
}
const Box2Before = {
    content: '>>',
    position: 'absolute',
    left: '-1px',
}

const Box2 = {
    position: 'relative',
    top: 0,
    left: 0,
    after,
    before,
    dynamic: {
        after: {
            ...Box2After,
            color: 'red',
        },
        before: {
            ...Box2Before,
            color: 'red',
        },
    },
}
