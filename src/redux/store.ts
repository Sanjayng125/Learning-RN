import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import usersReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: usersReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
