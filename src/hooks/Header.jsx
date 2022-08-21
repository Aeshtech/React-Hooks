import { Login, Logout } from './withoutUseContext'
// React Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.


//Header1 component is consuming props even if it has no need just to pass to child component it is using props.  So this is a problem of props drilling. 
export default function Header(props){
    return(
        <>
         <Login theme={props.theme} />
         <Logout theme={props.theme} />
         <br /><hr />
        </>
    )
}