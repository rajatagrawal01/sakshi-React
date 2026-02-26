import React, { useReducer } from "react";

export default function AdvReducer() {
  let initialState = {
    count: 10,
    incr: 2,
    decr: 2,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "Increase":
        console.log("Increase");
        return { ...state, count: state.count + 1 };
      case "Decrease":
        console.log("Decrease");
        return { ...state, count: state.count - 1 };
      case "Reset":
        console.log("Reset");
        return { ...state, count: initialState.count };

      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "Increase" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrease" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}
