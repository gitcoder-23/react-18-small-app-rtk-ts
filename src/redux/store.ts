import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// fully type defined 'RootState' Reducers
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
