import { createStore } from 'redux';
// there is some prolem 
//1) the identifer may be have a typo mistak
//2) the state object may be very big (if there is alot of state)
//3) state imutability ( sure that not change the state no do the changing inside the return)

//SOLUTION
//1) also import it in Counter.js
const INCREMENT ='increment';// and in counter use this identefier
//there is a lot of solution but i dont need to to this any more i need toolkit in secont directory i use it
const initialState = { counter: 0, showCounter: true };
/*
the object return from ower reducer
alwyes we return new obj(new state) redux will replace the old state with it
so the obj will no be marged with existing state it will replace it
so that here i wrote every state in every return even if its not use it
   return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
    // here i just increse so no need to toggel button but becuse redux overide the obj i need to put it her

    So we must put all state in return 
*/
const counterReducer = (state = initialState, action) => {
  //'increment' this is identifer
  if (action.type === INCREMENT) {
// why i dont do this so dont write the all state in return every time?
// beacuse when we work with redux we should never mutate (change) the existing state 
//insted over ride it by return new obj 
//becuse obj and [] work are refferance values
    //state.counter++;// never change the state like this it my return side effect not wanted
    //return state;

//alwyes crete new obj like this (when ever i need to update i need to put it in return (create new obj))
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'increase') {
    //state object
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
