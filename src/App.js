import React, { useState, useCallback } from "react";

// useCallback -> so that we can use React.memo on the Button component

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING!");

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevState) => {
      return !prevState;
    });
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Show paragraph!</Button>
    </div>
  );
}

export default App;
