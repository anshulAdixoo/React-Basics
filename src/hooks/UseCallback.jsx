import React, { useState, useCallback } from 'react';
export default function ParentComponent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  },[count]) 
  const [parentCount,setParentCount]=useState(0);
  return (
    <div>
      <p>Parent Count: {parentCount}</p>
      <button onClick={()=>setParentCount(parentCount+1)}>pInc</button>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
function ChildComponent({ onClick }) {
  return (
    <button onClick={onClick}>Increment</button>
  );
}