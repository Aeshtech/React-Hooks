import { useEffect, useMemo, useState } from "react";

export default function UseMemo() {

    const [data, setData] = useState(null)
    const[status, setStatus] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])


    //LongestName function computes repeatedly on toggling "status" state and we know whenever any state change in react it render component again  due to this function also compute every time on any state changes.
    //Function to find out the longest name from the array of object we have provided
    const findLongestName = (comments) => {
        if (!comments) return null;
        
        let longestName = ""
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName =  currentName;
            }
        }
        console.log("THIS WAS COMPUTED");
        console.log("Longest name - " + longestName);
        return longestName;
    }
    
    //To protect the issue we can use 'useMemo' hook.
    const longestName = useMemo(()=>(findLongestName(data)), [data]) 

    return (
        <>
            <h5>Longest Name in comments - <br /> {longestName}</h5>
            <h1>Hello - {status ? "useMemo" : ""}</h1>

            <button onClick={(e) => setStatus(!status)}> <b>Change Status</b> </button>
            <br /><hr />
        </>
    )
}