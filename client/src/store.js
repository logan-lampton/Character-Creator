import { configureStore } from '@reduxjs/toolkit'
// // //here is where I'll import any reducers that I create
import cartReducer from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// // //may make additional stores for users, menus, etc.