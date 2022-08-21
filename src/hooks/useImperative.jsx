import { useRef } from "react"
import Button from "./Button"


export default function UseImperative(){
    const buttonRef = useRef(null)

    return(
        <>
        <button onClick={()=> buttonRef.current.alterToggle()}>Parent Button</button>
        <Button ref={buttonRef}/>

        <br /><hr />
        </>
    )
}