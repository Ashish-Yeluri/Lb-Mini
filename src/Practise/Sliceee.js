import { createSlice } from "@reduxjs/toolkit"

var initialState = {
  items: []
}

export var Slicee = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const product = action.payload
      const existing = state.items.find(item => item.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({...product, quantity: 1})
      }
    },
    removeCart: (state,action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items=[]
    }
  }
})

export const { addCart, removeCart, clearCart } = Slicee.actions

export default Slicee.reducer