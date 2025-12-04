import { configureStore } from '@reduxjs/toolkit';
import offlineReducer from './offlineSlice';

export const store = configureStore({
  reducer: {
    offline: offlineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


