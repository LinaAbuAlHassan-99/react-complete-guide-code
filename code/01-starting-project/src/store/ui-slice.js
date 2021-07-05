import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisable: false },
  reducer: {
    toggle(state) {
      state.cartIsVisable = !state.cartIsVisable;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
