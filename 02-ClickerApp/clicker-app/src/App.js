import React, { useState } from "react";
import Header from "./component/Header";
import Clicker from "./component/Clicker";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="App">
      <Header title="Clicker App" />
      <Clicker
        number={count}
        addNumber={incrementCount}
        removeNumber={decrementCount}
        resetNumber={resetCount}
      />
    </div>
  );
}
