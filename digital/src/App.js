import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="App">
        <div className="elementcontainer">
          <h1>Digital Clock</h1>
          <div className="timeparent">
            <div className="timecontainer">
              <span className="time">{time.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
