// every time the parent re loade the child com will re load
// DemoOutput + Button comp its bouth child to App so will re evaluate where ever App re evaluate
import React from 'react';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  // render thr p conditanaly (if prop.show == true the p will apper else,'')
  // will alwayse render but the text depend on click
 ;// props change with every click so will re evaluate 
  //so will print with every click
  //even if i pass false (show=false) it will execute with every click
  //becuase when i change the state the app com re load and the DemoOutput comp reloded also
  //its part of the parent comp but nothing change in the p alwayse empty p becuase false
  return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default DemoOutput;
