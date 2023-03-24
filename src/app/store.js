import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/car/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
