import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/DemoOutput/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParaVisibility = useCallback(() => {
    setShowParagraph((prevState) => !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParaVisibility}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
