import "./App.css";
import Box from "./Components/Box";
import Heading from "./Components/Heading";
import StateHook from "./Hooks/StateHook";
import Counter from "./Components/counter";
import { useState } from "react";
import { Button } from "bootstrap";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ReducerComp from "./Components/ReducerComp";
import AdvReducer from "./Components/AdvReducer";

function App() {
  const [visibility, setVisibility] = useState(true);
  return (
    <>
      {/* <Box/> */}
      {/* <Heading naam="Sakshi" token="1" />
      <Heading naam="Rajat" token="2"/>
      <Heading naam="Gaurav" token="3"/> */}
      {/* <StateHook/> */}
      {/* <button onClick={() => setVisibility(!visibility)}>Toggle Button</button>

      {visibility ? <Counter /> : ""} */}
      {/* <BrowserRouter>
        <Navbar />
      </BrowserRouter> */}
      {/* <ReducerComp/> */}
      <AdvReducer/>
    </>
  );
}

export default App;
