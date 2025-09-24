import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../Cart/Slice';
import userReducer from '../Data/userSlice'
import cartReducer from '../Cart/Slice'; 
import ashishReducer from '../Practise/Sliceee'

export const Store = configureStore({
  reducer: {
    users: userReducer,
    cart: cartReducer, 
    cart2: ashishReducer
  },
});
