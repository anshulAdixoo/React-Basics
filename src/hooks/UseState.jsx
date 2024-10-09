import { useState } from "react"

export default function UseState(){
    const [count,setCount]=useState(0);
    return <div>
        <h1>UseState</h1>
        <div>
            <button onClick={()=>setCount((prev)=>prev+1)}>Add</button>
            <button onClick={()=>setCount((prev)=>prev-1)}>Sub</button>
        </div>
        <p>Count : {count}</p>
    </div>
}