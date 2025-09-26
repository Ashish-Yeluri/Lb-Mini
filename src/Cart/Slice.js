import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  items: [],
  count: ''
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existing = state.items.find(item => item.id === product.id)
      if (existing) {
        existing.quantity += 1
      }
      else {
        // state.items.push({...product, quantity: 1})
        state.items.push({
          id: product.id,
          name: product.name,
          img: product.img,
          // price: product.price, // <-- Make sure this is included // if we dont give comas in between price then use this
          price: Number(product.price.replace(/,/g, '')),
          quantity: 1,
        });
      }
      // state.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearCart:(state) => {
      state.items = []
    },
    increaseCount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseCount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // remove item completely if quantity goes to 0
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    }
  }
})

export const { addToCart, removeFromCart, clearCart, increaseCount, decreaseCount } = cartSlice.actions

export default cartSlice.reducer