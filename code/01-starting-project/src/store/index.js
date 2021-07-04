// redux logic
import {createStore} from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "inc") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "dec") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

// now i want to conect react app to this store

export default store; //we have only one store so we need to provide it only once

//Providing the store is :
/*
// if my entire i app need it i need to giv it to the hiest level(app) 
i provide it to the hire point whre we render our root (app)
in this case in index.js 
first i need to import { Provider } from "react-redux"; import store from './store/index';
then i need to wrap the app with  <Provider store={store}>
now app qnd its child and there child and so on can user the store data(state)
*/
