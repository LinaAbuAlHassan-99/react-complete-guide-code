import { createSlice, createStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    //totalAmount: 0 not needed in this app
  },
  reducer: {
    addItemToCart(state, action) {
      const newitem = action.payload;
      // if it exist in array  i just increse totalQuantity
      const existingItem = state.items.find((item) => item.id === newitem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newitem.id,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price, // becuse whrn it added thats mean its for the first time so 1*pricw
          name: newitem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newitem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exidtingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      // if 1 i remove the item else i just decress the quantity
      if (exidtingItem.quantity === 1) {
        state.items = state.item.filter((item) => item.id !== id); // over ride the item wuth all item have id != to our id
      } else {
        exidtingItem.quantity--;
        exidtingItem.totalPrice = exidtingItem.totalPrice - exidtingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
