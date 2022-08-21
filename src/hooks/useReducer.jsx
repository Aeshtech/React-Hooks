import {useReducer} from 'react';


// The useReducer Hook is similar to the useState Hook.
// It allows for custom state logic.
// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
//when multiple state should be change on a single action - by me

export default function UseReducer() {

    const [state,dispatch] = useReducer(reducer, {count : 0, showText : true})

    function reducer(state, action){
        switch(action.type){
            case "increment":
                return {count : state.count + 1, showText : state.showText }
            case "toggleText":
                return {count : state.count , showText : !state.showText};
           default:
            return state;
        }
    }

    return(
        <>
        <h1>You have clicked {state.count}</h1>
        <button onClick={ () => { dispatch({type:"increment"}); dispatch({type:"toggleText"}) }}>Click Here</button>
            
        <h3>{state.showText && "Hello I am Reducer hook."}</h3>

        <br /><hr />
        </>
    )
}
