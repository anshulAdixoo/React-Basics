import { useEffect, useState } from "react"

const light=[
  {color:"red"},
  {color:"green"},
  {color:"yellow"},
]
export default function TrafficLight(){
  const [index,setIndex]=useState(0);
  useEffect(()=>{
    let timerId=setTimeout(()=>{
      setIndex((prevInd)=>{
        return (prevInd+1)%3;
      })
    },1000)
    return ()=>clearTimeout(timerId)
  },[index])
  return (
    <div className="container">
      <h1>Traffic Light</h1>
      {
        light.map((item,ind)=>(
          <div key={ind} className="light"
            style={{backgroundColor:`${ind==index ? item.color:"white"}`} }>

          </div>
        ))
      }
    </div>
  )
}