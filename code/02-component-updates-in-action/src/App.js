import React, { useState } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
// to re evaluate i need change in props||context||state

function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  // just to check that wher ever the stat change wil re execute
  console.log("APP RUNNING"); // wher ever the stat change shulld exeute //

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
