import { useEffect, useState } from "react"


// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// Note that the function passed to useEffect will be fired only after the DOM changes are painted to the screen. 

export default function UseEffect() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (

        <>
            <h3>All Comments</h3>
            {data?.slice(0, 10).map((data, id) => {
                return (
                    <ul key={data.id}>
                        <li>Id = {data.id}</li>
                        <li>Post Id = {data.postId}</li>
                        <li>Name = {data.name}</li>
                        <li>Email = {data.email}</li>
                        <br />
                    </ul>
                )
            })
            }

            <br /><hr />
        </>

    )

}