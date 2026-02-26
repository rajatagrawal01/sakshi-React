import React, { useContext } from "react";
import { counterContext } from "../Context";

// With Context
const Final = () => {
  const value = useContext(counterContext);
  return <span>{value.count}</span>;
};

export default Final;
