import { appSlice } from "./details";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: appSlice,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;