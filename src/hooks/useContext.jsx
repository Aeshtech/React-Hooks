import { useContext } from 'react';
import Context from "./createContext";



//useContext hook use context object provided by context provider and return its value
const Login =  () => {
    const theme = useContext(Context);

    return(
        <>
            <h1 style={theme}>Login </h1>
        </>
    )
}

const Logout = () => {
    const theme = useContext(Context);

    return(
        <>
        <h1 style={theme}>Logout</h1>
        <br /><hr />
        </>
    )
}

export {Login, Logout} ;