import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '../services/apiSlice';
import selectedCardsReducer from '../src/app/slices/selectedCardsSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    selectedCards: selectedCardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
