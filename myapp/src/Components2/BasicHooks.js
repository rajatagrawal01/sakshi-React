// Single side working========================================

import { useState } from "react";

export default function BasicHooks() {
  const [inputText, setInputText] = useState("");
  const [inputAge, setInputAge] = useState(0);
  const [headingName, setHeadingName] = useState("");
  const [headingAge, setHeadingAge] = useState("");

  return (
    <div>
      <h1>
        Hello,{headingName}, Your age is {headingAge}
      </h1>
      Name:
      <input type="text" onChange={(e) => setInputText(e.target.value)} />
      Age:
      <input type="number" onChange={(e) => setInputAge(e.target.value)} />
      <button onClick={() => setHeadingName(inputText)}>
        Click Here to change Name
      </button>
      <button onClick={() => setHeadingAge(inputAge)}>
        Click Here to change Age
      </button>
    </div>
  );
}

// Toggle side working========================================

// import {useState} from 'react'
// import on from '../assets/on.jpg'
// import off from '../assets/off.jpg'

// export default function BasicHooks() {
//     const [isClicked,setIsClicked]=useState(true);
//   return (
//     <div>
//       {/* <h1>Button is: {isClicked?"On":"Off"}</h1> */}
//       <img src={isClicked?on:off} />
//       <button onClick={()=>setIsClicked(!isClicked)}>Toggle</button>
//     </div>
//   )
// }
