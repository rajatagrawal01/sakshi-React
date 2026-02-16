import React, { useState } from "react";

export default function StateHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState(true);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h3>Name : {name}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <button>Submit</button> */}

    <br/>
      {visibility && <p>Now you see</p>}
      <button onClick={()=>setVisibility(!visibility)}>Click Here</button>
    </div>
  );
}
