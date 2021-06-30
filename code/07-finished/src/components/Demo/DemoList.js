import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
// i do sorting
//const sortedList = props.items.sort((//a,b)=>a-b)
  const { items } = props;
  // title will change if click change title so i need to reevaluate this comp 
  // but sort is not need to re evaluate ecuase it still sorted and sort are costly
  // so i use useMemo on input to this will never change untill input change like call back
  //just when new item added i need to re sort so i trach on it
  //items is an array so alwyse will re create it in App i need to useMemo in App.js the array i define it fixed by mu hand so nothing will chane so in seconde parameter empty
  
  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
  }, [items]); 

  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
