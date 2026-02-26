import React, { useContext } from "react";
import Final from "./Final";
import { counterContext } from "../Context";

const Button = () => {
  const value = useContext(counterContext)
  console.log("Value in button",value);
  
  return (
    <>
      <span>
        Final Value is : <Final/>
      </span>
      <div>
        <button onClick={() => value.setCount((count) => count + 1)}>
          Button
        </button>
      </div>
    </>
  );
};

export default Button;
