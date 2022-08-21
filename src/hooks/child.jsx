import React,{useEffect}from"react";

function Child({returnComment}) {
 useEffect(()=> {
    console.log("Child useEffect was called."); 
 },[returnComment]);

return <div>{returnComment()}</div> ;
}

export default Child;