import { configureStore } from "@reduxjs/toolkit";
import carReducer from '../cars/carSlice'
export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});
