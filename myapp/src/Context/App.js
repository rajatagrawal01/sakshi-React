import { useState } from "react";
import Navbar from "./Components/Navbar";
import { counterContext } from "./Context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        <Navbar />
      </counterContext.Provider>

    </>
  );
}

export default App;
