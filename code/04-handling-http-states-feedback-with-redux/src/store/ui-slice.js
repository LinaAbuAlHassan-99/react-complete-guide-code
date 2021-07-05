import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    // i can use useState in App.js and conditionaly{} render the comp jsx put since we have slice better to put it here 
    showNotification(state, action) {// kind of notification shuld pass in action 
      state.notification = {
        status: action.payload.status,//payload its an obj have prop status ,title,message 
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
