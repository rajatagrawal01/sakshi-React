import "./App.css";
import Box from './Components/Box'
import Heading from "./Components/Heading";
import StateHook from "./Hooks/StateHook";

function App() {
  console.log("Hello");
  
  return (
    <>
      {/* <Box/> */}
      {/* <Heading naam="Sakshi" token="1" />
      <Heading naam="Rajat" token="2"/>
      <Heading naam="Gaurav" token="3"/> */}
      <StateHook/>

    </>
  );
}

export default App;