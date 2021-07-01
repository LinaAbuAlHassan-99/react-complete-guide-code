import { useState, useEffect } from "react";
// here i use coustom hoc
import useCounter from "../hooks/use-counter";
import Card from "./Card";
/*
its like a doublicate code just + /- different
so its like i need to compine them in one function ( and custom hoc is like this)

 */
const ForwardCounter = () => {
  /*
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // start counting up and every 1 sec setnew counter state
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);// very simeler like backword but -1 rather +1
    }, 1000);

    return () => clearInterval(interval);
  }, []);
*/

// USE COUSTOM HOC
  // call it
  // every componant will reseve its own state not share state just the logic share not the state
  const counter = useCounter(true); // i can not passs any thing becuse the defaultis foreord
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
