import { useState } from 'react';


// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.

export default function UseState() {

    const [name, setName] = useState();
    const [count, setCount] = useState(0);
    return(
        <>
        <h1>Hi {name}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />

        <p>You have cliked {count} times.</p>
        <button onClick={()=>setCount(count + 1)}>Click Me</button>

        <br /><hr />
        </>
    )
}