import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux"; // useSelector hoc provide by redux
const Counter = () => {
  //here i distract the data
  // react redux will automaticly setup a subscribtion to the redux store fore this comp(make thi comp subscriber in store so any change will be hepend will change the state here also)
  // re executed to have the latest counter
  const counter = useSelector((state) => state.counter); //pass function(reseve the state of redux ) and return the part of state i need to extract(القيمه الي بدي اياها)
  
  // dispath actions
  //first he add two buton inc /dec
  const dispatch = useDispatch(); //return dispatch function so we can add action to store
  const incrementHandler = () => {
    dispatch({ type: "inc" });
  };
  const decrementHandler = () => {
    dispatch({ type: "dec" });
  };
  // const incrementby5Handler = ()=>{
  //   dispatch({type:'incby5'});
  // }
  //=== from index.js in store
  const increseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const toggleCounterHandler = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
