import { createSlice, configureStore } from '@reduxjs/toolkit';

/*
use toolKit to sove problem
i need to install it fron terminal
npm install @reduxjs/toolkit
and i can delete redux from the pakedge becuse it is incide toolkit butnot a problem 
 */
const initialCounterState = { counter: 0, showCounter: true };
//createSlice take object as argument
// can create differant slice if the logic not directly related like ncrement and authintication
// and in differant file to make it mintable
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: { //reducers is map obj of all obj this slice need 
    increment(state) {///increment is an method(leatest state)
       // no need the action becuse this action will called depend on witch action is trigerd
      // no need the if statment 
      state.counter++;//here we can mutate the state 
      // becuse toolkit will clone the exesting state and create new state (create new obj put all not change state in it and change just the muted state) 
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {//we need payload(amount) so i need action 
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

/*
to use createSlice i need to use the return value
const store = createStore(counterSlice.reducer) here i can tack the values but still not dispatch
// with this case its not good for more than one so i useconfigureStore
 */
//we pass object (configiration object) reducer: -> singular becuse no mater if we use create store 
// or configureStore stil need one reducer function and its value can be 
//reducer: counterSlice.reducer, but with multiple slide i need obj
//so i put differant reducer function // toolkit will marge it behind the seen and meke it large obj
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

/*
actions will trat all function inside it as keies so i can use it
to dispatch i need
//counterSlice.actions.increment or any method in reducer
OR
export all of them and use it where i need it like in counter.js
counterSlice its like a key for all method inside reduser
*/
export const counterSlice = counterSlice.actions;// now we export action so i can use it 
export const authActions = authSlice.actions;

export default store;
