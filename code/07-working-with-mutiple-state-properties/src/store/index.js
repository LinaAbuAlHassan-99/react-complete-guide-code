//handel multiple state 
import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };//new state showCounter 

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter// need to set here beacuse
      //for all object and redux will not marge over all object with the curent state 
      // insted he take this return and replase the exisit state with it 
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }
//
  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,// set it opisit of what it was
      counter: state.counter// we dont need to chnge on his state here so i just return state
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;