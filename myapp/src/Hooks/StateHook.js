import React, { useState } from "react";

export default function StateHook() {
  const [count, setCount] = useState(0);
  const [visibility, setVisibility] = useState(true);
  
  const [name, setName] = useState("");
  const [heading,setHeading] = useState("");
  const [users,setUsers] = useState([])



  return (
    <div>
      {/* Number useState */}
      {/* <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button> */}

      {/* String useState */}
      <h3>Name : {heading}</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={()=>setHeading(name)}>Submit</button>
      <br />
      {/* Boolean useState */}
      {/* {visibility && <p>Now you see</p>}
      <button onClick={()=>setVisibility(!visibility)}>Click Here</button> */}
    </div>
  );
}


//[
// {
//   name:"",
//   age:,
//   city:,
//   mob:
// },
// {
//   name:"",
//   age:,
//   city:,
//   mob:
// },// {
//   name:"",
//   age:,
//   city:,
//   mob:
// }]
