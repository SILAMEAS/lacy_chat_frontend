import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import chatReducer from './slice/chatSlice';
import { baseApi } from './api/baseApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
