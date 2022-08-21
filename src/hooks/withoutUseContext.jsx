const Login = (props) => {
    console.log(props)
    return(
        <>
            <h1 style={props.theme}>Login</h1>
        </>
    )
}

const Logout = (props) => {
    return(
        <>
        <h1 style={props.theme}>Logout</h1>
        </>
    )
}

export {Login, Logout};