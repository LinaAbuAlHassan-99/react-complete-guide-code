import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// here i can import counterSlice but we dont needall we just nede reducer so i export. reducer in its file

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
