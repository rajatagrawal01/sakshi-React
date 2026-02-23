import { useState,useEffect,useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const a=useRef(0);

  useEffect(()=>{
    
    console.log("Component mounted");
    return function(){
      console.log("Component unmounted");
    }
  },[])

  useEffect(()=>{
    a.current=a.current+1;
    console.log("componenet updated");
    console.log("Value of a is :",a);  
  },[count])
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
