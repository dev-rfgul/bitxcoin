import { configureStore } from "@reduxjs/toolkit";
import timeStampReducer from "../feature/timeStamp/timeSlice";

export const store = configureStore({
  reducer: timeStampReducer,
});
