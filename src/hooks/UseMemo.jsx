import { useMemo, useState } from "react";

function calculateFactorial(num){
    if(num==10)console.log("called");
    if(num==1)return 1;
    return num*calculateFactorial(num-1);
}

export default function UseMemo(){
    const [count,setCount]=useState(0);
    const factorial=useMemo(()=>{
        return calculateFactorial(10);
    },[])
    return <div>
        <h1>UseMemo</h1>

        <p>factorial :{factorial}</p>

        <button onClick={()=>setCount(count+1)}>Increment</button>
        <p>Count: {count}</p>
    </div>
}