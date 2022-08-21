import{useCallback, useState} from"react";
import Child from"./child";
export default function UseCallback(){
  const[toggle,setToggle] = useState(false);
 const[data] = useState("Yo,pls sub to the channel!");


 //using useCallback hook
 const returnComment = useCallback(() => { return data }, [data]);

 return(
    <>
      <Child returnComment={returnComment}/>

       {toggle && <h1>toggle</h1>}
      <button onClick={()=>{ setToggle(!toggle);}}>Toggle</button>
      <br /><hr />
    </>
    );

 }
