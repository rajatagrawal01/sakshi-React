import React from "react";

export default function PropDrilling() {
  return (
    <div>
      <h1>This is component 1</h1>
      <ChildComponent text="Rajat" />
    </div>
  );
}
const ChildComponent = (props) => {
  return (
    <div>
      <h1>This is component 2</h1>
      <GrandChildComponent text={props.text} />
    </div>
  );
};
const GrandChildComponent = (props) => {
  return (
    <div>
      <h1>This is component 3 </h1>
      <GreatGrandChildComponent text={props.text} />
    </div>
  );
};
const GreatGrandChildComponent = (props) => {
  return (
    <div>
      <h1>This is component 4, {props.text}! how are you?</h1>
    </div>
  );
};
