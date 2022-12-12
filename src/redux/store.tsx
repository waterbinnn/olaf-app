import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import wishSlice from './wishSlice';

export const store = configureStore({
  reducer: {
    wish: wishSlice,
    todo: todoSlice,
  },
});
