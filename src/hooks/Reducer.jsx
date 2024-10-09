import { useReducer } from "react";

function reducer(state,action){
    if(action.type=='increment'){
        return{
            age:state.age+1
        }
    }
    if(action.type=='decrement'){
        return{
            age:state.age-1
        }
    }
}
export default function Reducer(){
    const [state, dispatch] = useReducer(reducer, {age:20});
    return <div>
        <span>
            <h1>UseReducer</h1>
        </span >
        <div>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        </div>
        <p>Age: {state.age}</p>
    </div>
}