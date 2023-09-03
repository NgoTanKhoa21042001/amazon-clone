import { configureStore } from "@reduxjs/toolkit";
import nextReducer from "./nextSlice";
export const store = configureStore({
  reducer: {
    next: nextReducer,
  },
});
// RootState là type của state của store.
// AppDispatch là type của hàm dispatch của store.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
