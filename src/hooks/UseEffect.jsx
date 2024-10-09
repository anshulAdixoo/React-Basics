import { useEffect, useState } from "react"

export default function UseEffect(){
    const [data,setData]=useState(undefined);
    async function fetchData(){
        try {
            const res=await fetch('https://dummyjson.com/users?limit=10');
            const {users}=await res.json();
            setData(users);
        } catch (error) {
            console.log("Error while fetching data :",error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return <div>
        <h1>UseEffect : Add sideffect in functional component (External calls, Add/remove eventlistner,clearTimeout)</h1>
        <ul>
            {data?.map((user,ind)=>{
                return <li key={ind}>{user.firstName} {user.lastName}</li>
            })}
        </ul>
    </div>
}