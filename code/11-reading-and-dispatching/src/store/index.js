import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
//// we can do this const initialCounterState = { counter: 0, showCounter: true, isAuth:false };
//// but there is no relation betwwen counter and authintication so i use onether  slice

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    ////
    /*login(state)
    {

    },
     */
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
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
    // method to change this state -> initialState: initialAuthState,
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// combine multible reducer 
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
//
export const authActions = authSlice.actions;

export default store;
