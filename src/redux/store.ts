import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import cartReducer from './cartSlice';
import languageReducer from './languageSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
