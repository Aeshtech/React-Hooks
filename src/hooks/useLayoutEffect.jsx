const { useEffect, useLayoutEffect } = require("react");

//  It fires synchronously after all DOM mutations but before painting to screen. Use this to read layout from the DOM and synchronously re-render.


// The useLayoutEffect function is triggered synchronously before the DOM mutations are painted. However, the useEffect function is called after the DOM mutations are painted.

export default function UseLayoutEffect(){

    useEffect(() => {
        console.log("USE EFFECT FUNCTION TRIGGERED");
    });
    useLayoutEffect(() => {
        console.log("USE LAYOUT EFFECT FUNCTION TRIGGERED");
    })

    return(
        <>
        <p>Hi This is an example of react useLayoutEffect hook.</p>
        <p>You can see in console that even though the "useLayoutEffect" Hook is placed after the "useEffect" Hook, the useLayoutEffect Hook is triggered first!</p>
        <p>Because the useLayoutEffect function is triggered synchronously before the DOM mutations are painted</p>
        </>
    )
}