import { configureStore } from '@reduxjs/toolkit';
import skipsReducer from './skipsSlice';
import selectionReducer from './selectionSlice';

export const store = configureStore({
  reducer: {
    skips: skipsReducer,
    selection: selectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 