import { useEffect, useRef, useState } from "react";

// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.
// If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.


export default function UseRef() {
    const [inputValue, setInputValue] = useState("");
    const [inputValue2, setInputValue2] = useState("");

    const count = useRef(0);
    const inputRef = useRef(null)
  
    useEffect(() => {
      count.current = count.current + 1;
    });

    const onClick = () => {
        setInputValue2(inputRef.current.value)   //accessing value of input directly from dom using inputRef
    }
  
    return (
      <>
        <h1>Component Render Count: {count.current}</h1>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

        <p>{inputValue2}</p>

        {/* Using 'inputRef'  to access dom element i.e input*/}
        <input type="text"  ref={inputRef} />  
        <button onClick={onClick}> Print Value </button>
      </>
    );
  }
