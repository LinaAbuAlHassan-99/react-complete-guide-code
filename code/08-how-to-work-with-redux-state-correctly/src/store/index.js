import { createStore } from 'redux';

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
  
  if (action.type === 'increment') {
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
