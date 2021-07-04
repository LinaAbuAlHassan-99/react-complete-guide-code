import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from './store/index'; // import its file also
//this store i import here i give it as a parameter to provider{store}
ReactDOM.render(
    
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// now any comp on this app can tap into store get data set subscibtion dispatch action