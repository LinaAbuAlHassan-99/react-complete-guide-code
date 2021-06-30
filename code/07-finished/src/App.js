import React, { useState, useCallback, useMemo } from 'react';
/* 
vidio 20+19
state created only on the first time the comp created so it just update it value
it will be recrated only when i render something on condetion like 
from parent i want to call button if something hapend
so the state for button will new create when true else will delete the stat so not render in the screen
//Scadual update 
// when i depend in the previous state i need to use the function  when
 i set the state so i dont mess the change and get the latest state 
 //setEffect work in the same way kep trach on the state change when other value change
 byt in state in the same value change
// when i call the state update function(,second arumant) state not 
updated emeditly no it scadualed when re run the comp will have the new state 

//when i use 2 state  update after each other //in the same function ->
// react will tack this two update and patch them to one update state so one schadual update change

*/
//vidio 22 last one

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
