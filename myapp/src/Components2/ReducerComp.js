import React, { useReducer } from "react";

export default function ReducerComp() {
//   const [count, setCount] = useState(0);

const reducer =(state,action)=>{
    console.log(state,action);
    if(action.type=="Increase"){
        console.log(action.type);
        return state+1
    }
    if(action.type=="Decrease"){
        console.log(action.type);
        return state-1
    }
}
  const [count, dispatch] = useReducer(reducer, 0);
//   console.log(useReducer);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({type:"Increase"})}>Increment</button>
      <button onClick={() => dispatch({type:"Decrease"})}>Decrement</button>
      {/* <button onClick={() => setCount(0)}>Reset</button> */}
    </div>
  );
}