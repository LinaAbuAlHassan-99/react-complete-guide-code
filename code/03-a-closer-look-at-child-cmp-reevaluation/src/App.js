import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  //the actual change happend in DemoOutput but the app com will run again becuse here we manege the state
  // will alwayse render but the text depend on click so its just the p will change so its just update not re render every thing
 //  <DemoOutput show={showParagraph} />
 // the props.show(show come from showParagraph so in app i change the state)
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
