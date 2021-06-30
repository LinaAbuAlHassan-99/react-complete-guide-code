// if it not re execuseted its child will not re execute
// child-> MyParagraph
import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};
//Thats how i obtimize the code (reduce the virtual coper cost)
// memo tell the re act if props change then re evaluated when father re evaluate else no
// to tell the react not to re evaluate it even if the father re evaluate when thire is no change on props/state/contxst
export default React.memo(DemoOutput);
//memo it also cost 
// memo tell re act to re compare thecurrent props with th previse so this will cost
// cost for re store the previse cal and copareson 

// what cost is bigger re evaluate or memo
// its depend if the props in child will never change then memo is good //here i give the props fixed value(false)so never change
// if the props never change so re evaluate is gooder

// small app memo not worth in large may worth it
// memo cut point will not re evaluate all the compnant so its edge cut

/* here memo work onbutton no (check button comments) */

/*
false its re create when app re run so  why memo work in here and in function no
false its a bool so its primitive value , so when compare the 
prev valu with current will still the same
false===false-> true

but in function or array or obj(not primitive) not the same in JS
[1]===[1] -> false beacuse it refferance  
// function is object in JS so 
(props.onClick === props.previous.onClick-->false so here is a change in props)
*/
//Dose that mean memo not worth it when i use obj,arr,fun ?
// NO in 06-usecallback the ansower