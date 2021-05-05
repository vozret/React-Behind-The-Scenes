import React, { useState, useCallback, useMemo } from "react";

// useCallback -> so that we can use React.memo on the Button component

import "./App.css";
import DemoList from "./components/Demo/DemoList";
//import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 1, 3, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change Title!</Button>
    </div>
  );
}

export default App;
