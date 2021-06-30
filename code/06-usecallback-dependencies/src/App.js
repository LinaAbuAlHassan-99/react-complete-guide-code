import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';
// make memo work with object by useCallback hok 
//useCallback -> alow us to store a function acrose copm execution
// so its alow us to tell re act to save a function and this function not be re created with every execution
// so the comparesopn will be done becuse bouth obj the prev and the cuurent point to the same obj in memory
/*
obj1=obj2// pont to the same place in memory
obj1===obj2---> true now

so save the function in the same meomory location so not change when re execute still point to the same function
 */
function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  // allowToggle --> to use closer
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');
  // use it by wrappe the function with callback
  // return the stored function so when react re look on it will be the same function (pass the same obj) 
  //Use callback allow us tostore a function so i can re use it
  // callback make the setShowParagraph not change(it store it) so i dont need to put it here 
  /* i want to till react to store the function but when allowToggle 
  change recreate the function so it will have the new value  */
  const toggleParagraphHandler = useCallback(() => {
    // only if allowToggle is true setShowParagraph will called
    // when i click Toggle Paragraph wil not do any thing untill i clik allow toggale button
    //so setShowParagraph will be updated if toggle is alowed(true)
    if (allowToggle) {//allow closer
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]); //[]array of dependancy , //alow closer
  // when callpack use will store the function and not change its values so allowToggle will not change when i click the button to change it i nee to added in array dependancy in second parameter in callback[]
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
